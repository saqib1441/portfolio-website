import bcrypt from "bcryptjs";

export const HashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const VerifyPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
