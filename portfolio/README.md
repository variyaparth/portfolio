# Parth's Portfolio - Vibe Coder 🎨

A modern, creative portfolio website built with pure HTML, CSS, and JavaScript. Features smooth animations, dark mode toggle, and mobile-responsive design.

## ✨ Features

- **Modern Design**: Creative and unique gradient-based styling
- **Dark Mode Toggle**: Switch between light and dark themes (saved in localStorage)
- **Smooth Animations**: Floating cards, fade-in effects, and scroll-triggered animations
- **Fully Responsive**: Works beautifully on all device sizes
- **Fast Performance**: No frameworks, pure vanilla JavaScript
- **Contact Form**: Get messages from visitors
- **Social Media Links**: Connect with GitHub, Twitter, LinkedIn, and Instagram
- **Project Showcase**: Grid layout with project cards
- **Skills Section**: Display your technical expertise
- **Mobile Menu**: Hamburger menu for mobile devices
- **Parallax Effects**: Mouse follow and scroll effects

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and animations
├── js/
│   └── script.js       # All interactivity
├── assets/             # Images and media files
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## 🚀 Quick Start

### Option 1: Open Locally
1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The portfolio is ready to use

### Option 2: Live Server (Recommended)
1. Install VS Code Live Server extension
2. Right-click on `index.html` and select "Open with Live Server"
3. Your portfolio will open in the browser with auto-refresh

## 📝 Customization

### Update Your Information

**In `index.html`:**
- Line 63: Change "Parth" to your name
- Line 64: Update your subtitle
- Line 65-68: Update your description
- Line 90-92: Update scroll indicator text
- Line 105-112: Update your about section
- Line 117-123: Update your stats
- Line 204-255: Update your projects
- Line 272-283: Update contact information
- Line 286-313: Update social media links
- Line 320: Update copyright year

### Change Colors

**In `css/styles.css` (lines 1-18):**
```css
:root {
    --primary: #6366f1;        /* Change this */
    --secondary: #ec4899;      /* And this */
    --accent: #14b8a6;         /* And this */
    /* ... other colors ... */
}
```

### Add Your Projects

In `index.html`, duplicate a project card in the projects section and fill in:
- Project name
- Description
- Technologies used (tags)
- Link to project

Example:
```html
<div class="project-card">
    <div class="project-image">
        <div class="image-placeholder-project">
            <i class="fas fa-icon-name"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Your project description</p>
        <div class="project-tags">
            <span class="tag">Technology1</span>
            <span class="tag">Technology2</span>
        </div>
        <a href="your-project-link" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
    </div>
</div>
```

### Update Skills

In `index.html`, modify the skills grid section (around line 173-210) to add or remove skill cards.

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Create a GitHub Repository:**
   - Go to [github.com/new](https://github.com/new)
   - Name it: `yourusername.github.io`
   - Make it public
   - Create repository

2. **Push Your Code:**
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial portfolio commit"
   
   # Add remote
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   
   # Push
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "GitHub Pages"
   - Select "main" branch as source
   - Your site will be live at: `https://yourusername.github.io`

### Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty or set to `.`)
5. Click "Deploy"

### Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Your site will be live on a Vercel URL

## 🎨 Keyboard Shortcuts

- **D**: Toggle dark/light mode
- **#home, #about, #skills, #projects, #contact**: Jump to sections using anchor links

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients and animations
- **JavaScript (Vanilla)**: No frameworks!
- **Font Awesome**: Icon library
- **Google Fonts**: Typography

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 💡 Tips & Tricks

1. **Add Your Resume:** Replace the "#" in the download button with your actual resume file
2. **Connect Contact Form:** Currently shows a demo. Connect to a backend service like:
   - Formspree
   - EmailJS
   - Netlify Forms
3. **Add Real Project Images:** Replace placeholder divs with actual images
4. **Customize Animations:** Modify keyframes in `css/styles.css`
5. **Add More Sections:** Follow the existing structure and styling patterns

## 🐛 Troubleshooting

**Dark mode not persisting?**
- Check browser localStorage is enabled
- Clear browser cache and try again

**Images not showing?**
- Ensure image paths are correct
- Use absolute URLs or relative paths

**Form not working?**
- Currently it's just a demo
- Connect to a backend service for real submissions

**Animations not smooth?**
- Check browser hardware acceleration is enabled
- Try a different browser

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## 📞 Need Help?

- Check the comments in the code
- Review the structure and comments
- Test in different browsers
- Consult the resources above

## 📄 License

This portfolio template is free to use and modify. Use it for your own portfolio!

---

**Happy coding! 🚀 Feel free to customize this portfolio to make it truly yours.**

Built with ❤️ by Parth | Vibe Coder
