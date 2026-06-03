import type { RequestHandler } from './$types';

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export const GET: RequestHandler = async ({ url }) => {
  const title = url.searchParams.get('title') || 'My SvelteKit Starter';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#09090b;stop-opacity:1" />
      <stop offset="58%" style="stop-color:#20156f;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3525cd;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="panel" x1="80" y1="80" x2="1120" y2="550" gradientUnits="userSpaceOnUse">
      <stop stop-color="rgba(255,255,255,0.18)" />
      <stop offset="1" stop-color="rgba(255,255,255,0.06)" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)" />
  <rect x="58" y="58" width="1084" height="514" rx="34" fill="url(#panel)" stroke="rgba(255,255,255,0.22)" />
  <g transform="translate(916 124) scale(.56)">
    <path d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244" fill="#3525cd" />
    <path d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398" fill="#fff" />
  </g>
  <text x="104" y="142" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="700" fill="#a5f3fc">Svelte 5 · SvelteKit 2 · pnpm</text>
  <text x="104" y="286" font-family="Inter, Arial, sans-serif" font-size="68" font-weight="850" fill="#fff" letter-spacing="-0.02em">${escapeXml(title)}</text>
  <text x="108" y="364" font-family="Inter, Arial, sans-serif" font-size="31" font-weight="500" fill="rgba(255,255,255,0.78)">Production-ready starter with TypeScript, Tailwind CSS v4, shadcn-svelte, SEO and AEO.</text>
  <text x="108" y="506" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="700" fill="#fff">my-sveltekit-starter.vercel.app</text>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'max-age=0, s-maxage=86400'
    }
  });
};
