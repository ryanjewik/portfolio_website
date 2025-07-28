# Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full Stack AI Developer. Built with React, TypeScript, and Tailwind CSS with dynamic theming and animated backgrounds.

## 🌟 Features

- **Dual Theme Support**: Seamless dark and light mode transitions
- **Interactive Animations**: Vanta.js network background with theme-responsive colors
- **Responsive Design**: Mobile-first approach with optimized layouts
- **Modern UI Components**: Custom components with glassmorphism effects
- **Tech Stack Carousel**: Dynamic showcase of technical skills
- **Contact Form**: Integrated contact functionality
- **Smooth Scrolling**: Enhanced navigation with scroll-based animations
- **Text Shadows**: Enhanced readability with theme-responsive text effects

## 🚀 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Vanta.js** for 3D backgrounds

### Backend (Planned)
- **Ruby on Rails** API
- **PostgreSQL** database
- **Docker** containerization

## 📁 Project Structure

```
website/
├── frontend/              # React TypeScript application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── tech_stack/    # Technology showcase components
│   │   │   ├── floating-navbar.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── VantaBackground.tsx
│   │   │   └── ...
│   │   ├── lib/              # Utility functions
│   │   ├── assets/           # Static assets
│   │   └── App.tsx           # Main application component
│   ├── public/               # Public assets
│   │   └── assets/           # Images, icons, and documents
│   └── package.json          # Frontend dependencies
├── backend/                  # Future Rails API
├── package-lock.json         # Workspace lockfile
└── README.md                 # This file
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd website
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

In the frontend directory, you can run:

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build
- `npm run lint` - Runs ESLint for code quality

## 🎨 Key Components

### Theme System
- **Dark Mode**: Purple and blue gradients with dark backgrounds
- **Light Mode**: Teal and cyan accents with light backgrounds
- **Dynamic Switching**: Seamless transitions between themes
- **Text Shadows**: Theme-responsive shadow effects for enhanced readability

### Interactive Elements
- **Floating Navigation**: Theme toggle and section navigation
- **Background Animation**: Vanta.js network with theme-responsive colors
- **Project Cards**: Dynamic layouts based on project count
- **Tech Carousel**: Animated technology showcase with directional scrolling
- **Profile Card**: Floating profile with social links and resume download

### Sections
- **Introduction**: Hero section with animated text and shadows
- **About Me**: Comprehensive background with education, certifications, and experience
- **Tech Stack**: Animated carousels showcasing frontend, backend, database, and tools
- **Projects**: Dynamic grid/list layout based on project count
- **Contact**: Interactive contact form

## 🚀 Deployment

The frontend can be deployed to various platforms:

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set build command: `cd frontend && npm run build`
3. Set output directory: `frontend/dist`
4. Deploy automatically on push

### Netlify
1. Connect your GitHub repository
2. Set build command: `cd frontend && npm run build`
3. Set publish directory: `frontend/dist`

### GitHub Pages
Use GitHub Actions for automated deployment:
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install and Build
        run: |
          cd frontend
          npm install
          npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./frontend/dist
```

Build for production:
```bash
cd frontend
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Ryan Hideo Jewik - [ryanjewik25@gmail.com](mailto:ryanjewik25@gmail.com)

- GitHub: [https://github.com/ryanjewik](https://github.com/ryanjewik)
- LinkedIn: [https://www.linkedin.com/in/ryanjewik/](https://www.linkedin.com/in/ryanjewik/)

Project Link: [https://github.com/ryanjewik/portfolio-website](https://github.com/ryanjewik/portfolio-website)

## 🙏 Acknowledgments

- [Vanta.js](https://www.vantajs.com/) for the stunning animated backgrounds
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [React](https://reactjs.org/) for the component architecture
- [Vite](https://vitejs.dev/) for the fast development experience

---

⭐ If you found this project helpful, please give it a star!
