const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: [true, "Please provide company name"],
        },
        position: {
            type: String,
            required: [true, "Please provide position"],
        },
        status: {
            type: String,
            enum: ["Pending", "In progress", "Declined"],
            default: "Pending",
        },
        notes: {
            type: String,
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            // type: String,
            ref: "User",
            required: [true, "Please provide user"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
