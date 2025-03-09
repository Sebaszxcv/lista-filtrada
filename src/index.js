import React from 'react';
import ReactDOM from 'react-dom/client';  // Importa desde 'react-dom/client' en lugar de 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Crear el "root" para la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));  // Usamos createRoot

// Renderiza la aplicación en el DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si deseas medir el rendimiento de tu aplicación, puedes pasar una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// Más información en: https://bit.ly/CRA-vitals
reportWebVitals();
