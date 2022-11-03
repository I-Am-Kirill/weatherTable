// При попытке получить данный с адресов "https://api.openweathermap.org/data/2.5/weather?id=524894&appid=b99a37f6cbd6ffdaa77f4abf103989a8&units=metric"
// возникает ошибка, при переходе по прямой ссылке
// поэтому данные вставлены из примера задания с помощью useState

import React, { useState } from 'react';

export default function Main() {
  const [show, SetShow] = useState(false);
  const [metricMos, setMetricMos] = useState([]);
  const [imperialMos, setImperialMos] = useState([]);
  const [metricPet, setMetricPet] = useState([]);
  const [imperialPet, setImperialPet] = useState([]);
  const getData = () => {
    setMetricMos([{
      coord: { lon: 37.6067, lat: 55.7617 },
      weather: [{
        id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d',
      }],
      base: 'stations',
      main: {
        temp: 1.84,
        feels_like: -1.04,
        temp_min: 0.22,
        temp_max: 2.89,
        pressure: 1015,
        humidity: 80,
        sea_level: 1015,
        grnd_level: 995,
      },
      visibility: 10000,
      wind: { speed: 2.71, deg: 347, gust: 4.24 },
      clouds: { all: 96 },
      dt: 1667389147,
      sys: {
        type: 2, id: 2000314, country: 'RU', sunrise: 1667363830, sunset: 1667396940,
      },
      timezone: 10800,
      id: 524894,
      name: 'Moscow',
      cod: 200,
    }]);
    setImperialMos([{
      coord: { lon: 37.6067, lat: 55.7617 },
      weather: [{
        id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d',
      }],
      base: 'stations',
      main: {
        temp: 35.31,
        feels_like: 30.13,
        temp_min: 32.4,
        temp_max: 37.2,
        pressure: 1015,
        humidity: 80,
        sea_level: 1015,
        grnd_level: 995,
      },
      visibility: 10000,
      wind: { speed: 6.06, deg: 347, gust: 9.48 },
      clouds: { all: 96 },
      dt: 1667389202,
      sys: {
        type: 2, id: 2000314, country: 'RU', sunrise: 1667363830, sunset: 1667396940,
      },
      timezone: 10800,
      id: 524894,
      name: 'Moscow',
      cod: 200,
    }]);
    setMetricPet([{
      coord: { lon: 30.2642, lat: 59.8944 },
      weather: [{
        id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d',
      }],
      base: 'stations',
      main: {
        temp: 6.08, feels_like: 3.8, temp_min: 6.08, temp_max: 6.08, pressure: 1016, humidity: 93,
      },
      visibility: 9000,
      wind: { speed: 3, deg: 320 },
      clouds: { all: 100 },
      dt: 1667388657,
      sys: {
        type: 1, id: 8926, country: 'RU', sunrise: 1667366547, sunset: 1667397747,
      },
      timezone: 10800,
      id: 498817,
      name: 'Saint Petersburg',
      cod: 200,
    }]);
    setImperialPet([{
      coord: { lon: 30.2642, lat: 59.8944 },
      weather: [{
        id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d',
      }],
      base: 'stations',
      main: {
        temp: 42.94,
        feels_like: 38.84,
        temp_min: 42.94,
        temp_max: 42.94,
        pressure: 1016,
        humidity: 93,
      },
      visibility: 9000,
      wind: { speed: 6.71, deg: 310 },
      clouds: { all: 100 },
      dt: 1667388919,
      sys: {
        type: 1, id: 8926, country: 'RU', sunrise: 1667366547, sunset: 1667397747,
      },
      timezone: 10800,
      id: 498817,
      name: 'Saint Petersburg',
      cod: 200,
    }]);
    SetShow(true);
  };

  return (
    <div>
      <button type="button" onClick={() => getData()}>Получить информацию</button>
      {show ? (
        <table>
          <thead>
            <tr>
              <th>Город</th>
              <th>Температура °C</th>
              <th>Максимальная температура °C</th>
              <th>Минимальная температура °C</th>
              <th>Температура °F</th>
              <th>Максимальная температура °F</th>
              <th>Минимальная температура °F</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{metricMos[0]?.name}</td>
              <td>{metricMos[0]?.main.temp}</td>
              <td>{metricMos[0]?.main.temp_max}</td>
              <td>{metricMos[0]?.main.temp_min}</td>
              <td>{imperialMos[0]?.main.temp}</td>
              <td>{imperialMos[0]?.main.temp_max}</td>
              <td>{imperialMos[0]?.main.temp_min}</td>
            </tr>
            <tr>
              <td>{metricPet[0]?.name}</td>
              <td>{metricPet[0]?.main.temp}</td>
              <td>{metricPet[0]?.main.temp_max}</td>
              <td>{metricPet[0]?.main.temp_min}</td>
              <td>{imperialPet[0]?.main.temp}</td>
              <td>{imperialPet[0]?.main.temp_max}</td>
              <td>{imperialPet[0]?.main.temp_min}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        null
      )}
    </div>
  );
}
