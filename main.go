package main

import (
	"fmt"
	zksync2 "github.com/zksync-sdk/zksync2-go"
	"log"
)

func main() {
	zp, err := zksync2.NewDefaultProvider("https://testnet.era.zksync.dev")
	if err != nil {
		log.Panic(err)
	}
	defer zp.Close()

	// get first 255 tokens
	tokens, err := zp.ZksGetConfirmedTokens(0, 255)
	if err != nil {
		log.Panic(err)
	}

	for _, token := range tokens {
		fmt.Printf("%+v\n", *token)
	}
}
