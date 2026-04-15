// Import and initialize Vercel Web Analytics
import { inject } from 'https://cdn.jsdelivr.net/npm/@vercel/analytics@2/+esm';

// Inject the analytics script
inject({
  mode: 'auto',
  debug: false
});
