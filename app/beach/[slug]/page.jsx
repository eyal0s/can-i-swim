"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import { getWeatherData } from '../../api/weather';
import { registerPushNotifications } from '../../utils/pushNotifications';

export default function BeachInfo() {
  const { slug } = useParams();
  const [weatherData, setWeatherData] = useState(null);

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
    <Layout>
      <a href='/'>👈 Back</a>
      <h1>{decodeURI(slug)}</h1>
      {/* <img src="/beach.jpg" alt={slug} /> */}
      <div>
        <p>Wave Height: {weatherData.waveHeight} cm</p>
        <p>Wave Separation: {weatherData.waveSeparation} seconds</p>
        <p>Wind: {weatherData.wind} km/h</p>
        <p>Temperature: {weatherData.temperature} °C</p>
      </div>
      <button onClick={handleNotificationRegistration}>
        Register for Push Notifications
      </button>
    </Layout>
  );
}