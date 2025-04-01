import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/user.model";
import generateToken from "../utils/generateToken";
import { loginSchema, registerSchema } from "../validators/auth.validator";

export const registerUser = async (req: Request, res: Response) => {
  try {
    // validations
    const validation = registerSchema.safeParse(req.body);
    if (!validation.success) {
      res.status(400).json({ errors: validation.error.format() });
      return;
    }
    // process
    const { username, email, password, name } = req.body;
    // check exists or not
    const userExists = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (userExists) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // password hash
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    if (!user) {
      res.status(500).json({ message: "Failed to create user" });
      return;
    }

    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email
      },
      token: generateToken(user.id),
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const loginUser = async (req: Request, res: Response) => {
  const validation = loginSchema.safeParse(req.body);
  if (!validation.success) {
    res.status(400).json({ errors: validation.error.format() });
    return;
  }
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        username: user.username,
        email: user.email,
        token: generateToken(user.id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
};
export const getAll = async (req: Request, res: Response) => {
  try {
    const user = await User.find();
    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
};
