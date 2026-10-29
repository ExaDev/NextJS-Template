# {{PROJECT_NAME}} - Next.js Template

[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/ExaDev/NextJS-Template) [![CI](https://img.shields.io/github/actions/workflow/status/ExaDev/NextJS-Template/ci.yml?branch=main)](https://github.com/ExaDev/NextJS-Template/actions)

![Coverage](https://img.shields.io/badge/coverage-84.21%25-yellow.svg)

## Overview

This is a production-ready Next.js template featuring a comprehensive development environment with modern tooling, testing infrastructure, and CI/CD pipeline. Perfect for building static-export applications with built-in LLM integration capabilities.

## 🚀 Quick Start

### 1. Use This Template
Click "Use this template" button on GitHub or clone the repository:
```bash
git clone {{REPOSITORY_URL}}
cd {{PROJECT_NAME}}
```

### 2. Customize Your Project
Run the setup script to replace template placeholders:
```bash
npm run setup
```

This will prompt you for:
- Project name
- Project description
- Author information
- Repository URL
- App name and descriptions
- Feature descriptions

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 🎯 Features

### ✅ Modern Development Stack
- **Next.js 15** with App Router and TypeScript
- **React 19** with latest features
- **Tailwind CSS v4** for styling
- **Static Export** ready for deployment

### ✅ Comprehensive Testing
- **Vitest** for unit testing
- **MSW** for API mocking
- **React Testing Library** for component testing
- **Coverage reporting** with thresholds

### ✅ Code Quality Tools
- **Biome** for linting and formatting
- **TypeScript** strict mode
- **Husky** git hooks
- **Conventional commits** with Commitizen

### ✅ CI/CD Pipeline
- **GitHub Actions** workflow
- **Semantic Release** for versioning
- **Automated deployment** to GitHub Pages
- **Security audits** and quality gates

### ✅ LLM Integration Ready
- **WebAssembly** support configured
- **Multi-provider** architecture
- **Privacy-first** approach with local processing
- **Mock APIs** ready for integration

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page (customizable)
│   │   └── globals.css      # Global styles
│   ├── components/          # Reusable components
│   ├── lib/                 # Utilities and API functions
│   ├── mocks/               # MSW mock handlers
│   ├── stories/             # Storybook stories
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets
├── .github/workflows/       # CI/CD configuration
└── Configuration files      # Various config files
```

## 🛠️ Development Commands

### Primary Development
```bash
npm run dev          # Start development server
npm test             # Run tests in watch mode
npm run coverage     # Generate test coverage report
npm run lint         # Check code quality
npm run lint:fix     # Auto-fix linting issues
npm run type-check   # TypeScript type checking
```

### Testing
```bash
npm run test:run     # Run tests once (CI mode)
npm run test:ui      # Open Vitest UI
npm run coverage     # Generate coverage report
```

### Building & Deployment
```bash
npm run build        # Build for production
npm run storybook    # Start Storybook
npm run build-storybook  # Build Storybook
```

### Release & Commits
```bash
npm run commit       # Interactive conventional commit
npm run release:dry  # Preview release
```

## 🔧 Configuration

### Template Placeholders
The following placeholders will be replaced during setup:

**Package.json:**
- `{{PROJECT_NAME}}` - NPM package name
- `{{PROJECT_DESCRIPTION}}` - Project description
- `{{REPOSITORY_URL}}` - Git repository URL
- `{{AUTHOR_NAME}}` - Author name
- `{{AUTHOR_EMAIL}}` - Author email
- `{{LICENSE}}` - License type

**Application Content:**
- `{{APP_NAME}}` - Application display name
- `{{APP_DESCRIPTION}}` - Application description
- `{{FEATURE_X_TITLE}}` - Feature titles (1-4)
- `{{FEATURE_X_DESCRIPTION}}` - Feature descriptions (1-4)
- `{{CTA_TITLE}}` - Call-to-action title
- `{{CTA_DESCRIPTION}}` - Call-to-action description
- `{{CTA_BUTTON_TEXT}}` - Button text

### Environment Variables
Create a `.env.local` file for local development:
```env
# Add your environment variables here
NEXT_PUBLIC_APP_NAME="{{APP_NAME}}"
```

## 🧪 Testing Strategy

### Unit Testing
- **Vitest** configuration with React Testing Library
- **Coverage thresholds**: 80% statements/functions/lines, 70% branches
- **Co-located tests**: Tests next to source files

### API Mocking
- **MSW** for realistic API mocking
- **Handlers** for all endpoints
- **Browser and Node** environments supported

### Integration Testing
- **MSW Provider** for development
- **Storybook** for component testing
- **E2E ready** structure

## 🚀 Deployment

### Automatic Deployment
- **GitHub Pages** deployment on main branch push
- **Quality gates** ensure code quality
- **Semantic versioning** with automated releases
- **Static export** optimized for CDN

### Manual Deployment
```bash
npm run build    # Generate static export
npx serve out    # Test locally
```

## 🎨 Customization Guide

### 1. Update Branding
- Replace colors in `tailwind.config.ts`
- Update logo in `public/` directory
- Modify `src/app/layout.tsx` for metadata

### 2. Add Features
- Create components in `src/components/`
- Add pages in `src/app/`
- Update API layer in `src/lib/api.ts`

### 3. Configure LLM Integration
- Update `next.config.ts` for providers
- Implement actual API calls in `src/lib/api.ts`
- Replace MSW mocks with real endpoints

### 4. Customize CI/CD
- Modify `.github/workflows/ci.yml`
- Update deployment targets
- Configure secrets and variables

## 📚 Documentation

### Key Files
- `CLAUDE.md` - AI assistant guidance
- `CONTRIBUTING.md` - Contribution guidelines
- `CHANGELOG.md` - Version history
- `biome.json` - Code quality configuration
- `vitest.config.ts` - Testing configuration

### Storybook
Component documentation and development environment:
```bash
npm run storybook
```

## 🔒 Security

### Built-in Security Features
- **Dependency auditing** in CI/CD
- **No server-side** attack vectors (static export)
- **Privacy-first** LLM integration
- **Secure defaults** throughout

### Security Commands
```bash
npm run security:check  # Check for vulnerabilities
npm audit              # Dependency audit
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Create a pull request

See `CONTRIBUTING.md` for detailed guidelines.

## 📄 License

This project is licensed under the {{LICENSE}} License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the documentation
2. Search existing GitHub issues
3. Create a new issue with detailed information
4. Refer to `CLAUDE.md` for AI assistant guidance

## 🎯 Roadmap

- [ ] Add more component examples
- [ ] Implement additional LLM providers
- [ ] Add E2E testing setup
- [ ] Create deployment guides
- [ ] Add internationalization support

## 🙏 Acknowledgments

Built with modern web development best practices and inspired by the Next.js community. Special thanks to all contributors and the open-source ecosystem.

---

**Happy coding!** 🎉