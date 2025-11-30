/**
 * GitGraffiti Patch Script
 * Fill in specific missing pixels to improve letter quality
 */

import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';
import random from 'random';

// ------------------------------------------
// Configuration
// ------------------------------------------
const FILE_PATH = './data.json';
const git = simpleGit();

// The specific dates identified as missing for better letter quality
const missingDates = [
    '2024-04-15', // Complete the A
    '2024-06-29', // E1 extension
    '2024-07-06', // E1 extension
    '2024-07-27', // E2 extension
    '2024-08-03', // E2 extension
    '2024-08-14', // S curve
    '2024-08-24', // S curve
    '2024-08-30'  // S curve
];

// How many commits per day? (High number = Bright Green)
// Match the intensity from your main pattern (3)
const INTENSITY = 3;

// ------------------------------------------
// The Patcher
// ------------------------------------------
const makeCommit = async (date) => {
    const dateString = moment(date).format(); 
    
    // Make multiple commits per day to ensure the color matches
    for (let i = 0; i < INTENSITY; i++) {
        const n = random.int(0, 543);
        const data = { date: date, count: n, patch: true, id: i };
        
        await new Promise((resolve, reject) => {
            jsonfile.writeFile(FILE_PATH, data, async (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                
                try {
                    await git.add([FILE_PATH]);
                    await git.commit(`Patching art: ${date}`, {'--date': dateString});
                    resolve();
                } catch (error) {
                    reject(error);
                }
            });
        });
        
        // Small delay to avoid issues
        await new Promise(r => setTimeout(r, 50));
    }
    console.log(` Patched pixel for: ${date}`);
};

const runPatch = async () => {
    console.log('\n' + '='.repeat(60));
    console.log(' GitGraffiti Patch Script');
    console.log('='.repeat(60) + '\n');
    console.log(` Patching ${missingDates.length} missing pixels...`);
    console.log(` Intensity: ${INTENSITY} commits per pixel\n`);
    
    try {
        for (const date of missingDates) {
            await makeCommit(date);
        }
        
        console.log('\n' + '='.repeat(60));
        console.log(' Patch complete!');
        console.log(' Pushing to GitHub...');
        console.log('='.repeat(60) + '\n');
        
        await git.push();
        
        console.log(' Successfully pushed! Check your GitHub profile.');
    } catch (error) {
        console.error(' Error during patching:', error);
        console.log('\n You can manually push with: git push origin main');
    }
};

runPatch();
