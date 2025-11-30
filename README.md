# 🎨 GitGraffiti

With **GitGraffiti**, turn your GitHub contribution graph into a canvas! Create custom patterns, designs, and artworks on your profile.
A Node.js script that lets you paint commits across time to create stunning visual patterns on GitHub.

## About

**GitGraffiti** helps you create commits on your GitHub profile for any date in the past. Whether you want to fill up your contribution graph, spell out your name, or create cool patterns and pixel art on your contribution calendar.

## Getting Started

Follow these steps to bring your contribution graph to life:

1. **Clone this repository**

```bash
git clone https://github.com/AneeshVRao/GitGraffiti.git
cd GitGraffiti
```

3. **Set up your project**
   Initialize a new Node.js project:

```bash
npm init -y
```

3. **Install the required npm modules**
   You'll need a few modules to get everything running smoothly. Install them all with:

```bash
npm install moment simple-git random
```

4. **Create your commit script**

- Create a JavaScript file to manage your commits.
- Create a JSON file to store all the commit timestamp data.

## Room for Improvement

So, you've got the basics down. What's next?

- **Custom Patterns:** Experiment with different patterns on your contribution graph. Maybe spell out your name or create some cool designs.
- **Density Control:** Play around with the number of commits per day to adjust the shades of green.
- **Input Strings:** Convert input strings to X-Y mapped contributions.

## npm Modules Used

- [`moment`](https://www.npmjs.com/package/moment) - Handles date and time manipulation.
- [`simple-git`](https://www.npmjs.com/package/simple-git) - For easy Git commands.
- [`random`](https://www.npmjs.com/package/random) - To generate random numbers for the commits.

## Credits

Created by [Aneesh V Rao](https://github.com/AneeshVRao)

Inspired by the original concept from [Akshay Saini](https://github.com/akshaymarch7).

---

⚠️ **Note:** This project is for educational purposes. Be mindful of GitHub's Terms of Service when using contribution graph manipulation tools.
