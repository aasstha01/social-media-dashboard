// ====== Imports ======
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");

// ====== Config ======
dotenv.config({ path: '../.env' });

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// ====== Middlewares ======
app.use(cors());
app.use(express.json());

// ====== MongoDB Connection ======
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

// ====== Socket.IO Setup ======
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// ====== Model ======
const Post = require("./models/Post");

// ====== API Routes ======
app.get("/", (req, res) => res.send("🌐 API is Running"));

// Create a post
app.post("/api/posts", async (req, res) => {
  try {
    const { content } = req.body;
    const post = new Post({ content });
    await post.save();

    io.emit("newPost", post); // Broadcast to connected clients
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "❌ Error creating post" });
  }
});

// Dashboard data
app.get("/api/dashboard", async (req, res) => {
  try {
    const totalPosts = await Post.countDocuments();
    const totalLikesData = await Post.aggregate([
      { $group: { _id: null, likes: { $sum: "$likes" } } },
    ]);
    const totalLikes = totalLikesData[0]?.likes || 0;

    res.json({ totalPosts, totalLikes });
  } catch (error) {
    res.status(500).json({ message: "❌ Error fetching dashboard data" });
  }
});

// ====== Socket.IO Events ======
io.on("connection", (socket) => {
  console.log("🔌 User connected:", socket.id);

  socket.on("sendMessage", (data) => {
    console.log("📩 Message received:", data);
    io.emit("receiveMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

// ====== Start Server ======
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
