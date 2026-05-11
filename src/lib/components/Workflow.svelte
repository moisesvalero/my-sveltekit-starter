<script>
  import { t } from '$lib/i18n/index.js';
  import { onMount } from 'svelte';

  onMount(() => {
    const steps = document.querySelectorAll('.workflow .step');
    const header = document.querySelector('.workflow .workflow-header');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    if (header) observer.observe(header);
    steps.forEach((step, i) => {
      const stepEl = /** @type {HTMLElement} */ (step);
      stepEl.style.transitionDelay = `${0.15 + i * 0.15}s`;
      observer.observe(stepEl);
    });
  });
</script>

<section class="workflow">
  <div class="workflow-header">
    <p class="workflow-eyebrow">{$t('workflow.eyebrow')}</p>
    <h2 class="workflow-title">{@html $t('workflow.title')}</h2>
    <p class="workflow-subtitle">{$t('workflow.subtitle')}</p>
  </div>

  <div class="steps">

    <div class="step">
      <div class="step-visual step1-visual">
        <div class="figma-app">
          <div class="figma-bar">
            <div class="figma-dot" style="background:#ef4444"></div>
            <div class="figma-dot" style="background:#fbbf24"></div>
            <div class="figma-dot" style="background:#34c759"></div>
            <span class="figma-title-bar">design.fig</span>
          </div>
          <div class="figma-body">
            <div class="figma-sidebar">
              <div class="figma-icon active"><svg width="10" height="10" viewBox="0 0 10 10"><rect x="1" y="1" width="3.5" height="3.5" rx="0.8" fill="#fff"/><rect x="5.5" y="1" width="3.5" height="3.5" rx="0.8" fill="#fff"/><rect x="1" y="5.5" width="3.5" height="3.5" rx="0.8" fill="#fff"/><rect x="5.5" y="5.5" width="3.5" height="3.5" rx="0.8" fill="#fff"/></svg></div>
              <div class="figma-icon"><svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="none" stroke="rgba(0,0,0,0.25)" stroke-width="1.2"/></svg></div>
              <div class="figma-icon"><svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 5h8M5 1v8" stroke="rgba(0,0,0,0.25)" stroke-width="1.2" stroke-linecap="round"/></svg></div>
            </div>
            <div class="figma-canvas">
              <div class="figma-selection"></div>
              <div class="figma-comp"></div>
              <div class="figma-comp"></div>
              <div class="figma-comp"></div>
              <div class="figma-comp"></div>
              <div class="figma-cursor">
                <svg viewBox="0 0 16 16" fill="none"><path d="M2 2l5 12 2-4 4-2-11-6z" fill="#3b82f6"/></svg>
              </div>
            </div>
            <div class="figma-panel">
              <div class="figma-prop"></div>
              <div class="figma-prop"></div>
              <div class="figma-prop"></div>
              <div class="figma-prop"></div>
              <div class="figma-prop"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="step-content">
        <div class="step-num">{$t('workflow.step1_num')}</div>
        <div class="step-title">{$t('workflow.step1_title')}</div>
        <div class="step-desc">{$t('workflow.step1_desc')}</div>
      </div>
    </div>

    <div class="step">
      <div class="step-visual step2-visual">
        <div class="vscode">
          <div class="vscode-titlebar">
            <div class="vscode-dot" style="background:#ef4444"></div>
            <div class="vscode-dot" style="background:#fbbf24"></div>
            <div class="vscode-dot" style="background:#34c759"></div>
            <div class="vscode-tab">Component.svelte</div>
          </div>
          <div class="vscode-body">
            <div class="vscode-sidebar">
              <div class="vscode-file active"></div>
              <div class="vscode-file"></div>
              <div class="vscode-file"></div>
              <div class="vscode-file"></div>
              <div class="vscode-file"></div>
            </div>
            <div class="vscode-editor">
              <div class="code-ln"></div>
              <div class="code-ln"></div>
              <div class="code-ln"></div>
              <div class="code-ln"></div>
              <div class="code-ln"></div>
              <div class="code-ln"></div>
              <div class="code-ln"></div>
              <div class="code-cur"></div>
            </div>
          </div>
          <div class="vscode-terminal">
            <div class="term-line">$ npm run dev — ready ✓</div>
          </div>
        </div>
      </div>
      <div class="step-content">
        <div class="step-num">{$t('workflow.step2_num')}</div>
        <div class="step-title">{$t('workflow.step2_title')}</div>
        <div class="step-desc">{$t('workflow.step2_desc')}</div>
      </div>
    </div>

    <div class="step">
      <div class="step-visual step3-visual">
        <div style="position:relative;">
          <div class="deploy-ring-wrap">
            <div class="deploy-ring"></div>
            <div class="deploy-ring"></div>
            <div class="deploy-ring"></div>
          </div>
          <div class="iphone">
            <div class="iphone-di"></div>
            <div class="iphone-scr">
              <div class="iph-status">
                <span class="iph-time">9:41</span>
                <svg width="18" height="7" viewBox="0 0 18 7"><rect x="0" y="1.5" width="3" height="4" rx="0.5" fill="#000" opacity="0.4"/><rect x="4" y="1" width="3" height="5" rx="0.5" fill="#000" opacity="0.6"/><rect x="8" y="0.5" width="3" height="6" rx="0.5" fill="#000"/><rect x="13" y="1.5" width="3" height="4" rx="0.5" fill="none" stroke="#000" stroke-width="0.8"/><rect x="13.4" y="2.2" width="1.8" height="2.6" rx="0.3" fill="#34c759"/></svg>
              </div>
              <div class="iph-nav"><div class="iph-nav-title">Svelte Starter</div></div>
              <div class="iph-content">
                <div class="iph-hero"><svg width="10" height="10" viewBox="0 0 10 10"><path d="M1.5 5l2.5 2.5 4.5-4.5" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/></svg></div>
                <div class="iph-cards"><div class="iph-card"></div><div class="iph-card"></div></div>
                <div class="iph-list"><div class="iph-item"></div><div class="iph-item"></div></div>
              </div>
              <div class="iph-tabbar">
                <div class="iph-tab active"></div>
                <div class="iph-tab"></div>
                <div class="iph-tab"></div>
                <div class="iph-tab"></div>
              </div>
            </div>
          </div>
          <div class="deploy-badge">LIVE ✦</div>
        </div>
      </div>
      <div class="step-content">
        <div class="step-num">{$t('workflow.step3_num')}</div>
        <div class="step-title">{$t('workflow.step3_title')}</div>
        <div class="step-desc">{$t('workflow.step3_desc')}</div>
      </div>
    </div>

  </div>

</section>

<style>
.workflow { padding:120px 48px; font-family:-apple-system,sans-serif; background:#fff; }
.workflow-header { text-align:center; margin-bottom:64px; opacity:0; transform:translateY(30px) scale(0.97); transition:opacity 0.6s cubic-bezier(0.34,1.56,0.64,1),transform 0.6s cubic-bezier(0.34,1.56,0.64,1); }
.workflow-header:global(.visible) { opacity:1; transform:translateY(0) scale(1); }
.workflow-eyebrow { font-size:11px; font-weight:600; letter-spacing:0.12em; color:#8e8e93; text-transform:uppercase; margin-bottom:16px; }
.workflow-title { font-size:clamp(32px,4vw,42px); font-weight:800; color:#1a1a2e; line-height:1.15; margin-bottom:16px; letter-spacing:-0.02em; }
.workflow-subtitle { font-size:16px; color:#8e8e93; max-width:500px; margin:0 auto; line-height:1.6; }
.steps { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; max-width:1100px; margin:0 auto; }
.step { border-radius:20px; border:1px solid rgba(0,0,0,0.07); background:#fff; overflow:hidden; box-shadow:0 4px 24px rgba(0,0,0,0.06); opacity:0; transform:translateY(50px) scale(0.93); transition:opacity 0.7s cubic-bezier(0.34,1.56,0.64,1),transform 0.7s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.3s ease; }
.step:global(.visible) { opacity:1; transform:translateY(0) scale(1); }
.step:global(.visible):hover { transform:translateY(-6px) scale(1.02); box-shadow:0 16px 48px rgba(124,92,191,0.12); }
.step-visual { height:200px; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; }
.step1-visual { background:linear-gradient(135deg,#f8f6ff,#ede8ff); }
.step2-visual { background:linear-gradient(135deg,#0f0f1a,#1a1a2e); }
.step3-visual { background:linear-gradient(135deg,#f0fff4,#e6ffed); }
.step-content { padding:22px; }
.step-num { font-size:11px; font-weight:700; color:#3b82f6; letter-spacing:0.1em; margin-bottom:6px; }
.step-title { font-size:17px; font-weight:700; color:#1a1a2e; margin-bottom:6px; }
.step-desc { font-size:13px; color:#8e8e93; line-height:1.5; }
.figma-app { width:150px; background:#fff; border-radius:12px; box-shadow:0 8px 32px rgba(124,92,191,0.2); overflow:hidden; }
.figma-bar { background:#1a1a2e; padding:6px 8px; display:flex; align-items:center; gap:4px; }
.figma-dot { width:5px; height:5px; border-radius:50%; }
.figma-title-bar { font-size:7px; color:rgba(255,255,255,0.5); margin:0 auto; }
.figma-body { display:flex; height:100px; }
.figma-sidebar { width:30px; background:#f8f8fc; border-right:1px solid rgba(0,0,0,0.06); padding:8px 4px; display:flex; flex-direction:column; gap:6px; align-items:center; }
.figma-icon { width:18px; height:18px; border-radius:5px; display:flex; align-items:center; justify-content:center; }
.figma-icon.active { background:#3b82f6; }
.figma-canvas { flex:1; padding:8px; display:flex; flex-direction:column; gap:5px; position:relative; overflow:hidden; }
.figma-selection { position:absolute; top:6px; left:6px; right:6px; height:24px; border:1.5px dashed rgba(124,92,191,0.6); border-radius:3px; animation:selPulse 2s ease-in-out infinite; }
@keyframes selPulse { 0%,100%{opacity:0} 50%{opacity:1} }
.figma-comp { border-radius:4px; animation:compAnim 2s ease-in-out infinite alternate; }
.figma-comp:nth-child(2){height:22px;background:linear-gradient(90deg,#3b82f6,#60a5fa);animation-delay:0s}
.figma-comp:nth-child(3){height:12px;background:#f0e6ff;width:80%;animation-delay:0.3s}
.figma-comp:nth-child(4){height:12px;background:#e8e0ff;width:60%;animation-delay:0.6s}
.figma-comp:nth-child(5){height:14px;background:#3b82f6;width:45%;border-radius:4px;animation-delay:0.9s}
@keyframes compAnim { 0%{opacity:0.6} 100%{opacity:1} }
.figma-cursor { position:absolute; bottom:12px; right:12px; width:12px; height:12px; animation:cursorAnim 3s ease-in-out infinite; }
@keyframes cursorAnim { 0%,100%{transform:translate(0,0)} 33%{transform:translate(-12px,-6px)} 66%{transform:translate(-6px,-18px)} }
.figma-panel { width:34px; background:#f8f8fc; border-left:1px solid rgba(0,0,0,0.06); padding:8px 4px; display:flex; flex-direction:column; gap:5px; }
.figma-prop { height:5px; border-radius:2px; background:#e0d8ff; }
.figma-prop:nth-child(odd){width:80%}
.figma-prop:nth-child(even){width:55%;background:#f0f0f5}
.vscode { width:155px; border-radius:12px; overflow:hidden; box-shadow:0 8px 32px rgba(0,0,0,0.35); }
.vscode-titlebar { background:#1e1e2e; padding:5px 8px; display:flex; align-items:center; gap:4px; }
.vscode-dot { width:5px; height:5px; border-radius:50%; }
.vscode-tab { background:#252537; padding:3px 10px; border-radius:3px 3px 0 0; font-size:7px; color:rgba(255,255,255,0.7); margin-left:4px; }
.vscode-body { display:flex; background:#1e1e2e; height:95px; }
.vscode-sidebar { width:24px; background:#252537; padding:5px 3px; display:flex; flex-direction:column; gap:4px; }
.vscode-file { height:4px; border-radius:1px; background:rgba(255,255,255,0.08); }
.vscode-file.active { background:#3b82f6; width:90%; }
.vscode-editor { flex:1; padding:7px; display:flex; flex-direction:column; gap:4px; }
.code-ln { height:5px; border-radius:2px; animation:codeAnim 0.9s ease-in-out infinite alternate; }
.code-ln:nth-child(1){width:55%;background:#3b82f6;animation-delay:0s}
.code-ln:nth-child(2){width:85%;background:#0ea5e9;animation-delay:0.1s}
.code-ln:nth-child(3){width:40%;background:#34c759;animation-delay:0.2s}
.code-ln:nth-child(4){width:75%;background:#f97316;animation-delay:0.3s}
.code-ln:nth-child(5){width:60%;background:#60a5fa;animation-delay:0.4s}
.code-ln:nth-child(6){width:90%;background:#0ea5e9;animation-delay:0.5s}
.code-ln:nth-child(7){width:45%;background:#3b82f6;animation-delay:0.6s}
@keyframes codeAnim { 0%{opacity:0.25} 100%{opacity:1} }
.code-cur { width:2px; height:8px; background:#fff; display:inline-block; animation:blinkCur 0.7s step-end infinite; margin-top:3px; }
@keyframes blinkCur { 0%,100%{opacity:1} 50%{opacity:0} }
.vscode-terminal { background:#0d0d1a; padding:5px 7px; border-top:1px solid rgba(255,255,255,0.05); }
.term-line { font-size:6.5px; color:#34c759; font-family:monospace; white-space:nowrap; overflow:hidden; animation:termType 3s ease-in-out infinite; width:0; }
@keyframes termType { 0%,10%{width:0} 70%,100%{width:100%} }
.iphone { position:relative; width:75px; height:140px; border-radius:20px; background:linear-gradient(145deg,#4a4a4c,#1c1c1e); box-shadow:inset 0 0 0 0.5px rgba(255,255,255,0.18),inset 0 1px 0 rgba(255,255,255,0.12),0 16px 48px rgba(0,0,0,0.4); padding:9px 7px; }
.iphone::before { content:''; position:absolute; inset:1px; border-radius:19px; background:linear-gradient(145deg,rgba(255,255,255,0.07) 0%,transparent 50%); pointer-events:none; z-index:10; }
.iphone-di { position:absolute; top:6px; left:50%; transform:translateX(-50%); width:26px; height:7px; background:#000; border-radius:3.5px; z-index:20; }
.iphone-scr { width:100%; height:100%; border-radius:13px; overflow:hidden; background:#f2f2f7; }
.iph-status { height:12px; background:#fff; display:flex; align-items:center; justify-content:space-between; padding:0 6px; }
.iph-time { font-size:5px; font-weight:700; color:#000; }
.iph-nav { background:#fff; padding:4px 6px; border-bottom:0.5px solid rgba(0,0,0,0.08); }
.iph-nav-title { font-size:6px; font-weight:700; color:#000; }
.iph-content { padding:4px; display:flex; flex-direction:column; gap:3px; }
.iph-hero { height:24px; border-radius:5px; background:linear-gradient(135deg,#3b82f6,#60a5fa); display:flex; align-items:center; justify-content:center; animation:iphHero 2s ease-in-out infinite; }
@keyframes iphHero { 0%,100%{opacity:0.8} 50%{opacity:1} }
.iph-cards { display:flex; gap:3px; }
.iph-card { flex:1; height:22px; border-radius:4px; background:#fff; box-shadow:0 1px 4px rgba(0,0,0,0.06); animation:iphCard 2s ease-in-out infinite; }
.iph-card:nth-child(2){animation-delay:0.3s;background:#f0e6ff}
@keyframes iphCard { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-2px)} }
.iph-list { display:flex; flex-direction:column; gap:2px; }
.iph-item { height:11px; border-radius:3px; background:#fff; box-shadow:0 1px 3px rgba(0,0,0,0.05); animation:iphItem 2s ease-in-out infinite; }
.iph-item:nth-child(1){animation-delay:0.2s}
.iph-item:nth-child(2){animation-delay:0.4s}
@keyframes iphItem { 0%{opacity:0.5;transform:translateX(-3px)} 30%,100%{opacity:1;transform:translateX(0)} }
.iph-tabbar { position:absolute; bottom:9px; left:7px; right:7px; height:16px; background:rgba(255,255,255,0.95); border-radius:7px; display:flex; align-items:center; justify-content:space-around; }
.iph-tab { width:5px; height:5px; border-radius:50%; background:#e0e0e0; }
.iph-tab.active { background:#3b82f6; animation:tabPulse 1.5s ease-in-out infinite; }
@keyframes tabPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.4)} }
.deploy-ring-wrap { position:absolute; inset:-16px; pointer-events:none; }
.deploy-ring { position:absolute; inset:0; border:1.5px solid rgba(52,199,89,0.25); border-radius:50%; animation:ringExp 2.5s ease-out infinite; }
.deploy-ring:nth-child(2){animation-delay:0.8s}
.deploy-ring:nth-child(3){animation-delay:1.6s}
@keyframes ringExp { 0%{transform:scale(0.7);opacity:0.8} 100%{transform:scale(1.5);opacity:0} }
.deploy-badge { position:absolute; top:-8px; right:-8px; background:#34c759; color:#fff; font-size:6px; font-weight:800; padding:3px 7px; border-radius:999px; border:2px solid #f0fff4; animation:badgePop 1.5s ease-in-out infinite; white-space:nowrap; z-index:20; }
@keyframes badgePop { 0%,100%{transform:scale(1)} 50%{transform:scale(1.12)} }
.flow-wrap {
  max-width: 1100px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
}
.flow-svg {
  width: 100%;
  height: 80px;
}
.fp1 { fill:none; stroke:url(#fg1); stroke-width:2; stroke-linecap:round; stroke-dasharray:500; stroke-dashoffset:500; animation:drawPath 1.8s ease forwards 0.6s; }
.fp2 { fill:none; stroke:url(#fg2); stroke-width:2; stroke-linecap:round; stroke-dasharray:500; stroke-dashoffset:500; animation:drawPath 1.8s ease forwards 1.1s; }
@keyframes drawPath { to{stroke-dashoffset:0} }
.flow-mobile { display:none; flex-direction:column; max-width:340px; margin:0 auto; padding-top:40px; }
.mob-step { display:flex; align-items:flex-start; gap:16px; width:100%; }
.mob-connector { display:flex; flex-direction:column; align-items:center; width:28px; flex-shrink:0; padding-top:4px; }
.mob-node { width:12px; height:12px; border-radius:50%; flex-shrink:0; }
.mob-line { width:2px; min-height:60px; position:relative; overflow:hidden; margin:4px 0; }
.mob-arrow { width:0; height:0; border-left:5px solid transparent; border-right:5px solid transparent; }
.mob-content { flex:1; padding-bottom:24px; }
.mob-num { font-size:11px; font-weight:700; color:#3b82f6; letter-spacing:0.08em; margin-bottom:4px; }
.mob-title { font-size:16px; font-weight:700; color:#1a1a2e; margin-bottom:4px; }
.mob-desc { font-size:13px; color:#8e8e93; line-height:1.5; }

@media (max-width:768px) {
  .workflow { padding:80px 24px; }
  .steps { 
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }
  .step { display:block; }
}
</style>

