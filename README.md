
# CodeSark Portfolio

[![Build + Push + Deploy](https://github.com/codesark/codesark.dev/actions/workflows/build-push-deploy.yml/badge.svg)](https://github.com/codesark/codesark.dev/actions/workflows/build-push-deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC)](https://tailwindcss.com/)

A modern, responsive portfolio website showcasing my professional work and skills. Built with cutting-edge technologies, this portfolio features a clean design, smooth animations, and seamless user experience.

## ✨ Features

- 🎨 **Modern UI Design**
  - Sleek interface with Tailwind CSS
  - Smooth animations powered by Framer Motion
  - Responsive layout for all devices

- 🚀 **Advanced Technology**
  - Server-side rendering with Next.js 14
  - Type-safe development with TypeScript
  - Component-driven UI with Radix UI

- 📧 **Interactive Elements**
  - Fully functional contact form
  - Email integration with Nodemailer
  - Real-time form validation

- 🔄 **DevOps Integration**
  - Automated CI/CD with GitHub Actions
  - Containerized deployment with Docker
  - Optimized build process

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 14
- **Language:** TypeScript 5
- **Styling:**
  - Tailwind CSS 3
  - Framer Motion for animations
- **UI Components:**
  - Radix UI for accessible components
  - Custom styled components
- **Backend Services:**
  - Nodemailer for email handling
  - Server-side API routes
- **DevOps:**
  - Docker for containerization
  - GitHub Actions for CI/CD
  - Automated testing and deployment

## 🚀 Development

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager
- Git

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/codesark/codesark.dev.git
   cd codesark.dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   # SMTP Configuration
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_USER=your_smtp_user
   SMTP_PASS=your_smtp_password
   SMTP_FROM=your_from_email
   SMTP_TO=your_to_email
   SMTP_SECURE=true_or_false
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:3000`

## 🐳 Docker Deployment

### Local Deployment

1. **Build the Docker image**
   ```bash
   docker build -t codesark-portfolio .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 --env-file .env codesark-portfolio
   ```

### Production Deployment

1. **Build optimized image**
   ```bash
   docker build --build-arg NODE_ENV=production -t codesark-portfolio:prod .
   ```

2. **Run in production mode**
   ```bash
   docker run -d -p 3000:3000 --env-file .env --restart unless-stopped codesark-portfolio:prod
   ```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

© 2024 CodeSark. All rights reserved.

