import type { AppConfig } from './lib/types';

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'Tinycase',
  pageTitle: 'Tinycase - Personal Finance GPT',
  pageDescription:
    'Your AI Financial Advisor. An open-source, high-performance AI chatbot framework specialized for personal finance management.',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '/logo_bg.png',
  accent: '#002cf2',
  logoDark: '/logo_bg.png',
  accentDark: '#1fd5f9',
  startButtonText: 'Start Financial Consultation',
};
