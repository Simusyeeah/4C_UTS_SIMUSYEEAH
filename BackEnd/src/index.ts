import express from "express";
import cors from "cors";

import categoryRoute from "./route/categoryRoute.js";
import pembicaraRoute from "./route/pembicaraRoute.js";
import eventRoute from "./route/eventRoute.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// TAMBAHKAN INI
app.get("/", (req, res) => {
    res.send("Backend Biromus berhasil jalan 🚀");
});

// routes
app.use("/category", categoryRoute);
app.use("/pembicara", pembicaraRoute);
app.use("/event", eventRoute);

// server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
