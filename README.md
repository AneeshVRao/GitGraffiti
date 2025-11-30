# 🎨 GitGraffiti

Transform your GitHub contribution graph into a canvas! Create custom patterns, pixel art, and stunning designs on your profile with **GitGraffiti** - the ultimate GitHub contribution graph painter.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)

## ✨ Features

- 🎲 **Random Mode** - Fill your graph with random commits
- 🎨 **Pattern Mode** - Choose from 8+ predefined patterns (hearts, smiles, waves, mountains, etc.)
- ✍️ **Text Mode** - Spell out your name or any text on your contribution graph
- 🎯 **Custom Mode** - Design your own patterns with coordinate arrays
- 🎚️ **Density Control** - Adjust commit intensity to control the shade of green
- 📅 **Date Range** - Customize the time period for your commits
- 🚀 **Easy Configuration** - Simple config file for all settings

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/AneeshVRao/GitGraffiti.git
cd GitGraffiti
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Your Pattern

Edit `config.js` to customize your contribution graph:

```javascript
export const config = {
  mode: "pattern", // Options: 'random', 'pattern', 'custom'

  pattern: {
    name: "heart", // Choose your pattern
    intensity: 3, // Commits per cell (1-10)
    startWeek: 10, // Starting position
  },
};
```

### 4. Preview Before Running (Recommended!)

```bash
npm run preview
# or
npm test
```

This shows you a visual preview of your pattern without creating commits!

### 5. Run the Script

```bash
npm start
# or
node index.js
```

## 🧪 Testing

**⚠️ IMPORTANT: Always test on a separate repository first!**

See [TESTING.md](TESTING.md) for comprehensive testing guide.

### Quick Test

1. **Preview your pattern:**
   ```bash
   npm run preview
   ```

2. **Check the output:**
   - Visual grid preview
   - Commit statistics
   - Git status verification

3. **Test on a separate repo:**
   - Create a test repository on GitHub
   - Clone and set it up with GitGraffiti
   - Run with small settings (see `config.test.js`)

## 📋 Available Modes

### 🎲 Random Mode

Fill your contribution graph with random commits across the year.

```javascript
mode: 'random',
random: {
  numberOfCommits: 100,  // Total commits to make
  commitsPerDay: 1,      // Commits per day (1-10)
}
```

### 🎨 Pattern Mode

Choose from predefined patterns:

| Pattern     | Description          |
| ----------- | -------------------- |
| `heart`     | ❤️ Heart shape       |
| `smile`     | 😊 Smiley face       |
| `wave`      | 🌊 Sine wave pattern |
| `mountain`  | ⛰️ Mountain range    |
| `cross`     | ➕ Cross/Plus shape  |
| `checkmark` | ✓ Checkmark          |
| `diagonal`  | 📐 Diagonal stripes  |
| `name`      | ✍️ Spell out text    |

```javascript
mode: 'pattern',
pattern: {
  name: 'heart',        // Pattern name
  intensity: 3,         // Darkness (1-10)
  startWeek: 10,       // Horizontal position
  text: 'HI',          // For 'name' pattern only
}
```

### 🎯 Custom Mode

Create your own pattern using coordinates:

```javascript
mode: 'custom',
custom: {
  coordinates: [
    [5, 0], [5, 1], [5, 2],  // [week, day]
    [10, 3],                   // Week: 0-52, Day: 0-6
    [15, 0], [15, 6],         // Sunday = 0
  ],
  intensity: 2,
}
```

## ⚙️ Configuration Options

### Date Range

```javascript
dateRange: {
  startDaysAgo: 365,  // Start from 1 year ago
  endDaysAgo: 0,      // End today (0) or future (negative)
}
```

### Advanced Settings

```javascript
dataFile: './data.json',     // Data file location
commitDelay: 100,             // Delay between commits (ms)
verbose: true,                // Show detailed logs
```

## 📖 Examples

### Example 1: Heart Pattern

```javascript
mode: 'pattern',
pattern: {
  name: 'heart',
  intensity: 5,
  startWeek: 15,
}
```

### Example 2: Spell Your Name

```javascript
mode: 'pattern',
pattern: {
  name: 'name',
  text: 'ANEESH',
  intensity: 4,
  startWeek: 5,
}
```

### Example 3: Dense Random Fill

```javascript
mode: 'random',
random: {
  numberOfCommits: 250,
  commitsPerDay: 5,
}
```

## 🎨 Creating Custom Patterns

The contribution graph is a 52×7 grid (52 weeks × 7 days). To create custom patterns:

1. Plan your design on graph paper
2. Map coordinates as `[week, day]` where:
   - Week: 0-51 (columns, left to right)
   - Day: 0-6 (rows, Sunday to Saturday)
3. Add coordinates to `config.custom.coordinates`

**Example - Vertical Line:**

```javascript
coordinates: [
  [10, 0],
  [10, 1],
  [10, 2],
  [10, 3],
  [10, 4],
  [10, 5],
  [10, 6],
];
```

## ⚠️ Important Notes

- **Use on a separate repository**: Don't run this on your main projects
- **GitHub ToS**: This is for educational purposes - use responsibly
- **Backup**: Always backup your repo before running
- **Testing**: **ALWAYS run `npm run preview` first!** See [TESTING.md](TESTING.md)
- **Push manually**: The script auto-pushes; ensure your remote is correct
- **Test repository**: Create a separate test repo before using on your profile

## 🎯 Quick Commands

```bash
# Preview pattern (safe, no commits)
npm run preview

# Run the actual script
npm start

# View test configuration
cat config.test.js
```

## npm Modules Used

- [`moment`](https://www.npmjs.com/package/moment) - Handles date and time manipulation.
- [`simple-git`](https://www.npmjs.com/package/simple-git) - For easy Git commands.
- [`random`](https://www.npmjs.com/package/random) - To generate random numbers for the commits.

## Credits

Created by [Aneesh V Rao](https://github.com/AneeshVRao)

Inspired by the original concept from [Akshay Saini](https://github.com/akshaymarch7).

---

⚠️ **Note:** This project is for educational purposes. Be mindful of GitHub's Terms of Service when using contribution graph manipulation tools.
