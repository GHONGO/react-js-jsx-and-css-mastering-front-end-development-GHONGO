# Griffin's Task Manager - React.js & Tailwind CSS Application

A modern, responsive task management application built with React.js and Tailwind CSS. Manage your daily tasks, explore API data, and browse photo galleries in a sleek, intuitive interface.

## Live Application

**Live Demo:** https://react-js-jsx-and-css-mastering-fron-snowy.vercel.app/

**GitHub Repository:** https://github.com/GHONGO/react-js-jsx-and-css-mastering-front-end-development-GHONGO

## Features

### Core Task Management
- **Add, Complete & Delete Tasks** - Full CRUD operations with intuitive interface
- **Smart Filtering** - View All, Active, or Completed tasks with one click
- **Auto Save** - Tasks automatically persist in browser localStorage
- **Progress Tracking** - Real-time task statistics and completion counters
- **Persistent Data** - Your tasks remain after browser refresh

### User Experience
- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, accessible design with smooth animations and transitions
- **Keyboard Navigation** - Full keyboard support for all operations

### API Integration & Data Exploration
- **JSONPlaceholder Integration** - Real API data fetching and display
- **Multi-Data Type Explorer** - Browse Posts, Users, Comments, and Photos
- **Advanced Search** - Real-time filtering across all data fields
- **Photo Gallery** - Paginated image browsing with navigation controls
- **Error Handling** - Graceful error states and loading indicators

### Application Pages

#### Home Dashboard
- Welcome section with feature highlights
- Full-featured task manager interface
- Productivity statistics and insights
- Real-time task counter

#### Photo Gallery
- Curated image gallery from JSONPlaceholder API
- Responsive grid layout with hover effects
- Paginated browsing with navigation controls
- Image loading states and error fallbacks

#### API Data Explorer
- Interactive data exploration interface
- Real-time search across multiple data types
- Detailed item views with proper formatting
- Type-specific display optimizations

## Technology Stack

### Frontend Framework
- **React.js 18** - Modern React with hooks and functional components
- **JSX** - JavaScript syntax extension for React components
- **React Router DOM** - Client-side routing and navigation

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first responsive layouts
- **Dark Mode** - Native dark/light theme support with localStorage persistence
- **Custom Animations** - Smooth transitions and hover effects

### Development & Build
- **Create React App** - Optimized build system for production
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization

### APIs & Data
- **JSONPlaceholder** - Free fake REST API for testing and development
- **Browser LocalStorage** - Client-side data persistence
- **Fetch API** - Modern HTTP requests with error handling

## Installation & Local Development

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager
- Modern web browser

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/GHONGO/react-js-jsx-and-css-mastering-front-end-development-GHONGO.git
   cd react-js-jsx-and-css-mastering-front-end-development-GHONGO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

```bash
npm start          # Start development server
npm run build      # Create production build
npm test           # Run test suite
npm run eject      # Eject from Create React App (not recommended)
```

## Usage Guide

### Managing Tasks
1. **Add Task**: Type in the input field and click "Add Task" or press Enter
2. **Complete Task**: Click the checkbox next to any task
3. **Filter Tasks**: Use the All/Active/Completed filter buttons
4. **Delete Task**: Click the "Delete" button on any task
5. **View Statistics**: See remaining tasks count at the bottom

### Exploring Data
1. **Navigate to Gallery**: Click "Gallery" in the navigation to browse photos
2. **Use Pagination**: Navigate through photo pages with Previous/Next buttons
3. **Explore API Data**: Click "API Data" to explore Posts, Users, and Comments
4. **Search Functionality**: Use the search input to filter results in real-time

### Customizing Experience
- **Toggle Theme**: Use the theme switcher in the navigation (Light/Dark Mode)
- **Responsive Layout**: The app automatically adapts to your screen size
- **Persistent Settings**: Your theme preference and tasks save automatically

## Project Structure

```
src/
├── components/          # Reusable UI Components
│   ├── Button.jsx      # Multi-variant button system
│   ├── Card.jsx        # Flexible card container
│   ├── Navbar.jsx      # Responsive navigation with theme toggle
│   ├── Footer.jsx      # Application footer
│   └── TaskManager.jsx # Complete task management system
├── pages/              # Application Pages
│   ├── Home.jsx        # Dashboard with task manager
│   ├── Gallery.jsx     # Photo gallery with pagination
│   └── ApiData.jsx     # API data explorer with search
├── hooks/              # Custom React Hooks
│   ├── useLocalStorage.jsx # Browser storage management
│   └── useApi.jsx      # API data fetching with error handling
├── context/            # React Context Providers
│   └── ThemeContext.jsx # Global theme management
├── api/                # API Integration Layer
│   └── jsonPlaceholder.jsx # External API service functions
├── utils/              # Utility Functions
│   └── helpers.jsx     # Helper functions and formatters
├── App.jsx             # Main application component with routing
├── index.js            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## API Integration

The application integrates with JSONPlaceholder API endpoints:

- **GET /posts** - Blog posts data
- **GET /users** - User information
- **GET /comments** - Post comments
- **GET /photos** - Image gallery data

All API calls include comprehensive error handling, loading states, and retry mechanisms. The custom `useApi` hook manages data fetching, caching, and state management.

## Deployment

This application is deployed on Vercel with continuous deployment configured. Every push to the main branch automatically triggers a new deployment.

### Build for Production
```bash
npm run build
```

### Deployment Platforms
- **Vercel**: Automatic deployments from GitHub
- **Netlify**: Connect repository and set build command
- **GitHub Pages**: Use gh-pages package for deployment

## Customization

### Adding New Features
1. Create components in `src/components/`
2. Add pages in `src/pages/` and update routing in `App.jsx`
3. Extend custom hooks in `src/hooks/` for new functionality
4. Add API endpoints in `src/api/jsonPlaceholder.jsx`

### Styling Modifications
- Modify Tailwind classes in component files
- Extend the design system in `tailwind.config.js`
- Add custom CSS in `src/index.css`

### Theme System
The application uses React Context for global theme management. The theme preference is persisted in localStorage and automatically applied on page load.
