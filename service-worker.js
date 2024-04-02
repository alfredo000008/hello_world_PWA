// service-worker.js

// Service Worker installation
self.addEventListener('install', event => {
  console.log('Service Worker installed');
});

// Service Worker activation
self.addEventListener('activate', event => {
  console.log('Service Worker activated');
});

// Intercept and respond to fetch requests
self.addEventListener('fetch', event => {
  console.log('Intercepting request:', event.request.url);
  // Additional fetch handling logic here
});
