import { describe, expect, it } from 'vitest';
import { applySecurityHeaders } from './security-headers';

describe('security headers', () => {
  it('aplica aislamiento cross-origin sin romper embeds credenciales', () => {
    const headers = new Headers();

    applySecurityHeaders(headers, { building: false, dev: false, pathname: '/' });

    expect(headers.get('Cross-Origin-Opener-Policy')).toBe('same-origin');
    expect(headers.get('Cross-Origin-Embedder-Policy')).toBe('credentialless');
    expect(headers.get('Cross-Origin-Resource-Policy')).toBe('same-origin');
  });

  it('no aplica cabeceras runtime durante build', () => {
    const headers = new Headers();

    applySecurityHeaders(headers, { building: true, dev: false, pathname: '/' });

    expect(headers.has('Content-Security-Policy')).toBe(false);
    expect(headers.has('Cross-Origin-Embedder-Policy')).toBe(false);
  });
});
