import { Schema, model, models } from "mongoose";
import validator from "validator";

const AuthSchema = new Schema(
  {
    fname: {
      type: String,
      required: [true, "Please enter your first name!"],
      minLength: [3, "First name must be at least 3 characters long!"],
      maxLength: [30, "First name cannot be more than 30 characters long!"],
      trim: true,
    },
    lname: {
      type: String,
      required: [true, "Please enter your name!"],
      minLength: [3, "Last name must be at least 3 characters long!"],
      maxLength: [30, "Last name cannot be more than 30 characters long!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email!"],
      unique: [true, "Email already exists. Please try again!"],
      validate: [validator.isEmail, "Please enter a valid email!"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password!"],
      minLength: [6, "Password must be at least 6 characters long!"],
      select: false,
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin"],
      default: "user",
    },
    verified: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
      select: false,
    },
    otpExpiry: {
      type: Date,
      select: false,
    },
  },
  { timestamps: true }
);

const AuthModel = models.auth || model("auth", AuthSchema);
export default AuthModel;
