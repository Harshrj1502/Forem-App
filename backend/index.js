import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cors from "cors"

const app = express();
// set by default view to ejs
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());

//  database
mongoose
    .connect("mongodb://localhost:27017", {
        dbName: "loginpagesss",
    }).then(() => {
        console.log("database connected");
    })
    .catch((e) => {
        console.log(e);
    })

// set data format
const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
const User = mongoose.model("User", messageSchema);

// backend
app.use(cookieParser());
// authentication
const isauthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        const decoded = jwt.verify(token, "codeencodedcode");
        // acess user data 
        req.user = await User.findById(decoded._id);
        next();
    }
    else {
        res.render("loginpage")
    }
}


app.get("/", isauthenticated, (req, res) => {
    res.render("/");
})
// bodyparser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// signup
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post("/RegisterPage", urlencodedParser, async (req, res) => {
    // password is encrypted
    // create data in mongodb
    const { username, email, password } = req.body;
    console.log("check",req.body);
    const hashedpassword = await bcrypt.hash(password, 10)
    const user = await User.create({
        username, email, password: hashedpassword
    })
    console.log(user);

    // for authentication token has been created
    const token = jwt.sign({ _id: user._id }, "codeencodedcode")
    // console.log(token);

    // save cookies
    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 1000),
    })

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
    
    // redirect to same page
     res.render("/logout", { name: user.username })
})

// loginpage
app.post("/Loginpage", urlencodedParser, async (req, res) => {
    // fetch user data
    const { email, password } = req.body;
    console.log(req.body);
    
    let user = await User.findOne({ email });

    if (!user)
        return res.render("signup", { message: "New User" })
    else {
        // match encrypted password
        const ismatch = await bcrypt.compare(password, user.password)
        if (ismatch) { return res.render("logout", { name: user.name }) }
        else { return res.render("loginpage", { message: "Incorrect Password" }) }
    }
})

// logout
app.get("/logout", (req, res) => {
    res.cookie("token", null, {
        httpOnly: true,
        expires: new Date(Date.now())
    });
    res.redirect("/");
})
// listen
app.listen(5170, () => {
    console.log("server connected");
})