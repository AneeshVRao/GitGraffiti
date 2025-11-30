/**
 * GitGraffiti Configuration
 * Customize your contribution graph patterns here
 */

export const config = {
  // ===== MODE SELECTION =====
  // Options: 'random', 'pattern', 'custom'
  mode: "random",

  // ===== RANDOM MODE SETTINGS =====
  random: {
    // Number of commits to make (spread randomly across the year)
    numberOfCommits: 100,

    // Commits per day (1-10, higher = darker green)
    commitsPerDay: 1,
  },

  // ===== PATTERN MODE SETTINGS =====
  pattern: {
    // Pattern name - see patterns.js for available patterns
    // Options: 'heart', 'smile', 'wave', 'mountain', 'cross', 'checkmark', 'diagonal', 'name'
    name: "heart",

    // Commits per marked cell (1-10, controls darkness)
    intensity: 3,

    // Starting position (week offset from start of year)
    startWeek: 10,

    // For 'name' pattern - specify your text
    text: "HI",
  },

  // ===== CUSTOM MODE SETTINGS =====
  custom: {
    // Define your own pattern as coordinates [week, day]
    // Week: 0-52 (columns), Day: 0-6 (rows, 0=Sunday)
    coordinates: [
      [5, 0],
      [5, 1],
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
      [5, 6], // Vertical line
      [10, 3], // Single dot
      [15, 0],
      [15, 6],
      [16, 1],
      [16, 5],
      [17, 2],
      [17, 4],
      [18, 3], // Diamond
    ],

    // Commits per cell
    intensity: 2,
  },

  // ===== DATE RANGE =====
  dateRange: {
    // Start date offset (how many days back from today)
    startDaysAgo: 365, // 1 year ago

    // End date offset (0 = today, negative = future)
    endDaysAgo: 0,
  },

  // ===== GENERAL SETTINGS =====
  dataFile: "./data.json",

  // Delay between commits in milliseconds (to avoid rate limiting)
  commitDelay: 100,

  // Show detailed logs
  verbose: true,
};
