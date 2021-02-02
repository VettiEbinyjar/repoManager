const mongoose = require('mongoose');

const repoSchema = new mongoose.Schema(
    {
        repoName: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);
const repo = mongoose.model('repo', repoSchema);

module.exports = repo;
