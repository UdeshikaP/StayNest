const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const UserModel = require("../models/User");

//get alll users 
// Get all users (Admin only)
router.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({
      Status: "Success",
      data: users,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user in DB
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Send success response
    res.status(200).json({ 
      message: "Login successful", 
      user: { firstName: user.firstName, lastName: user.lastName, email: user.email }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


// Add a new user
router.post("/add", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password
    const newUser = new UserModel({ firstName, lastName, email, password: hashedPassword });
    const savedUser = await newUser.save();
    res.json({ message: "User added successfully", user: savedUser });
  } catch (error) {
    res.status(500).json({ message: "Error adding user", error });
  }
});

module.exports = router;
