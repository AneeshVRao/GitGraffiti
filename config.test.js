/**
 * GitGraffiti Test Configuration
 * Use this configuration for testing before applying to your main profile
 */

export const config = {
  // ===== MODE SELECTION =====
  // Options: 'random', 'pattern', 'custom'
  mode: "pattern",

  // ===== RANDOM MODE SETTINGS =====
  random: {
    // Start with a small number for testing
    numberOfCommits: 10,

    // Keep intensity low for testing
    commitsPerDay: 1,
  },

  // ===== PATTERN MODE SETTINGS =====
  pattern: {
    // Test with name pattern
    name: "name",

    // Low intensity for testing
    intensity: 2,

    // Starting position
    startWeek: 2,

    // Your name to display
    text: "ANEESH",
  },

  // ===== CUSTOM MODE SETTINGS =====
  custom: {
    // Small test pattern
    coordinates: [
      [2, 0],
      [2, 1],
      [2, 2], // Small vertical line
      [3, 1], // Dot next to it
    ],

    intensity: 1,
  },

  // ===== DATE RANGE =====
  dateRange: {
    // Test with last 60 days only
    startDaysAgo: 60,

    endDaysAgo: 0,
  },

  // ===== GENERAL SETTINGS =====
  dataFile: "./data.json",

  // Faster for testing
  commitDelay: 50,

  // Show detailed logs for testing
  verbose: true,
};
