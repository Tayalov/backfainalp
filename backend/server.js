const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "*",                          
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true                    
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/medicines", require("./routes/medicineRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));
app.use("/api/prescriptions", require("./routes/prescriptionRoutes"));

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/finalweb";

mongoose.connect(MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // завершаем процесс, если база не подключилась
  });
