import mongoose from "mongoose";

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose.connect(
  "mongodb+srv://mlpr-challenge-picode:Zop0lMeY8ZSXmAnH@dark-labs.zpzhw.mongodb.net/mlpr-challenge-picode?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
  }
);
console.log("Mongo [OK]");
export const db = mongoose.connection;
