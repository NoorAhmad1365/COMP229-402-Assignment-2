import 'dotenv/config';
import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

// Import models for testing
import Contact from './server/models/contact.model.js';
import Project from './server/models/project.model.js';
import Qualification from './server/models/qualification.model.js';
import User from './server/models/user.model.js';

mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Test database models
mongoose.connection.once('open', async () => {
  try {
    console.log("✅ Connected to MongoDB — testing models...");

    // 1️⃣ Contact test
    const contact = new Contact({
      firstname: "Noor",
      lastname: "Sultan",
      email: "noor@example.com"
    });
    await contact.save();
    console.log("✅ Contact added:", contact._id);

    // 2️⃣ Project test
    const project = new Project({
      title: "COMP229-Assignment-2",
      firstname: "Noor",
      lastname: "Sultan",
      email: "noor@example.com",
      completion: new Date(),
      description: "A full stack app."
    });
    await project.save();
    console.log("✅ Project added:", project._id);

    // 3️⃣ Qualification test
    const qualification = new Qualification({
      title: "Diploma in Web Development",
      firstname: "Noor",
      lastname: "Sultan",
      email: "noor@example.com",
      completion: new Date("2024-06-01"),
      description: "Graduated with highschool diploma."
    });
    await qualification.save();
    console.log("✅ Qualification added:", qualification._id);

    // 4️⃣ User test
    const user = new User({
      name: "Noor Sultan",
      email: "nooruser@example.com",
      password: "123456"
    });
    await user.save();
    console.log("✅ User added:", user._id);

    console.log("🎉 All models tested successfully!");
  } catch (error) {
    console.error("❌ Test failed:", error.message);
    process.exit(1);
  }
});

mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(1);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to User application." });
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
