/**
 * GitGraffiti - Paint your GitHub contribution graph
 *
 * @author Aneesh V Rao (AneeshVRao)
 * @description Creates backdated commits to generate patterns on GitHub's contribution graph
 * @repository https://github.com/AneeshVRao/GitGraffiti
 */

import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";
import { config } from "./config.js";
import { getPattern } from "./patterns.js";

const git = simpleGit();

/**
 * Create a commit for a specific date
 */
const createCommit = async (date, callback) => {
  const data = { date: date };

  jsonfile.writeFile(config.dataFile, data, async (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }

    try {
      await git.add([config.dataFile]);
      await git.commit(date, { "--date": date });
      if (config.verbose) {
        console.log(`✓ Commit created: ${date}`);
      }
      if (callback) callback();
    } catch (error) {
      console.error("Error creating commit:", error);
    }
  });
};

/**
 * Make commits for specific coordinates with intensity
 */
const makePatternCommits = async (coordinates, intensity) => {
  let commitsMade = 0;
  const totalCommits = coordinates.length * intensity;

  console.log(
    `\n🎨 Creating pattern with ${coordinates.length} cells and intensity ${intensity}`
  );
  console.log(`📊 Total commits to make: ${totalCommits}\n`);

  for (const [week, day] of coordinates) {
    for (let i = 0; i < intensity; i++) {
      const date = moment()
        .subtract(config.dateRange.startDaysAgo, "d")
        .add(week, "w")
        .add(day, "d")
        .add(i, "hours") // Add hours to create multiple commits same day
        .format();

      await new Promise((resolve) => {
        createCommit(date, () => {
          commitsMade++;
          if (config.verbose) {
            process.stdout.write(
              `Progress: ${commitsMade}/${totalCommits} commits\r`
            );
          }
          setTimeout(resolve, config.commitDelay);
        });
      });
    }
  }

  console.log(`\n\n✅ Pattern complete! Created ${commitsMade} commits.`);
  console.log("🚀 Pushing to GitHub...\n");

  await git.push();
  console.log("✨ All done! Check your GitHub profile!");
};

/**
 * Make random commits
 */
const makeRandomCommits = async (n, commitsPerDay) => {
  let commitsMade = 0;
  const totalCommits = n * commitsPerDay;

  console.log(
    `\n🎲 Creating ${n} random commits with ${commitsPerDay} commits per day`
  );
  console.log(`📊 Total commits to make: ${totalCommits}\n`);

  const makeCommit = async (remaining) => {
    if (remaining === 0) {
      console.log(
        `\n\n✅ Random commits complete! Created ${totalCommits} commits.`
      );
      console.log("🚀 Pushing to GitHub...\n");
      await git.push();
      console.log("✨ All done! Check your GitHub profile!");
      return;
    }

    const week = random.int(0, 51);
    const day = random.int(0, 6);

    for (let i = 0; i < commitsPerDay; i++) {
      const date = moment()
        .subtract(config.dateRange.startDaysAgo, "d")
        .add(week, "w")
        .add(day, "d")
        .add(i, "hours")
        .format();

      await new Promise((resolve) => {
        createCommit(date, () => {
          commitsMade++;
          if (config.verbose) {
            process.stdout.write(
              `Progress: ${commitsMade}/${totalCommits} commits\r`
            );
          }
          setTimeout(resolve, config.commitDelay);
        });
      });
    }

    await makeCommit(remaining - 1);
  };

  await makeCommit(n);
};

/**
 * Make custom commits from config coordinates
 */
const makeCustomCommits = async (coordinates, intensity) => {
  console.log(`\n🎯 Creating custom pattern from configuration`);
  await makePatternCommits(coordinates, intensity);
};

/**
 * Main execution
 */
const main = async () => {
  console.log("\n" + "=".repeat(50));
  console.log("🎨 GitGraffiti - GitHub Contribution Graph Painter");
  console.log("=".repeat(50) + "\n");

  console.log(`📋 Mode: ${config.mode.toUpperCase()}`);
  console.log(
    `📅 Date Range: ${config.dateRange.startDaysAgo} days ago to ${
      config.dateRange.endDaysAgo === 0
        ? "today"
        : config.dateRange.endDaysAgo + " days ago"
    }`
  );

  try {
    switch (config.mode) {
      case "pattern": {
        const pattern = getPattern(config.pattern.name, {
          text: config.pattern.text,
          startWeek: config.pattern.startWeek,
        });

        if (pattern) {
          console.log(`🎨 Pattern: ${config.pattern.name}`);
          await makePatternCommits(pattern, config.pattern.intensity);
        } else {
          console.log("⚠️ Pattern not found, falling back to random mode");
          await makeRandomCommits(
            config.random.numberOfCommits,
            config.random.commitsPerDay
          );
        }
        break;
      }

      case "custom": {
        await makeCustomCommits(
          config.custom.coordinates,
          config.custom.intensity
        );
        break;
      }

      case "random":
      default: {
        await makeRandomCommits(
          config.random.numberOfCommits,
          config.random.commitsPerDay
        );
        break;
      }
    }
  } catch (error) {
    console.error("\n❌ Error:", error);
    process.exit(1);
  }
};

// Run the script
main();
