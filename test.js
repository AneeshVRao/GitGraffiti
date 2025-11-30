/**
 * GitGraffiti Test Script
 * Run this to test patterns before applying to your main profile
 */

import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import { config } from "./config.test.js";
import { getPattern } from "./patterns.js";

const git = simpleGit();

/**
 * Preview pattern without creating commits
 */
const previewPattern = (coordinates, mode, patternName) => {
  console.log("\n" + "=".repeat(60));
  console.log("🔍 PATTERN PREVIEW");
  console.log("=".repeat(60) + "\n");

  console.log(`📋 Mode: ${mode.toUpperCase()}`);
  if (patternName) console.log(`🎨 Pattern: ${patternName}`);
  console.log(`📍 Total cells to fill: ${coordinates.length}`);
  console.log(
    `📅 Date range: ${config.dateRange.startDaysAgo} days ago to today\n`
  );

  // Create a visual grid representation
  console.log("📊 Visual Preview (7 days x showing first 20 weeks):\n");
  console.log(
    "    Week: " +
      Array.from({ length: 20 }, (_, i) => String(i).padStart(2, "0")).join(" ")
  );

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const grid = Array(7)
    .fill(null)
    .map(() => Array(20).fill("·"));

  coordinates.forEach(([week, day]) => {
    if (week < 20) {
      grid[day][week] = "█";
    }
  });

  grid.forEach((row, idx) => {
    console.log(`${days[idx]}: ${row.join("  ")}`);
  });

  if (coordinates.some(([w]) => w >= 20)) {
    console.log("\n... and more cells beyond week 20");
  }

  console.log("\n" + "=".repeat(60) + "\n");
};

/**
 * Check git repository status
 */
const checkGitStatus = async () => {
  try {
    const isRepo = await git.checkIsRepo();
    if (!isRepo) {
      console.error("❌ Not a git repository! Please run 'git init' first.");
      return false;
    }

    const status = await git.status();
    const remotes = await git.getRemotes(true);

    console.log("\n📦 Git Repository Status:");
    console.log(`   Branch: ${status.current}`);
    console.log(
      `   Remote: ${
        remotes.length > 0
          ? remotes[0].name + " (" + remotes[0].refs.push + ")"
          : "No remote configured"
      }`
    );

    if (remotes.length === 0) {
      console.log("\n⚠️  WARNING: No remote repository configured!");
      console.log(
        "   Add a remote with: git remote add origin <your-test-repo-url>"
      );
      return false;
    }

    // Check if this is a test repository
    const remote = remotes[0].refs.push || "";
    if (
      remote.includes("main") ||
      remote.includes("important") ||
      !remote.includes("test")
    ) {
      console.log("\n⚠️  WARNING: This might not be a test repository!");
      console.log("   Recommended: Use a separate test repository");
      console.log("   Current remote: " + remote);
    }

    return true;
  } catch (error) {
    console.error("❌ Error checking git status:", error.message);
    return false;
  }
};

/**
 * Estimate commit statistics
 */
const estimateStats = (coordinates, intensity) => {
  const totalCommits = coordinates.length * intensity;
  const estimatedTime = (totalCommits * config.commitDelay) / 1000; // in seconds

  console.log("\n📊 Commit Statistics:");
  console.log(`   Total cells: ${coordinates.length}`);
  console.log(`   Intensity per cell: ${intensity}`);
  console.log(`   Total commits: ${totalCommits}`);
  console.log(`   Estimated time: ${estimatedTime.toFixed(1)} seconds`);
  console.log(`   Date range: ${config.dateRange.startDaysAgo} days`);
};

/**
 * Interactive test menu
 */
const runTest = async () => {
  console.log("\n" + "=".repeat(60));
  console.log("🧪 GitGraffiti Test Mode");
  console.log("=".repeat(60) + "\n");

  console.log(
    "This test will help you visualize patterns before committing.\n"
  );

  // Check git status
  const gitOk = await checkGitStatus();
  if (!gitOk) {
    console.log("\n❌ Please fix git setup before proceeding.\n");
    return;
  }

  // Get pattern based on mode
  let coordinates;
  let patternName;

  switch (config.mode) {
    case "pattern": {
      patternName = config.pattern.name;
      coordinates = getPattern(config.pattern.name, {
        text: config.pattern.text,
        startWeek: config.pattern.startWeek,
      });

      if (!coordinates) {
        console.log("❌ Pattern not found!");
        return;
      }
      break;
    }

    case "custom": {
      coordinates = config.custom.coordinates;
      patternName = "custom";
      break;
    }

    case "random": {
      // Generate sample random coordinates
      coordinates = Array.from(
        { length: config.random.numberOfCommits },
        () => {
          const maxWeek = Math.floor(config.dateRange.startDaysAgo / 7);
          return [
            Math.floor(Math.random() * maxWeek),
            Math.floor(Math.random() * 7),
          ];
        }
      );
      patternName = "random";
      break;
    }

    default:
      console.log("❌ Unknown mode!");
      return;
  }

  // Show preview
  previewPattern(coordinates, config.mode, patternName);

  // Show statistics
  const intensity =
    config.mode === "pattern"
      ? config.pattern.intensity
      : config.mode === "custom"
      ? config.custom.intensity
      : config.random.commitsPerDay;

  estimateStats(coordinates, intensity);

  console.log("\n" + "=".repeat(60));
  console.log("\n✅ Test preview complete!");
  console.log("\nNext steps:");
  console.log("1. Review the pattern preview above");
  console.log("2. Check if the dates and intensity are correct");
  console.log("3. If satisfied, run: node index.js");
  console.log("4. After testing, you can apply to your main profile\n");
};

// Run the test
runTest().catch(console.error);
