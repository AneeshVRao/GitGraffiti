/**
 * GitGraffiti Pattern Library
 * Predefined patterns for your contribution graph
 * Each pattern returns an array of [week, day] coordinates
 */

/**
 * Heart shape pattern
 */
export const heart = () => {
  return [
    // Left curve
    [1, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [1, 5],
    // Right curve
    [3, 1],
    [3, 2],
    [4, 3],
    [3, 4],
    [3, 5],
    // Middle
    [2, 0],
    [2, 3],
    // Bottom point
    [2, 6],
  ];
};

/**
 * Smiley face pattern
 */
export const smile = () => {
  return [
    // Face outline
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [2, 6],
    [3, 6],
    [4, 6],
    [5, 6],
    [6, 1],
    [6, 2],
    [6, 3],
    [6, 4],
    [6, 5],
    // Left eye
    [2, 2],
    // Right eye
    [5, 2],
    // Smile
    [2, 4],
    [3, 5],
    [4, 5],
    [5, 4],
  ];
};

/**
 * Wave pattern
 */
export const wave = () => {
  const coords = [];
  for (let w = 0; w < 52; w++) {
    const day = Math.round(3 + 2 * Math.sin(w / 4));
    coords.push([w, day]);
  }
  return coords;
};

/**
 * Mountain range pattern
 */
export const mountain = () => {
  return [
    // Left mountain
    [2, 6],
    [3, 5],
    [4, 4],
    [5, 3],
    [6, 2],
    [7, 3],
    [8, 4],
    [9, 5],
    [10, 6],
    // Right mountain
    [12, 6],
    [13, 5],
    [14, 4],
    [15, 3],
    [16, 2],
    [17, 1],
    [18, 2],
    [19, 3],
    [20, 4],
    [21, 5],
    [22, 6],
  ];
};

/**
 * Cross/Plus pattern
 */
export const cross = () => {
  return [
    // Vertical
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
    [3, 5],
    [3, 6],
    // Horizontal
    [0, 3],
    [1, 3],
    [2, 3],
    [4, 3],
    [5, 3],
    [6, 3],
  ];
};

/**
 * Checkmark pattern
 */
export const checkmark = () => {
  return [
    [0, 3],
    [1, 4],
    [2, 5],
    [3, 6],
    [4, 5],
    [5, 4],
    [6, 3],
    [7, 2],
    [8, 1],
    [9, 0],
  ];
};

/**
 * Diagonal stripe pattern
 */
export const diagonal = () => {
  const coords = [];
  for (let w = 0; w < 52; w++) {
    const day = (w + 2) % 7;
    coords.push([w, day]);
  }
  return coords;
};

/**
 * Letter/Text pattern generator
 * Creates pixel art text on the contribution graph
 */
const letterPatterns = {
  A: [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 0],
    [1, 3],
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
  ],
  B: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 0],
    [1, 3],
    [1, 6],
    [2, 1],
    [2, 2],
    [2, 4],
    [2, 5],
  ],
  C: [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [1, 0],
    [1, 6],
    [2, 0],
    [2, 6],
  ],
  D: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 0],
    [1, 6],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
  ],
  E: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 0],
    [1, 3],
    [1, 6],
    [2, 0],
    [2, 3],
    [2, 6],
  ],
  F: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 0],
    [1, 3],
    [2, 0],
    [2, 3],
  ],
  G: [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [1, 0],
    [1, 6],
    [2, 0],
    [2, 3],
    [2, 6],
  ],
  H: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 3],
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
  ],
  I: [
    [0, 0],
    [0, 6],
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [2, 0],
    [2, 6],
  ],
  J: [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [1, 6],
    [0, 5],
    [0, 6],
  ],
  K: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 3],
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 5],
    [2, 6],
  ],
  L: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 6],
    [2, 6],
  ],
  M: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 1],
    [2, 2],
    [3, 1],
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4],
    [4, 5],
    [4, 6],
  ],
  N: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 1],
    [1, 2],
    [2, 3],
    [2, 4],
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
    [3, 5],
    [3, 6],
  ],
  O: [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [1, 0],
    [1, 6],
    [2, 0],
    [2, 6],
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
    [3, 5],
  ],
  P: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 0],
    [1, 3],
    [2, 1],
    [2, 2],
  ],
  Q: [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [1, 0],
    [1, 6],
    [2, 0],
    [2, 4],
    [2, 6],
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 5],
  ],
  R: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 0],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 4],
    [2, 5],
    [2, 6],
  ],
  S: [
    [0, 1],
    [0, 5],
    [0, 6],
    [1, 0],
    [1, 3],
    [1, 6],
    [2, 0],
    [2, 3],
    [2, 5],
  ],
  T: [
    [0, 0],
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [2, 0],
  ],
  U: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [1, 6],
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
  ],
  V: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 5],
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4],
  ],
  W: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 5],
    [2, 4],
    [3, 5],
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4],
    [4, 5],
    [4, 6],
  ],
  X: [
    [0, 0],
    [0, 1],
    [0, 5],
    [0, 6],
    [1, 2],
    [1, 4],
    [2, 3],
    [3, 2],
    [3, 4],
    [4, 0],
    [4, 1],
    [4, 5],
    [4, 6],
  ],
  Y: [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [2, 5],
    [2, 6],
  ],
  Z: [
    [0, 0],
    [0, 5],
    [0, 6],
    [1, 0],
    [1, 4],
    [1, 6],
    [2, 0],
    [2, 3],
    [2, 6],
    [3, 0],
    [3, 2],
    [3, 6],
    [4, 0],
    [4, 1],
    [4, 6],
  ],
  " ": [], // Space
};

/**
 * Generate pattern for text
 */
export const name = (text, startWeek = 0) => {
  const coords = [];
  let currentWeek = startWeek;

  for (const char of text.toUpperCase()) {
    const pattern = letterPatterns[char];
    if (pattern) {
      pattern.forEach(([w, d]) => {
        coords.push([currentWeek + w, d]);
      });
      // Add spacing between letters
      currentWeek +=
        char === "M" ||
        char === "W" ||
        char === "N" ||
        char === "O" ||
        char === "Q"
          ? 5
          : 4;
    }
  }

  return coords;
};

/**
 * Get pattern by name
 */
export const getPattern = (patternName, options = {}) => {
  switch (patternName.toLowerCase()) {
    case "heart":
      return heart();
    case "smile":
      return smile();
    case "wave":
      return wave();
    case "mountain":
      return mountain();
    case "cross":
      return cross();
    case "checkmark":
      return checkmark();
    case "diagonal":
      return diagonal();
    case "name":
      return name(options.text || "HI", options.startWeek || 0);
    default:
      console.log(`Unknown pattern: ${patternName}. Using random mode.`);
      return null;
  }
};
