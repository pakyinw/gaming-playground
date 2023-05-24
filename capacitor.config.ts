import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cashsite.app',
  appName: 'cashsite',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
