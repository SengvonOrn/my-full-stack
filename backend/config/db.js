import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://greatstack:1212332233@cluster0.wds73.mongodb.net/food-del"
    )
    .then(() => console.log("DB connects"));
};
