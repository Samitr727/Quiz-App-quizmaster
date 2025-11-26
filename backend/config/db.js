import mongoose from "mongoose";

export const connectDB = async ()=> {
  await mongoose.connect("mongodb+srv://wwwsamitr727_db_user:9667726388@cluster0.3ymkjg2.mongodb.net/Quiz")
  .then(() => {console.log("DB connected")})
}
