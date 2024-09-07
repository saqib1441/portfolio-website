import { connect } from "mongoose";

// Connect to MongoDB
const url = process.env.DB_URI;
connect(url);
