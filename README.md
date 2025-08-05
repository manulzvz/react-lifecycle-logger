# React Lifecycle Logger

**React Lifecycle Logger** es una aplicación de demostración construida con React y Vite para visualizar y registrar las fases del ciclo de vida de los componentes en tiempo real.

## Características

- **Componentes de Función**: Utiliza hooks `useEffect` para registrar fases de montaje y actualización.
- **Controles Interactivos**: Botones para montar, actualizar props y desmontar componentes dinámicamente.
- **Registro en Vivo**: Visualiza los logs en la consola del navegador conforme interactúas con la aplicación.

## Demo

1. Ejecuta la aplicación localmente.
2. Abre la consola de desarrollo del navegador.
3. Usa los botones de la interfaz para montar o desmontar componentes y observa los logs en tiempo real.

## Instalación

```bash
git clone https://github.com/manulzvz/react-lifecycle-logger.git
cd react-lifecycle-logger
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173`.

## Build y Preview

```bash
npm run build
npm run preview
```

## Estructura del Proyecto

```
react-lifecycle-logger
├── src
│   ├── main.jsx                  # Punto de entrada
│   ├── App.jsx                   # Componente raíz
│   ├── ClassComponentLogger.jsx  # Demo de componente de clase
│   ├── FunctionComponentLogger.jsx # Demo de componente funcional
│   └── /* otros componentes */
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Contribuciones

¡Se aceptan contribuciones y sugerencias! Abre un issue o envía un pull request para mejoras.
