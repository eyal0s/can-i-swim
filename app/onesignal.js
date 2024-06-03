import OneSignal from 'react-onesignal';

export const initOneSignal = async () => {
  await OneSignal.init({
    appId: "ec85c283-ba99-441f-b761-186cb2c44dd2",
    safari_web_id: "web.onesignal.auto.14469d21-a548-446f-9323-a0e21fc14d38",
    allowLocalhostAsSecureOrigin: true,
  });

  OneSignal.showSlidedownPrompt();
};

export const registerPushNotifications = async () => {
  await OneSignal.isPushNotificationsEnabled(async (isEnabled) => {
    if (isEnabled) {
      console.log("Push notifications are enabled!");
    } else {
      console.log("Push notifications are not enabled yet.");
      await OneSignal.registerForPushNotifications();
    }
  });
};
