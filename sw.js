// Service Worker for GrowBrandi PWA
// Provides offline functionality, caching, and background sync

const CACHE_NAME = 'growbrandi-v1.0.0';
const STATIC_CACHE = 'growbrandi-static-v1.0.0';
const DYNAMIC_CACHE = 'growbrandi-dynamic-v1.0.0';

// Files to cache for offline functionality
const STATIC_FILES = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/main.js',
    '/js/router.js',
    '/js/pages.js',
    '/js/constants.js',
    '/js/animations.js',
    '/js/performance.js',
    '/manifest.json',
    // Add critical images
    '/images/logo.svg',
    '/images/hero-bg.jpg'
];

// Files to cache dynamically
const DYNAMIC_FILES = [
    '/js/chat.js',
    '/js/conversion-chat.js'
];

// Install Service Worker
self.addEventListener('install', event => {
    console.log('🔧 Service Worker: Installing...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('📦 Service Worker: Caching static files');
                return cache.addAll(STATIC_FILES);
            })
            .then(() => {
                console.log('✅ Service Worker: Installation complete');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('❌ Service Worker: Installation failed', error);
            })
    );
});

// Activate Service Worker
self.addEventListener('activate', event => {
    console.log('🚀 Service Worker: Activating...');
    
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        // Delete old caches
                        if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                            console.log('🗑️ Service Worker: Deleting old cache', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('✅ Service Worker: Activation complete');
                return self.clients.claim();
            })
    );
});

// Fetch Strategy: Cache First for static files, Network First for dynamic content
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }
    
    // Skip external requests (except fonts and APIs we control)
    if (url.origin !== location.origin && 
        !url.hostname.includes('fonts.googleapis.com') &&
        !url.hostname.includes('fonts.gstatic.com')) {
        return;
    }
    
    // Handle different types of requests
    if (isStaticFile(event.request.url)) {
        event.respondWith(cacheFirstStrategy(event.request));
    } else if (isAPIRequest(event.request.url)) {
        event.respondWith(networkFirstStrategy(event.request));
    } else {
        event.respondWith(staleWhileRevalidateStrategy(event.request));
    }
});

// Cache First Strategy (for static files)
async function cacheFirstStrategy(request) {
    try {
        const cacheResponse = await caches.match(request);
        if (cacheResponse) {
            return cacheResponse;
        }
        
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.error('Cache First Strategy failed:', error);
        return new Response('Offline content unavailable', {
            status: 503,
            statusText: 'Service Unavailable'
        });
    }
}

// Network First Strategy (for API calls)
async function networkFirstStrategy(request) {
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.log('Network failed, trying cache:', error.message);
        const cacheResponse = await caches.match(request);
        if (cacheResponse) {
            return cacheResponse;
        }
        
        return new Response(JSON.stringify({
            error: 'Offline',
            message: 'Network unavailable and no cached data'
        }), {
            status: 503,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

// Stale While Revalidate Strategy (for dynamic content)
async function staleWhileRevalidateStrategy(request) {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cacheResponse = await caches.match(request);
    
    const networkPromise = fetch(request).then(networkResponse => {
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    }).catch(() => null);
    
    return cacheResponse || await networkPromise || new Response('Content unavailable offline', {
        status: 503,
        statusText: 'Service Unavailable'
    });
}

// Helper functions
function isStaticFile(url) {
    return url.includes('.css') || 
           url.includes('.js') || 
           url.includes('.jpg') || 
           url.includes('.png') || 
           url.includes('.svg') || 
           url.includes('.webp') ||
           url.includes('fonts.googleapis.com') ||
           url.includes('fonts.gstatic.com');
}

function isAPIRequest(url) {
    return url.includes('/api/') || 
           url.includes('generativelanguage.googleapis.com');
}

// Background Sync for form submissions
self.addEventListener('sync', event => {
    if (event.tag === 'contact-form-sync') {
        event.waitUntil(syncContactForms());
    }
});

async function syncContactForms() {
    try {
        const db = await openDB();
        const forms = await getOfflineForms(db);
        
        for (const form of forms) {
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(form.data)
                });
                
                if (response.ok) {
                    await deleteOfflineForm(db, form.id);
                    console.log('✅ Synced offline form submission');
                }
            } catch (error) {
                console.error('❌ Failed to sync form:', error);
            }
        }
    } catch (error) {
        console.error('❌ Background sync failed:', error);
    }
}

// Push Notifications
self.addEventListener('push', event => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'GrowBrandi Update';
    const options = {
        body: data.body || 'New updates available!',
        icon: '/images/icon-192x192.png',
        badge: '/images/badge-72x72.png',
        vibrate: [100, 50, 100],
        data: data.url ? { url: data.url } : {},
        actions: [
            {
                action: 'view',
                title: 'View',
                icon: '/images/view-icon.png'
            },
            {
                action: 'dismiss',
                title: 'Dismiss',
                icon: '/images/dismiss-icon.png'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

// Notification Click Handler
self.addEventListener('notificationclick', event => {
    event.notification.close();
    
    if (event.action === 'view') {
        const url = event.notification.data.url || '/';
        event.waitUntil(
            clients.openWindow(url)
        );
    }
});

// IndexedDB helpers for offline storage
function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('GrowBrandiDB', 1);
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
        
        request.onupgradeneeded = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains('forms')) {
                db.createObjectStore('forms', { keyPath: 'id', autoIncrement: true });
            }
        };
    });
}

function getOfflineForms(db) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['forms'], 'readonly');
        const store = transaction.objectStore('forms');
        const request = store.getAll();
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
    });
}

function deleteOfflineForm(db, id) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['forms'], 'readwrite');
        const store = transaction.objectStore('forms');
        const request = store.delete(id);
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
    });
}

// Cache Management
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    } else if (event.data && event.data.type === 'CACHE_URLS') {
        event.waitUntil(
            caches.open(DYNAMIC_CACHE)
                .then(cache => cache.addAll(event.data.urls))
        );
    }
});

// Periodic Background Sync (if supported)
self.addEventListener('periodicsync', event => {
    if (event.tag === 'content-sync') {
        event.waitUntil(syncContent());
    }
});

async function syncContent() {
    try {
        // Sync critical content in background
        const response = await fetch('/api/content/updates');
        if (response.ok) {
            const updates = await response.json();
            // Process updates
            console.log('📱 Background content sync completed');
        }
    } catch (error) {
        console.error('❌ Background content sync failed:', error);
    }
}

// Error handling
self.addEventListener('error', event => {
    console.error('🐛 Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', event => {
    console.error('🐛 Service Worker unhandled rejection:', event.reason);
});

console.log('🔧 Service Worker loaded');