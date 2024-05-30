export const registerPushNotifications = async (beach) => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      const registration = await navigator.serviceWorker.register('/service-worker.js');
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'your-public-vapid-key'
      });
  
      await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ subscription, beach }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log('Push notifications registered');
    } else {
      console.error('Push notifications are not supported in this browser');
    }
  };