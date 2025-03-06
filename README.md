
# CodeSark Portfolio

[![Build + Push + Deploy](https://github.com/codesark/codesark-portfolio/actions/workflows/build-push-deploy.yml/badge.svg)](https://github.com/codesark/codesark-portfolio/actions/workflows/build-push-deploy.yml)

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with sections for projects, skills, and contact information.

## Features

- 🎨 Modern UI with Tailwind CSS and Framer Motion animations
- 📱 Fully responsive design
- 🚀 Server-side rendering with Next.js
- 📧 Contact form with email integration
- 🎯 Skills and project showcase
- 🔄 CI/CD with GitHub Actions
- 🐳 Containerized with Docker

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Radix UI
- **Email Service:** Nodemailer
- **Deployment:** Docker
- **CI/CD:** GitHub Actions

## Development

### Prerequisites

- Node.js 20.x
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/codesark/codesark-portfolio.git
cd codesark-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with the following variables:
```env
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
SMTP_FROM=your_from_email
SMTP_TO=your_to_email
SMTP_SECURE=true_or_false
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

## Docker Deployment

1. Build the Docker image
```bash
docker build -t codesark-portfolio .
```

2. Run the container
```bash
docker run -p 3000:3000 --env-file .env codesark-portfolio
```

## License

MIT License

