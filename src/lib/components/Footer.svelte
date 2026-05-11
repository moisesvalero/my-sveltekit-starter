<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { t } from '$lib/i18n/index.js';
  import { siteConfig } from '$lib/site-config';
  
  let time = $state('');
  let interval: ReturnType<typeof setInterval> | undefined;
  
  function updateTime() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    time = `${h}:${m}`;
  }
  
  onMount(() => {
    updateTime();
    interval = setInterval(updateTime, 1000);
  });
  
  onDestroy(() => {
    if (interval) clearInterval(interval);
  });
</script>

<footer class="footer">
  <div class="footer-inner">
    <div class="footer-left">
      <div class="footer-logo">{siteConfig.name[0]}</div>
      <div class="footer-brand">
        <span class="footer-name">{siteConfig.name}</span>
        <span class="footer-tagline">{$t('footer.tagline')}</span>
      </div>
    </div>

    <div class="footer-center">
      <div class="footer-clock">
        <div class="clock-dot"></div>
        <span class="clock-text">{siteConfig.footer.location} &nbsp;—&nbsp; {time}</span>
      </div>
      <span class="footer-copy">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
    </div>

    <div class="footer-right">
      <div class="footer-socials">
        <a 
          href={siteConfig.social.github} 
          target="_blank" 
          rel="noopener noreferrer"
          class="social-btn" 
          aria-label="GitHub"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        </a>
        <a 
          href={siteConfig.social.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          class="social-btn" 
          aria-label="LinkedIn"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </div>
      <div class="footer-divider"></div>
      <button 
        class="footer-scroll" 
        onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>
      <div class="footer-divider"></div>
      <span class="footer-credit">{$t('footer.designedBy')} <a href={siteConfig.author.url} target="_blank" rel="noopener noreferrer">{siteConfig.author.name}</a></span>
    </div>
  </div>
</footer>

<style>
.footer {
  background: #0a0a0b;
  padding: 40px 48px;
  font-family: -apple-system, sans-serif;
  border-top: 1px solid transparent;
  background-image:
    linear-gradient(
      to right,
      rgba(148, 163, 184, 0.25),
      rgba(37, 99, 235, 0.6),
      rgba(148, 163, 184, 0.25)
    ),
    linear-gradient(#0a0a0b, #0a0a0b);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
.footer-inner { max-width:1200px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:24px; }
.footer-left { display:flex; align-items:center; gap:10px; }
.footer-logo { width:32px; height:32px; border-radius:8px; background:#3b82f6; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:800; color:#fff; letter-spacing:-0.5px; flex-shrink:0; }
.footer-brand { display:flex; flex-direction:column; gap:2px; }
.footer-name { font-size:14px; font-weight:700; color:#fff; }
.footer-tagline { font-size:11px; color:rgba(255,255,255,0.4); }
.footer-center { display:flex; flex-direction:column; align-items:center; gap:8px; }
.footer-clock { display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.08); border-radius:999px; padding:6px 16px; font-size:12px; font-weight:600; color:rgba(255,255,255,0.7); letter-spacing:0.05em; }
.clock-dot { width:6px; height:6px; border-radius:50%; background:#34c759; animation:clockPulse 2s ease-in-out infinite; flex-shrink:0; }
@keyframes clockPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
.footer-copy { font-size:11px; color:rgba(255,255,255,0.25); }
.footer-right { display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
.footer-socials { display:flex; gap:8px; }
.social-btn { width:34px; height:34px; border-radius:10px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1); text-decoration:none; }
.social-btn:hover { background:rgba(124,92,191,0.2); border-color:rgba(124,92,191,0.4); transform:translateY(-2px) scale(1.1); }
.footer-divider { width:1px; height:20px; background:rgba(255,255,255,0.1); }
.footer-scroll { width:34px; height:34px; border-radius:10px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1); }
.footer-scroll:hover { background:rgba(124,92,191,0.2); border-color:rgba(124,92,191,0.4); transform:translateY(-2px) scale(1.1); }
.footer-credit { font-size:12px; color:rgba(255,255,255,0.35); white-space:nowrap; }
.footer-credit a { color:rgba(255,255,255,0.6); text-decoration:none; font-weight:600; transition:color 0.3s; }
.footer-credit a:hover { color:#60a5fa; }

@media (max-width: 768px) {
  .footer { padding:32px 24px; }
  .footer-inner { flex-direction:column; align-items:center; text-align:center; }
  .footer-right { justify-content:center; }
  .footer-divider { display:none; }
  .footer-credit { display:block; }
}
</style>
