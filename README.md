# RemoteRecruit - Home Page

This project is a frontend implementation of the RemoteRecruit Home Page, built as part of a technical examination. The goal was to reproduce a Figma design with high fidelity, responsiveness, and modern frontend best practices.

---

## 🚀 Project Overview

RemoteRecruit is a responsive landing page that showcases a job recruitment platform.  
The implementation focuses on UI accuracy, responsiveness, performance optimization, and component-based architecture using React and Tailwind CSS.

---

## 🛠️ Tech Stack

- React.js (v17+)
- Tailwind CSS
- JavaScript (ES6+)
- Vite (for development environment)
- Intersection Observer API (for scroll animations)
- Lazy Loading (performance optimization)

---

## 📦 Project Setup Instructions

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/remoterecruit.git

# Navigate into the project
cd remoterecruit

# Install dependencies
npm install

# Start development server
npm run dev


✨ Features
Fully responsive design (mobile, tablet, desktop)
Pixel-perfect Figma implementation
Smooth scroll animations (fade-up effects)
Interactive UI elements with hover states
FAQ accordion functionality
Scroll-to-top button
Lazy loading for images
Performance-optimized components
⚠️ Known Issues / Limitations
Wave background positioning required manual adjustments across breakpoints
Some layout fine-tuning was needed to match Figma exactly
Animations are custom (no external animation library used), so behavior may vary slightly across browsers
Social media icons are static assets (no external icon library integrated)


📈 Performance Notes

The project was optimized with:
Lazy loading images
Reduced unnecessary re-renders
Smooth GPU-friendly animations
Semantic and accessible HTML structure
Target Lighthouse score: 90+ (Performance, Accessibility, Best Practices)


📁 Folder Structure (Simplified)
src/
 ├── components/
 ├── sections/
 ├── assets/
 ├── hooks/
 ├── App.jsx
 └── main.jsx
