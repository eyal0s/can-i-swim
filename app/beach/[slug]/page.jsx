"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getWeatherData } from '../../api/weather';
// import { registerPushNotifications } from '../../utils/pushNotifications';
import { initOneSignal, registerPushNotifications } from '../../onesignal';

export default function BeachInfo() {
  const { slug } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    initOneSignal();
    registerPushNotifications();
  }, []);

  useEffect(() => {
    if (slug) {
      getWeatherData(slug).then(data => setWeatherData(data));
    }
  }, [slug]);

  const handleNotificationRegistration = () => {
    registerPushNotifications(slug);
  };

  if (!weatherData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <a href='/'>👈 Back</a>
      <h1>{decodeURI(slug)}</h1>
        <div>
          <h2>Today's Weather {new Date().toLocaleDateString('en-GB')} {new Date().toLocaleTimeString('en-GB')}</h2>
          <p>Wave Height: {weatherData.waveHeight} cm</p>
          <p>Wave Separation: {weatherData.waveSeparation} seconds</p>
          <p>Wave Direction: {weatherData.waveDirection} </p>
          <p>Temperature: {weatherData.temperature} °C</p>
        </div>
        <button onClick={handleNotificationRegistration}>
          Register for Push Notifications
        </button>
      </div>
    
  );
}