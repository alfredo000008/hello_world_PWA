// service-worker.js

// Instalar el service worker
self.addEventListener('install', event => {
    console.log('Service Worker instalado');
  });
  
  // Activar el service worker
  self.addEventListener('activate', event => {
    console.log('Service Worker activado');
  });
  
  // Interceptar y responder a las solicitudes de red
  self.addEventListener('fetch', event => {
    console.log('Interceptando solicitud:', event.request.url);
    
    // Aquí puedes implementar lógica para responder a las solicitudes de red, como el cacheado de recursos
  });
  