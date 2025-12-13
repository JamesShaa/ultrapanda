# Ultrapanda - Vite + Tailwind CSS Project

This project has been converted from PHP to a modern Vite + Tailwind CSS setup.

## Features

- ⚡ Vite for fast development and building
- 🎨 Tailwind CSS for styling
- 📦 JSON-based data management
- 🧩 Component-based architecture
- 🔥 Hot Module Replacement (HMR)

## Project Structure

```
.
├── src/
│   ├── components/      # React-like components (Header, Footer)
│   ├── data/           # JSON data files
│   ├── app.js          # Main application logic
│   ├── main.js         # Entry point
│   └── style.css       # Tailwind + custom styles
├── public/
│   └── media/          # Static assets (images, etc.)
├── index.html          # Main HTML file
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── tailwind.config.js  # Tailwind configuration
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Data Management

All dynamic content is stored in JSON files:
- `src/data/config.json` - Site configuration, links, navigation
- `src/data/games.json` - Game data (popular, recommended, most played)

## Customization

- Edit `src/data/config.json` to update site links and content
- Edit `src/data/games.json` to update game listings
- Modify `src/app.js` to change the page structure
- Update `tailwind.config.js` to customize Tailwind settings
- Add custom styles in `src/style.css`

## Technologies Used

- Vite 5.x
- Tailwind CSS 3.x
- Vanilla JavaScript (ES6 Modules)
- PostCSS & Autoprefixer


