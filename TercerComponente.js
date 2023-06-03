import React, { useState } from 'react';

export const TercerComponente = () => {
  const [temperaturaCelsius, setTemperaturaCelsius] = useState('');
  const [temperaturaFahrenheit, setTemperaturaFahrenheit] = useState('');

  const convertirACelsius = (event) => {
    const valorFahrenheit = event.target.value;
    const temperatura = (valorFahrenheit - 32) * (5 / 9);
    setTemperaturaCelsius(temperatura.toFixed(2));
    setTemperaturaFahrenheit(valorFahrenheit);
  };

  const convertirAFahrenheit = (event) => {
    const valorCelsius = event.target.value;
    const temperatura = (valorCelsius * 9 / 5) + 32;
    setTemperaturaFahrenheit(temperatura.toFixed(2));
    setTemperaturaCelsius(valorCelsius);
  };

  return (
    <div>
      <div>
        <label >Temperatura en Celsius:</label>
        <input
          type="text"
          id="temCelsius" placeholder="Digite la temperatura en Celsius"
          onChange={convertirAFahrenheit}
          value={temperaturaCelsius }
        />
        
      </div>

      <div>
        <label >Temperatura en Fahrenheit:</label>
        <input
          type="text" id="temFahrenheit"
          placeholder="Digite la temperatura en Fahrenheit"
          onChange={convertirACelsius}
          value={temperaturaFahrenheit }
        />
        
      </div>
    </div>
  );
};
