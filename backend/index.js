const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const MONGO_URI = "mongodb://127.0.0.1:27017/websiteNew";
const jwt = require("jsonwebtoken");
const JWT_SECRET = "234567asdfgyu!@$%^YGF";
const bcrypt = require("bcrypt");
const PORT = 8001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use()
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("DB connected..."))
  .catch((err) => console.log(err));

//  User schema and model:
const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  user_name: String,
  password: String,
});

const user = mongoose.model("colls", userSchema);

// Product schema and model:
const productSchema = new mongoose.Schema({
  Item: String,
  company: String,
  size: String,
  target_aud: String,
  price: String,
  image: String,
});

const product = mongoose.model("products", productSchema);

// const authToken = (req, res, next) => {
//     const token = req.headers["authorization"]?.replace("Bearer ", "")
//     if (!token) {
//         res.status(401).json({ message: "token not found" })
//     }
//     try {
//         const decoded = jwt.verify(token, JWT_SECRET)
//         req.user = decoded;
//         next();
//     } catch {
//         res.status(401).json({ message: "Error fetching token" })
//     }

// }

app.get("/", async (req, res) => {
  const userData = await user.find();
  res.json(userData);
});

app.get("/api/product", async (req, res) => {
  const productData = await product.find();
  // console.log(productData); // Debug here
  res.json(productData);
});

// app.get("/", authToken, async (req, res) => {
//     const myUser = await user.find();
//     res.json(myUser);
// })

app.post("/user/register", async (req, res) => {
  try {
    const { first_name, last_name, email, user_name, password } = req.body;
    const saltRounts = 10;
    const hashpassword = await bcrypt.hash(password, saltRounts);
    // console.log(hashpassword);
    const newUser = new user({
      first_name,
      last_name,
      email,
      user_name,
      password: hashpassword,
    });
    // console.log(newUser);
    await newUser.save();
    
    res.status(201).json({ message: "Successfully registered!" });
  } catch (err) {
    res.status(500).json({ message: "Error encountered." });
  }
});

app.post("/users/login", async (req, res) => {
  const { userNameOrEmail, password } = req.body;
  const Singleuser = await user.findOne({
    $or: [{ user_name: userNameOrEmail }, { email: userNameOrEmail }],
  });
  if (Singleuser) {
    const isMatch = bcrypt.compareSync(password, Singleuser.password);
    if (isMatch) {
      //   const token = jwt.sign(
      //     { id: Singleuser._id, email: Singleuser.email },
      //     JWT_SECRET,
      //     { expiresIn: "1h" }
      //   );
      //   console.log(token);
      //   res.status(200).json({
      //     message: "Successfully logged in...",
      //     token,
      //     user: {
      //       email: Singleuser.email,
      //       user_name: Singleuser.user_name,
      //     },
      //   });
      res.status(200).json({ message: "Successfully logged in..." });
    } else {
      res.status(501).json({ message: "Invalid Password" });
    }
  } else {
    res.status(500).json({ message: "User invalid!!!" });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
