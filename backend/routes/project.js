const router = require("express").Router();
const Project = require("../models/Project");
const auth = require("../middleware/auth");

// Create project (Admin only)
router.post("/", auth(["Admin"]), async (req, res) => {
  try {
    const project = await Project.create({
      ...req.body,
      createdBy: req.user.id,
    });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all projects
router.get("/", auth(), async (req, res) => {
  const projects = await Project.find().populate("members", "name email");
  res.json(projects);
});

module.exports = router;
