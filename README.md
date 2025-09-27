# Raiku School

An educational website for learning about the Raiku protocol on Solana.

## Features

- Interactive lessons on Raiku fundamentals
- Quizzes with instant feedback
- Responsive design for all devices
- UI with black background and red accents

## Deployment

This project is configured for deployment on Vercel.

### Deploy with Vercel CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Deploy to Vercel
vercel --prod
```

### Manual Deployment

1. Push this repository to GitHub
2. Connect your GitHub repository to Vercel
3. Configure the project settings:
   - Framework: Other
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
   - Install Command: (leave empty)

## Project Structure

- `index.html` - Homepage
- `styles.css` - Styles for the entire site
- `script.js` - Interactive functionality
- `track1.html` - Track 1: Raiku 101 - Foundations
- `track2.html` - Track 2: Validator & Protocol
- `track3.html` - Track 3: Developer & Community
- Lesson files for each track (e.g., `track1-lesson2.html`)

## Customization

To update the logo:
1. Replace the image URL in the `src` attribute of the `<img>` tag in all HTML files
2. Update the `alt` text if needed

To update the Twitter link:
1. Modify the href attribute in the footer of all HTML files

## Design Inspiration

This website design featurings:
- Dark theme with black backgrounds
- Red accent colors
- Modern, clean typography
- Card-based layout for content sections
- Subtle shadows and hover effects

## Author


Created by [srichandra70061](https://twitter.com/srichandra70061)
