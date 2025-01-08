/**
 * Environment configuration utility
 */
export const env = {
  isProduction: import.meta.env.VITE_APP_ENV === 'production',
  isStaging: import.meta.env.VITE_APP_ENV === 'staging',
  isDevelopment: import.meta.env.VITE_APP_ENV === 'development',
  
  // Base URLs
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  apiUrl: import.meta.env.VITE_APP_API_URL,
  
  // Feature flags
  enableMockApi: import.meta.env.VITE_APP_ENABLE_MOCK_API === 'true',
  enableDebug: import.meta.env.VITE_APP_ENABLE_DEBUG === 'true',
  
  // Analytics
  googleAnalyticsId: import.meta.env.VITE_APP_GOOGLE_ANALYTICS_ID,

  // Helper methods
  getApiUrl: (path) => `${import.meta.env.VITE_APP_API_URL}${path}`,
  
  // Environment checks
  checkIsDevelopment: () => import.meta.env.DEV,
  checkIsProduction: () => import.meta.env.PROD,
};

export default env;
