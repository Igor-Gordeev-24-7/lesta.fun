const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const connectDB = require("./db"); // Подключение к базе данных

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Подключение к базе данных
connectDB();

// Маршруты
app.use("/api/auth", authRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
