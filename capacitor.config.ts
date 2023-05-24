import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cashsite.app',
  appName: 'cashsite',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
