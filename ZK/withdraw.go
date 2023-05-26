package main

import (
	"context"
	"fmt"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/rpc"
	"github.com/zksync-sdk/zksync2-go"
	"log"
	"math/big"
	"os"
)

func main() {
	var (
		PrivateKey       = os.Getenv("PRIVATE_KEY")
		ZkSyncProvider   = "https://testnet.era.zksync.dev"
		EthereumProvider = "https://rpc.ankr.com/eth_goerli"
	)

	// Connect to zkSync network
	zp, err := zksync2.NewDefaultProvider(ZkSyncProvider)
	if err != nil {
		log.Panic(err)
	}
	defer zp.Close()

	// Create singer object from private key for appropriate chain
	chainID, err := zp.ChainID(context.Background())
	if err != nil {
		log.Fatal(err)
	}
	es, err := zksync2.NewEthSignerFromRawPrivateKey(common.Hex2Bytes(PrivateKey), chainID.Int64())
	if err != nil {
		log.Fatal(err)
	}

	// Create wallet
	w, err := zksync2.NewWallet(es, zp)
	if err != nil {
		log.Panic(err)
	}

	// Connect to Ethereum network
	ethRpc, err := rpc.Dial(EthereumProvider)
	if err != nil {
		log.Panic(err)
	}
	_, err = w.CreateEthereumProvider(ethRpc)
	if err != nil {
		log.Panic(err)
	}

	// Perform withdraw
	wHash, err := w.Withdraw(
		w.GetAddress(),
		big.NewInt(1000000000),
		nil,
		nil,
	)
	if err != nil {
		panic(err)
	}
	fmt.Println("Withdraw transaction: ", wHash)

	// Wait until transaction is finalized
	_, err = w.GetProvider().WaitFinalized(context.Background(), wHash)
	if err != nil {
		panic(err)
	}

	// Perform finalize withdraw
	fwHash, err := w.FinalizeWithdraw(wHash, 0)
	if err != nil {
		panic(err)
	}
	fmt.Println("Finalize withdraw transaction", fwHash)
}
