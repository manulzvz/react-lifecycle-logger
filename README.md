# React Lifecycle Logger

React Lifecycle Logger is a demo application built with React and Vite to visualize and log component lifecycle phases in real time.

## Features

- **Functional Components**: Uses `useEffect` to log mount and update phases.
- **Interactive Controls**: Buttons to mount, update props, and unmount components dynamically.
- **Live Logging**: Displays logs in the browser console as you interact.

## Demo

1. Run the application locally.
2. Open your browser’s developer console.
3. Use the UI buttons to mount, update props, or unmount components and watch the logs in real time.

## Installation

```bash
git clone https://github.com/manulzvz/react-lifecycle-logger.git
cd react-lifecycle-logger
npm install
```

## Development

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

## Build & Preview

```bash
npm run build
npm run preview
```

## Project Structure

```
react-lifecycle-logger
├── src
│   ├── main.jsx                    # Entry point
│   ├── App.jsx                     # Root component
│   ├── ClassComponentLogger.jsx    # Class component demo
│   ├── FunctionComponentLogger.jsx # Functional component demo
│   └── ...                         # Other components
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Contributing

Contributions and suggestions are welcome! Open an issue or submit a pull request for improvements.
