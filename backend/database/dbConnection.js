import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://user:1234@cluster0.ntnwtus.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
