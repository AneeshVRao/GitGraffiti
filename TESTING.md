# GitGraffiti Testing Guide

## 🧪 Before You Start

**IMPORTANT**: Always test on a separate repository before using on your main profile!

## 📋 Testing Steps

### Step 1: Create a Test Repository

Create a new repository on GitHub specifically for testing:

```bash
# On GitHub, create a new repository named "gitgraffiti-test"
```

### Step 2: Set Up Test Environment

```bash
# Clone the test repository
git clone https://github.com/AneeshVRao/gitgraffiti-test.git
cd gitgraffiti-test

# Copy GitGraffiti files
cp ../GitGraffiti/*.js .
cp ../GitGraffiti/package.json .

# Install dependencies
npm install
```

### Step 3: Run Preview Test

Preview your pattern without creating commits:

```bash
node test.js
```

This will show you:

- ✅ Visual preview of your pattern
- ✅ Number of commits that will be created
- ✅ Estimated execution time
- ✅ Git repository status

### Step 4: Test with Small Pattern

Edit `config.test.js` for a small test:

```javascript
export const config = {
  mode: "pattern",
  pattern: {
    name: "heart",
    intensity: 1, // Low intensity for testing
    startWeek: 2,
  },
  dateRange: {
    startDaysAgo: 60, // Only last 60 days
  },
};
```

### Step 5: Run Actual Test

```bash
node index.js
```

### Step 6: Check Your Test Repository

Visit your test repository on GitHub and check:

- Contribution graph shows the pattern
- Pattern looks as expected
- Intensity/darkness is correct

### Step 7: Adjust and Iterate

If needed, adjust settings in `config.js` and repeat the test.

## 🎯 Test Scenarios

### Scenario 1: Test Random Mode

```javascript
// config.test.js
mode: 'random',
random: {
  numberOfCommits: 10,  // Small number
  commitsPerDay: 1,
}
```

### Scenario 2: Test Pattern Mode

```javascript
// config.test.js
mode: 'pattern',
pattern: {
  name: 'checkmark',
  intensity: 2,
  startWeek: 5,
}
```

### Scenario 3: Test Text Drawing

```javascript
// config.test.js
mode: 'pattern',
pattern: {
  name: 'name',
  text: 'HI',
  intensity: 3,
  startWeek: 10,
}
```

### Scenario 4: Test Custom Pattern

```javascript
// config.test.js
mode: 'custom',
custom: {
  coordinates: [
    [2, 0], [2, 1], [2, 2],
    [3, 3], [3, 4],
  ],
  intensity: 2,
}
```

## ⚠️ Common Issues

### Issue: "Not a git repository"

**Solution**: Run `git init` in your test directory

### Issue: "No remote configured"

**Solution**: Add remote with `git remote add origin <your-test-repo-url>`

### Issue: Pattern doesn't appear on GitHub

**Solution**:

- Wait a few minutes for GitHub to update
- Check if commits were created: `git log`
- Verify date range in config

### Issue: Pattern looks wrong

**Solution**:

- Run `node test.js` to preview
- Adjust `startWeek` position
- Check if date range is correct

## 🚀 Moving to Production

Once you're happy with the test results:

1. **Delete the test repository** (optional)
2. **Create your production repository**
3. **Copy the working config** to `config.js`
4. **Run on production**: `node index.js`

## 📊 Verification Checklist

Before moving to production, verify:

- [ ] Pattern appears correctly in test repo
- [ ] Intensity/darkness is as desired
- [ ] Date range is correct
- [ ] No errors during execution
- [ ] GitHub contribution graph updates (may take a few minutes)
- [ ] Pattern position is correct
- [ ] Text is readable (if using name mode)

## 🔍 Debug Mode

To see detailed logs, ensure in your config:

```javascript
verbose: true,
commitDelay: 100,  // Slower for debugging
```

## 🎨 Pattern Testing Tips

1. **Start small**: Test with low intensity and short date ranges
2. **Use preview**: Always run `node test.js` first
3. **Check alignment**: Patterns start from `startWeek`, adjust as needed
4. **Test text carefully**: Some letters are wider (M, W, O)
5. **Consider spacing**: Leave gaps between elements for clarity

## 📧 Need Help?

If you encounter issues:

1. Check the main README.md
2. Review the pattern preview output
3. Verify your git setup
4. Test with simpler patterns first

---

Happy testing! 🎨✨
