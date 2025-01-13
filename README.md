# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## Project Structure

```
myself-react-app/
├── .github/
│   └── workflows/           # GitHub Actions workflow files
│       ├── deploy-preview.yml   # PR preview deployment
│       └── deploy-production.yml # Production deployment
├── src/
│   ├── components/         # React components
│   │   ├── Header/        # Navigation header
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   └── Header.test.jsx
│   │   └── Profile/       # Profile section
│   │       ├── Profile.jsx
│   │       ├── Profile.css
│   │       └── Profile.test.jsx
│   ├── test/              # Test configuration
│   │   └── setup.js       # Test setup and mocks
│   ├── App.jsx            # Main App component
│   ├── App.css            # Global styles
│   ├── App.test.jsx       # App component tests
│   └── main.jsx           # Application entry point
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
└── package.json           # Project dependencies and scripts
```

## Prerequisites

- Node.js (v20 or later recommended)
- npm (included with Node.js)
- Git

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/myself-react-app.git
   cd myself-react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Configuration

The project supports three environments: Development, Staging, and Production. Each environment has its own configuration and can be run locally for testing.

### Development Mode

Development mode is optimized for local development with hot reloading and debugging features.

```bash
# Start development server
npm run dev

# Access the app at
http://localhost:5173/

# Features
- Hot Module Replacement (HMR)
- Source maps
- Debug logging enabled
- Mock API enabled

# Environment variables (.env.development)
VITE_APP_ENV=development
VITE_APP_BASE_URL=http://localhost:5173
VITE_APP_API_URL=http://localhost:3000/api
VITE_APP_ENABLE_MOCK_API=true
VITE_APP_ENABLE_DEBUG=true
```

### Staging Mode

Staging mode mimics production but with additional debugging capabilities.

```bash
# Build for staging
npm run build:staging

# Preview staging build
npm run preview:staging

# Access the app at
http://localhost:4173/

# Features
- Production-like build
- Source maps included
- Debug logging enabled
- Real API endpoints

# Environment variables (.env.staging)
VITE_APP_ENV=staging
VITE_APP_BASE_URL=https://staging.yourdomain.com
VITE_APP_API_URL=https://api-staging.yourdomain.com/api
VITE_APP_ENABLE_MOCK_API=false
VITE_APP_ENABLE_DEBUG=true
```

### Production Mode

Production mode is fully optimized for deployment.

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Access the app at
http://localhost:4173/

# Features
- Minified build
- No source maps
- Debug logging disabled
- Real API endpoints
- Optimized chunk splitting

# Environment variables (.env.production)
VITE_APP_ENV=production
VITE_APP_BASE_URL=https://yourdomain.com
VITE_APP_API_URL=https://api.yourdomain.com/api
VITE_APP_ENABLE_MOCK_API=false
VITE_APP_ENABLE_DEBUG=false
```

### Build Output Comparison

Development:

- No build output (serves directly from source)
- Instant updates via HMR

Staging:

- JS: ~144.5 KB (gzip: ~47 KB)
- CSS: ~1.75 KB (gzip: ~0.75 KB)
- Includes source maps
- Separate vendor chunks

Production:

- JS: ~144.4 KB (gzip: ~46.9 KB)
- CSS: ~1.75 KB (gzip: ~0.75 KB)
- No source maps
- Optimized chunk splitting
- Minified and compressed

## Available Scripts

- **Development**:

  ```bash
  npm run dev              # Start development server
  npm run test            # Run tests once
  npm run test:watch      # Run tests in watch mode
  npm run test:coverage   # Run tests with coverage
  ```

- **Staging**:

  ```bash
  npm run build:staging   # Build for staging
  npm run preview:staging # Preview staging build
  ```

- **Production**:

  ```bash
  npm run build          # Build for production
  npm run preview        # Preview production build
  ```

- **Utility**:
  ```bash
  npm run clean         # Remove dist folder
  npm run clean:all    # Remove dist and node_modules
  npm run lint         # Run ESLint
  ```

## Testing

The project uses Vitest and React Testing Library for testing. Tests are located alongside their components with the `.test.jsx` extension.

To run tests:

```bash
npm test
```

For test coverage:

```bash
npm run test:coverage
```

## Deployment

The project uses GitHub Actions for automated deployments:

- **Production Deployment**: Automatically triggered when changes are merged to the main branch
- **Preview Deployment**: Automatically created for pull requests

### Environment Setup

1. Configure Repository Permissions

   - Go to Settings > Actions > General
   - Under "Workflow permissions":
     - Select "Read and write permissions"
     - Check "Allow GitHub Actions to create and approve pull requests"

2. Set Up Environment Secrets

   - Go to Settings > Secrets and variables > Actions
   - Add environment-specific secrets for your deployment

3. Configure Environments
   - Set up separate environments for production and staging
   - Configure environment-specific variables and secrets
   - Set up required reviewers and deployment rules as needed

## Development

1. Create a new branch for your feature:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:

   ```bash
   git add .
   git commit -m "Add your feature"
   ```

3. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request on GitHub

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this project as a template for your own portfolio.
