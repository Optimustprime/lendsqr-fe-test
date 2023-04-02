module.exports = {
    // ... other configurations
    reporters: [
        "default",
        ["jest-junit", { outputDirectory: "test-results/junit" }],
    ],
};
