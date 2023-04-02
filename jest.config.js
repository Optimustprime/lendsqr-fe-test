module.exports = {
    // ... other configurations
    preset: 'ts-jest',
    testEnvironment: 'node',
    transformIgnorePatterns: ["node_modules/(?!axios)"],
    reporters: [
        "default",
        ["jest-junit", { outputDirectory: "test-results/junit" }],
    ],
};