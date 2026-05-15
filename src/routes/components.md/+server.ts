import { serveMarkdownTwin } from '$lib/aeo/serve-twin';

export const GET = (event) => serveMarkdownTwin(event, '/components.md');
