type RevealStage = 'title' | 'content';

type RevealOptions = {
  delay?: number;
  distance?: number;
  stage?: RevealStage;
  threshold?: number;
  rootMargin?: string;
};

const STAGE_DELAY: Record<RevealStage, number> = {
  title: 0,
  content: 120
};

function normalizeOptions(value: RevealOptions | undefined) {
  return {
    delay: value?.delay,
    distance: value?.distance ?? 40,
    stage: value?.stage ?? 'content',
    threshold: value?.threshold ?? 0.24,
    rootMargin: value?.rootMargin ?? '0px 0px -8% 0px'
  };
}

function applyAssemblyVars(node: HTMLElement, options: ReturnType<typeof normalizeOptions>) {
  const totalDelay = options.delay ?? STAGE_DELAY[options.stage];
  node.classList.remove('assembly-title', 'assembly-content');
  node.classList.add('assembly-item', `assembly-${options.stage}`);
  node.style.setProperty('--assembly-delay', `${totalDelay}ms`);
  node.style.setProperty('--assembly-distance', `${options.distance}px`);
}

/**
 * Svelte action para reveal global con efecto de ensamblaje magnético.
 * Añade clases + variables CSS, y dispara la visibilidad al entrar en viewport.
 */
export function reveal(node: HTMLElement, options?: RevealOptions) {
  let config = normalizeOptions(options);
  applyAssemblyVars(node, config);
  let rafA = 0;
  let rafB = 0;

  const revealWithFrameGap = () => {
    rafA = requestAnimationFrame(() => {
      rafB = requestAnimationFrame(() => {
        node.classList.add('is-visible');
      });
    });
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      revealWithFrameGap();
      observer.unobserve(node);
    },
    {
      threshold: config.threshold,
      rootMargin: config.rootMargin
    }
  );

  observer.observe(node);

  return {
    update(nextOptions?: RevealOptions) {
      config = normalizeOptions(nextOptions);
      applyAssemblyVars(node, config);
    },
    destroy() {
      cancelAnimationFrame(rafA);
      cancelAnimationFrame(rafB);
      observer.disconnect();
    }
  };
}
