import type { RequestHandler } from './$types';

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export const GET: RequestHandler = async ({ url }) => {
  const title = url.searchParams.get('title') || 'Mi Proyecto';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)" rx="24" />
  <rect x="80" y="80" width="1040" height="470" rx="20" fill="rgba(255,255,255,0.08)" />
  <text x="120" y="280" font-family="Inter,sans-serif" font-size="64" font-weight="800" fill="#fff" letter-spacing="-0.02em">${escapeXml(title)}</text>
  <circle cx="1000" cy="160" r="120" fill="rgba(255,255,255,0.06)" />
  <circle cx="1080" cy="480" r="80" fill="rgba(255,255,255,0.04)" />
  <text x="120" y="400" font-family="Inter,sans-serif" font-size="24" fill="rgba(255,255,255,0.6)">miweb.com</text>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'max-age=0, s-maxage=86400'
    }
  });
};
