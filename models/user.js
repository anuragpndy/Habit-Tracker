const mongoose = require("mongoose");

// user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    habits: [
        {
            type: String
        }
    ]
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;