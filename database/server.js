const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bcrypt = require("bcryptjs");
import { UserDtls } from '../Model/UserDetails'
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");

mongoose.connect("", { useNewUrlParser: true, userUrifieldTopology: true });
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("connect success");
});

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const user=mongoose.model("UserInfo");

//register post işlemi
app.post("/register",async(req,res)=>{
  const {name,Surnama,email,Password}=req.body;

  const encryptedPassword = await bcrypt.hash(Password, 10);
  try {
    const oldUser=user.findOne({email})
    if(oldUser){
      res.send({error:"User Exits"})
    }
    await user.create({
      name,
      Surnama,
      email,
      Password:encryptedPassword
    })
    res.send({status:"OK"})
  } catch (error) {
    res.send({status:"ERROR"})
  }
})

//login post işlemi
app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "15m",
    });

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});


//Kullanıcı bilgileri tarama post
app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    console.log(user);
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) { }
});

app.listen(port, () => {
  console.log(`Server running ${port}`);
});
