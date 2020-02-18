const Label = require("../models/label");

module.exports = {
  getAllLabels: async (req, res) => {
    try {
      const labels = await Label.find({});
      res.status(200).json({ labels });
    } catch (error) {
      res.status(400).json("Try again something went wrong!");
    }
  },
  createLabel: async (req, res) => {
    try {
      let { name, description, color } = req.body;
      if (!name || !color) {
        throw new Error("Please enter all required fields.");
      } else {
        const label = await Label.create({ name, description, color });
        res.status(201).json({ label });
      }
    } catch (error) {
      error = error || "Try again something went wrong!";
      res.status(400).json({ error });
    }
  },
  updateLabel: async (req, res) => {
    try {
      let { name, description, color } = req.body;
      if (!name || !color) {
        throw new Error("Please enter all required fields.");
      } else {
        const updatedLabel = await Label.findOneAndUpdate(
          { _id: req.params.labelId },
          { name, description, color },
          { new: true }
        );
        res.status(200).json({ updatedLabel });
      }
    } catch (error) {
      error = error || "Try again something went wrong!";
      res.status(400).json({ error });
    }
  },
  deleteLabel: async (req, res) => {
    try {
      const deletedLabel = await Label.deleteOne({ _id: eq.params.labelId });
      res.json(204).json({ deleteLabel });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
};
