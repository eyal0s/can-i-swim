import OneSignal from 'react-onesignal';

export const registerPushNotifications = async () => {
  OneSignal.push(() => {
    OneSignal.init({
        appId: "ec85c283-ba99-441f-b761-186cb2c44dd2",
        safari_web_id: "web.onesignal.auto.14469d21-a548-446f-9323-a0e21fc14d38",
        allowLocalhostAsSecureOrigin: true,
    });

    OneSignal.isPushNotificationsEnabled((isEnabled) => {
      if (!isEnabled) {
        OneSignal.registerForPushNotifications();
      }
    });
  });
};
