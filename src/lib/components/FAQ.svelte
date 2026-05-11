<script lang="ts">
  import { reveal } from '$lib/reveal';
  import { t } from '$lib/i18n/index.js';

  const { faqs, toggleFaq } = $props<{
    faqs?: { question: string; answer: string; open: boolean }[];
    toggleFaq?: (index: number) => void;
  }>();
</script>

<section class="cta-section">
  <div class="cta-orb1"></div>
  <div class="cta-orb2"></div>
  <div class="cta-grid"></div>
  <div class="cta-inner" use:reveal={{ stage: 'content', delay: 60 }}>
    <div class="cta-eyebrow cta-assemble" use:reveal={{ stage: 'content', delay: 110 }}>
      <div class="cta-dot"></div>
      {$t('faqCta.eyebrow')}
    </div>
    <h2 class="cta-title cta-assemble" use:reveal={{ stage: 'content', delay: 170 }}>{$t('faqCta.titleLine1')}<br><span class="cta-gradient">{$t('faqCta.titleLine2')}</span></h2>
    <p class="cta-subtitle cta-assemble" use:reveal={{ stage: 'content', delay: 230 }}>{$t('faqCta.subtitle')}</p>
    <div class="cta-buttons cta-assemble" use:reveal={{ stage: 'content', delay: 290 }}>
      <a class="btn-primary" href="#pricing">{$t('faqCta.primary')}</a>
      <a class="btn-secondary" href="#components">{$t('faqCta.secondary')}</a>
    </div>
    <div class="cta-social-proof cta-assemble" use:reveal={{ stage: 'content', delay: 350 }}>
      <div class="cta-avatars">
        <div class="cta-av" style="background:linear-gradient(135deg,#3b82f6,#60a5fa);"></div>
        <div class="cta-av" style="background:linear-gradient(135deg,#2563eb,#60a5fa);"></div>
        <div class="cta-av" style="background:linear-gradient(135deg,#34c759,#86efac);"></div>
        <div class="cta-av" style="background:linear-gradient(135deg,#f97316,#fbbf24);"></div>
      </div>
      <span class="cta-proof-text">{@html $t('faqCta.proof')}</span>
      <div class="cta-divider"></div>
      <div class="cta-stars">
        <div class="cta-star"></div>
        <div class="cta-star"></div>
        <div class="cta-star"></div>
        <div class="cta-star"></div>
        <div class="cta-star"></div>
      </div>
      <span class="cta-proof-text">{@html $t('faqCta.rating')}</span>
    </div>
  </div>
</section>

<style>
.cta-section { position:relative; overflow:hidden; padding:120px 2rem; background:linear-gradient(160deg,#fafafa 0%,#f0ebff 40%,#e8f0ff 70%,#f5f0ff 100%); text-align:center; }
.cta-orb1 { position:absolute; top:-60px; left:-60px; width:280px; height:280px; border-radius:50%; background:radial-gradient(circle,rgba(139,92,246,0.12) 0%,transparent 70%); filter:blur(40px); pointer-events:none; animation:orb-float-a 14s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; }
.cta-orb2 { position:absolute; bottom:-80px; right:-40px; width:320px; height:320px; border-radius:50%; background:radial-gradient(circle,rgba(99,130,246,0.1) 0%,transparent 70%); filter:blur(50px); pointer-events:none; animation:orb-float-b 16s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; }
.cta-grid { position:absolute; inset:0; background-image:linear-gradient(rgba(120,80,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(120,80,255,0.04) 1px,transparent 1px); background-size:50px 50px; pointer-events:none; }
.cta-inner { position:relative; z-index:2; max-width:680px; margin:0 auto; }
.cta-assemble { opacity:0; transform:translate3d(0,22px,0) scale(0.97); filter:blur(6px); transition:opacity 0.75s cubic-bezier(0.34, 1.56, 0.64, 1),transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),filter 0.75s cubic-bezier(0.34, 1.56, 0.64, 1); }
.cta-assemble:global(.is-visible) { opacity:1; transform:translate3d(0,0,0) scale(1); filter:blur(0); }
.cta-eyebrow { display:inline-flex; align-items:center; gap:8px; background:rgba(124,92,191,0.08); border:1px solid rgba(124,92,191,0.15); border-radius:999px; padding:6px 16px; font-size:11px; font-weight:600; color:#3b82f6; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:28px; }
.cta-dot { width:6px; height:6px; border-radius:50%; background:#3b82f6; animation:ctapulse 2s infinite; }
@keyframes ctapulse { 0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(0.8)} }
@keyframes orb-float-a { 0%,100% { transform:translate3d(0,0,0) scale(1); } 50% { transform:translate3d(18px,-14px,0) scale(1.08); } }
@keyframes orb-float-b { 0%,100% { transform:translate3d(0,0,0) scale(1); } 50% { transform:translate3d(-22px,12px,0) scale(1.06); } }
.cta-title { font-size:clamp(36px,5vw,58px); font-weight:800; color:#1a1a2e; line-height:1.1; margin-bottom:20px; letter-spacing:-0.02em; }
.cta-gradient { background:linear-gradient(135deg,#3b82f6,#0ea5e9); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.cta-subtitle { font-size:18px; color:#6b6b80; line-height:1.6; margin-bottom:44px; max-width:480px; margin-left:auto; margin-right:auto; }
.cta-buttons { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; margin-bottom:0; }
.btn-primary { background: var(--accent); color: white; padding: 1rem 2rem; border-radius: 12px; text-decoration: none; font-weight: 600; transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); border: none; cursor: pointer; display: inline-block; }
.btn-primary:hover { background: var(--accent-hover); transform: translateY(-2px); }
.btn-secondary { padding: 1rem 2rem; border-radius: 12px; text-decoration: none; font-weight: 600; color: var(--text-main); background: var(--bg-soft); transition: background 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); display: inline-block; }
.btn-secondary:hover { background: #f0f1f3; }
.cta-social-proof { margin-top:48px; display:flex; align-items:center; justify-content:center; gap:16px; flex-wrap:wrap; }
.cta-avatars { display:flex; }
.cta-av { width:28px; height:28px; border-radius:50%; border:2px solid #fff; margin-left:-8px; box-shadow:0 1px 4px rgba(0,0,0,0.1); }
.cta-av:first-child { margin-left:0; }
.cta-proof-text { font-size:13px; color:#8e8e93; }
.cta-proof-text strong { color:#1a1a2e; font-weight:600; }
.cta-divider { width:1px; height:20px; background:rgba(0,0,0,0.1); }
.cta-stars { display:flex; gap:2px; }
.cta-star { width:12px; height:12px; background:#fbbf24; clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%); }
</style>

