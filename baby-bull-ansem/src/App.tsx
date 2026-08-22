import { type FormEvent, type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, CircleDot, ExternalLink, Menu, Orbit, Plus, ScanLine, Send, ShieldCheck, Sparkles, Star, X } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import heroBull from '@assets/HQD0Ey2aQAAK7dk_1787256774591.jfif';
import sketchBull from '@assets/HQI2eJUaUAAIVA5_1787256774591.jfif';
import neonBull from '@assets/IJOzJGXH_400x400_1787256774592.jpg';

const queryClient = new QueryClient();

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Baby Bull Ansem NFT | 3333 Hand-Drawn by AMG Studio';
    const description = 'Baby Bull Ansem is a community-first Solana collection: 3,333 hand-drawn Baby Bulls by AMG Studio.';
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', description);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleWaitlist = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <div className="site-shell min-h-[100dvh] bg-[hsl(var(--background))]">
      <header className="absolute left-0 right-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <button type="button" onClick={() => scrollTo('top')} className="group flex items-center gap-3" data-testid="button-logo">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--foreground))] bg-[hsl(var(--accent))] font-display text-xl font-extrabold shadow-[3px_3px_0_hsl(var(--foreground))]">B</span>
            <span className="text-left">
              <span className="block font-display text-[15px] font-extrabold leading-none tracking-[-.04em]">BABY BULL</span>
              <span className="font-mono-custom text-[9px] uppercase tracking-[.22em] text-[hsl(var(--muted-foreground))]">ANSEM / 3333</span>
            </span>
          </button>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <button type="button" onClick={() => scrollTo('collection')} className="font-mono-custom text-[11px] uppercase tracking-[.15em] transition-colors hover:text-[hsl(var(--accent))]" data-testid="button-nav-collection">The collection</button>
            <button type="button" onClick={() => scrollTo('utility')} className="font-mono-custom text-[11px] uppercase tracking-[.15em] transition-colors hover:text-[hsl(var(--accent))]" data-testid="button-nav-utility">Why it matters</button>
            <button type="button" onClick={() => scrollTo('roadmap')} className="font-mono-custom text-[11px] uppercase tracking-[.15em] transition-colors hover:text-[hsl(var(--accent))]" data-testid="button-nav-roadmap">Roadmap</button>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href="https://x.com/BabyAnsem_NFT" target="_blank" rel="noreferrer" className="flex h-10 items-center gap-2 rounded-full border border-[hsl(var(--foreground))] px-4 font-mono-custom text-[11px] uppercase tracking-[.12em] transition-all hover:-translate-y-0.5 hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))]" data-testid="link-follow-header">Follow on X <ArrowUpRight size={14} /></a>
            <button type="button" onClick={() => scrollTo('waitlist')} className="flex h-10 items-center gap-2 rounded-full bg-[hsl(var(--secondary))] px-5 font-mono-custom text-[11px] font-medium uppercase tracking-[.12em] text-[hsl(var(--foreground))] transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_hsl(var(--foreground))]" data-testid="button-wl-header">Get WL <ArrowRight size={14} /></button>
          </div>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--foreground))] md:hidden" aria-label="Toggle menu" data-testid="button-mobile-menu">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mx-5 rounded-2xl border border-[hsl(var(--foreground))] bg-[hsl(var(--card))] p-5 shadow-[5px_5px_0_hsl(var(--foreground))] md:hidden">
            <div className="grid gap-4">
              <button type="button" onClick={() => scrollTo('collection')} className="text-left font-mono-custom text-xs uppercase tracking-[.15em]" data-testid="button-mobile-collection">The collection</button>
              <button type="button" onClick={() => scrollTo('utility')} className="text-left font-mono-custom text-xs uppercase tracking-[.15em]" data-testid="button-mobile-utility">Why it matters</button>
              <button type="button" onClick={() => scrollTo('roadmap')} className="text-left font-mono-custom text-xs uppercase tracking-[.15em]" data-testid="button-mobile-roadmap">Roadmap</button>
              <button type="button" onClick={() => scrollTo('waitlist')} className="mt-2 flex h-11 items-center justify-center gap-2 rounded-full bg-[hsl(var(--accent))] font-mono-custom text-xs uppercase tracking-[.15em]" data-testid="button-mobile-wl">Get WL <ArrowRight size={15} /></button>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero-grid relative min-h-[760px] overflow-hidden border-b border-[hsl(var(--foreground))] px-5 pb-16 pt-32 sm:px-8 lg:min-h-[850px] lg:px-12 lg:pt-44">
          <div className="pointer-events-none absolute -right-16 top-24 h-80 w-80 rounded-full bg-[hsl(var(--accent)/.35)] blur-3xl lg:right-[12%] lg:top-36" />
          <div className="pointer-events-none absolute bottom-10 left-[-100px] h-72 w-72 rounded-full bg-[hsl(var(--secondary)/.18)] blur-3xl" />
          <div className="relative z-10 mx-auto grid max-w-[1360px] items-center gap-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-5">
            <div className="max-w-[720px]">
              <div className="reveal mb-8 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--secondary))] shadow-[0_0_0_5px_hsl(var(--secondary)/.17)]" />
                <span className="font-mono-custom text-[10px] uppercase tracking-[.23em] text-[hsl(var(--muted-foreground))]">Solana / Community-first / Live soon</span>
              </div>
              <h1 className="reveal delay-1 font-display display-tight text-[clamp(4.3rem,12vw,10rem)] font-extrabold uppercase">
                Baby<br /><span className="text-[hsl(var(--accent))] [text-shadow:3px_3px_0_hsl(var(--foreground))]">Bull</span><br />Ansem
              </h1>
              <div className="reveal delay-2 mt-9 flex max-w-[510px] items-start gap-5">
                <div className="mt-1 h-12 w-[3px] shrink-0 bg-[hsl(var(--secondary))]" />
                <p className="text-lg leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-xl">A collectible world with a point of view. <strong className="font-semibold text-[hsl(var(--foreground))]">3,333 unique hand-drawn Baby Bulls</strong>, drawn by <a className="link-underline" href="https://x.com/AMG_studio11" target="_blank" rel="noreferrer" data-testid="link-artist-hero">@AMG_studio11</a>.</p>
              </div>
              <div className="reveal delay-3 mt-9 flex flex-wrap items-center gap-4">
                <button type="button" onClick={() => scrollTo('waitlist')} className="group flex h-14 items-center gap-4 rounded-full bg-[hsl(var(--foreground))] px-7 font-mono-custom text-xs uppercase tracking-[.14em] text-[hsl(var(--background))] transition-all hover:-translate-y-1 hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--foreground))] hover:shadow-[5px_5px_0_hsl(var(--foreground))]" data-testid="button-wl-hero">Get WL <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] transition-transform group-hover:rotate-45"><ArrowUpRight size={15} /></span></button>
                <a href="https://x.com/BabyAnsem_NFT" target="_blank" rel="noreferrer" className="flex h-14 items-center gap-2 rounded-full border-2 border-[hsl(var(--foreground))] px-6 font-mono-custom text-xs uppercase tracking-[.14em] transition-all hover:-translate-y-1 hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))]" data-testid="link-follow-hero">Follow on X <ExternalLink size={14} /></a>
              </div>
              <div className="mt-14 flex items-center gap-8 font-mono-custom text-[10px] uppercase tracking-[.15em] text-[hsl(var(--muted-foreground))]">
                <span className="flex items-center gap-2"><CircleDot size={13} className="text-[hsl(var(--secondary))]" /> First mint free</span>
                <span className="flex items-center gap-2"><CircleDot size={13} className="text-[hsl(var(--accent))]" /> Mint not started</span>
              </div>
            </div>
            <div className="reveal delay-2 relative mx-auto w-full max-w-[560px] lg:ml-auto">
              <div className="float-art relative aspect-[.84] rotate-2 rounded-[2.2rem] border-2 border-[hsl(var(--foreground))] bg-[hsl(var(--accent))] p-3 shadow-[12px_12px_0_hsl(var(--foreground))]">
                <div className="relative h-full overflow-hidden rounded-[1.6rem] border-2 border-[hsl(var(--foreground))] bg-[#d9d2ba]">
                  <img src={heroBull} alt="Hand-drawn Baby Bull artwork" className="h-full w-full object-cover mix-blend-multiply" data-testid="img-hero-bull" />
                  <div className="scan-line pointer-events-none absolute left-4 right-4 top-20 h-px bg-[hsl(var(--secondary))] shadow-[0_0_12px_hsl(var(--secondary))]" />
                  <div className="absolute bottom-4 left-4 rounded-full border border-[hsl(var(--foreground))] bg-[hsl(var(--background)/.83)] px-3 py-1.5 font-mono-custom text-[9px] uppercase tracking-[.15em] backdrop-blur-sm">BBA / specimen 0001</div>
                </div>
                <div className="absolute -left-8 top-10 flex h-20 w-20 -rotate-12 items-center justify-center rounded-full border-2 border-[hsl(var(--foreground))] bg-[hsl(var(--secondary))] text-center font-display text-[13px] font-extrabold uppercase leading-[.9] shadow-[4px_4px_0_hsl(var(--foreground))]">Mint<br />soon</div>
                <div className="absolute -bottom-5 -right-4 rotate-6 rounded-xl border-2 border-[hsl(var(--foreground))] bg-[hsl(var(--card))] px-4 py-3 shadow-[4px_4px_0_hsl(var(--foreground))]"><p className="font-mono-custom text-[9px] uppercase tracking-[.1em]">Hand-drawn</p><p className="font-display text-xl font-extrabold">3333</p></div>
              </div>
              <div className="absolute -bottom-10 -left-4 hidden w-44 -rotate-6 border border-[hsl(var(--foreground))] bg-[hsl(var(--foreground))] p-2 sm:block"><img src={neonBull} alt="Neon Baby Bull study" className="aspect-square w-full object-cover opacity-90" data-testid="img-neon-study" /></div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono-custom text-[9px] uppercase tracking-[.2em] text-[hsl(var(--muted-foreground))] sm:flex"><ChevronDown size={14} /> Scroll to enter the world</div>
        </section>

        <div className="overflow-hidden border-b border-[hsl(var(--foreground))] bg-[hsl(var(--foreground))] py-4 text-[hsl(var(--background))]">
          <div className="marquee-track flex w-max items-center whitespace-nowrap font-display text-lg font-bold uppercase tracking-[.04em]">
            <span className="mx-5 text-[hsl(var(--secondary))]">Baby Bull Ansem</span><span className="mx-5">•</span><span className="mx-5">3,333 hand-drawn originals</span><span className="mx-5 text-[hsl(var(--accent))]">•</span><span className="mx-5">First mint free</span><span className="mx-5">•</span><span className="mx-5 text-[hsl(var(--secondary))]">Solana born</span><span className="mx-5">•</span>
            <span className="mx-5 text-[hsl(var(--secondary))]">Baby Bull Ansem</span><span className="mx-5">•</span><span className="mx-5">3,333 hand-drawn originals</span><span className="mx-5 text-[hsl(var(--accent))]">•</span><span className="mx-5">First mint free</span><span className="mx-5">•</span><span className="mx-5 text-[hsl(var(--secondary))]">Solana born</span><span className="mx-5">•</span>
          </div>
        </div>

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36" id="collection">
          <div className="mx-auto max-w-[1360px]">
            <div className="reveal grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
              <div><p className="mb-4 font-mono-custom text-[10px] uppercase tracking-[.22em] text-[hsl(var(--secondary))]">01 / The collection</p><h2 className="font-display text-5xl font-extrabold uppercase leading-[.94] tracking-[-.055em] sm:text-7xl">Small horns.<br /><span className="text-[hsl(var(--accent))]">Big energy.</span></h2></div>
              <p className="max-w-[580px] text-lg leading-relaxed text-[hsl(var(--muted-foreground))] lg:pb-1">Not mass-produced profile pictures. Each bull starts as a line on paper, then finds its own attitude, outfit, and place in the herd. Collect the one that feels like you.</p>
            </div>
            <div className="reveal delay-1 mt-14 grid gap-5 md:grid-cols-[1.15fr_.85fr]">
              <div className="group relative overflow-hidden rounded-[1.5rem] border-2 border-[hsl(var(--foreground))] bg-[hsl(var(--muted))]">
                <img src={sketchBull} alt="Baby Bull collection artwork" className="h-[410px] w-full object-cover grayscale-[.1] transition-transform duration-700 group-hover:scale-105 sm:h-[540px]" data-testid="img-collection-sketch" />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between"><span className="rounded-full bg-[hsl(var(--secondary))] px-3 py-2 font-mono-custom text-[10px] uppercase tracking-[.15em]">Original study / 01</span><span className="rounded-full border border-[hsl(var(--foreground))] bg-[hsl(var(--background)/.84)] p-3 backdrop-blur-sm"><ArrowUpRight size={18} /></span></div>
              </div>
              <div className="grid gap-5">
                <div className="relative overflow-hidden rounded-[1.5rem] border-2 border-[hsl(var(--foreground))] bg-[hsl(var(--foreground))] p-3"><img src={neonBull} alt="Neon Baby Bull artwork" className="h-[260px] w-full rounded-[1rem] object-cover transition-transform duration-700 hover:scale-105 sm:h-[330px]" data-testid="img-collection-neon" /><span className="absolute left-7 top-7 rounded-full bg-[hsl(var(--accent))] px-3 py-2 font-mono-custom text-[10px] uppercase tracking-[.15em]">After dark / 02</span></div>
                <div className="flex min-h-[150px] items-center justify-between rounded-[1.5rem] border-2 border-[hsl(var(--foreground))] bg-[hsl(var(--secondary))] p-7"><div><p className="font-mono-custom text-[10px] uppercase tracking-[.2em]">The herd</p><p className="mt-3 font-display text-4xl font-extrabold uppercase leading-none tracking-[-.05em]">3,333<br />reasons to stay.</p></div><Star size={54} strokeWidth={1.3} className="shrink-0 opacity-70" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[hsl(var(--foreground))] bg-[hsl(var(--accent))] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div className="reveal"><p className="mb-5 font-mono-custom text-[10px] uppercase tracking-[.22em]">The quick read</p><h2 className="font-display text-5xl font-extrabold uppercase leading-[.9] tracking-[-.06em] sm:text-7xl">No smoke.<br />Just <span className="text-[hsl(var(--secondary))] [text-shadow:2px_2px_0_hsl(var(--foreground))]">signal.</span></h2></div>
            <div className="grid gap-0 border-t-2 border-[hsl(var(--foreground))]">
              <div className="reveal delay-1 grid gap-2 border-b border-[hsl(var(--foreground))] py-6 sm:grid-cols-[110px_1fr]"><span className="font-display text-5xl font-extrabold">01</span><div><h3 className="font-display text-2xl font-bold uppercase">First mint free</h3><p className="mt-2 max-w-[450px] text-[hsl(var(--foreground)/.72)]">No paywall to join the first chapter. Mint details will be shared clearly when the time is right.</p></div></div>
              <div className="reveal delay-2 grid gap-2 border-b border-[hsl(var(--foreground))] py-6 sm:grid-cols-[110px_1fr]"><span className="font-display text-5xl font-extrabold">02</span><div><h3 className="font-display text-2xl font-bold uppercase">Mint not started</h3><p className="mt-2 max-w-[450px] text-[hsl(var(--foreground)/.72)]">The collection is in build mode. Get on the list, follow the signal, and ignore anyone selling a fake clock.</p></div></div>
              <div className="reveal delay-3 grid gap-2 py-6 sm:grid-cols-[110px_1fr]"><span className="font-display text-5xl font-extrabold">03</span><div><h3 className="font-display text-2xl font-bold uppercase">Web2 with receipts</h3><p className="mt-2 max-w-[450px] text-[hsl(var(--foreground)/.72)]">The ecosystem is designed to make useful things, not just talk about them. Revenue returns to the people building it.</p></div></div>
            </div>
          </div>
        </section>

        <section id="utility" className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1360px]">
            <div className="reveal flex flex-col justify-between gap-8 border-b-2 border-[hsl(var(--foreground))] pb-10 md:flex-row md:items-end"><div><p className="mb-4 font-mono-custom text-[10px] uppercase tracking-[.22em] text-[hsl(var(--secondary))]">02 / The conviction</p><h2 className="font-display text-5xl font-extrabold uppercase leading-[.9] tracking-[-.06em] sm:text-8xl">We are not<br />a <span className="text-[hsl(var(--accent))]">jpeg</span><br />project.</h2></div><p className="max-w-[310px] text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">The bull is the membership card. The work happens after.</p></div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <div className="reveal delay-1 relative min-h-[310px] overflow-hidden rounded-[1.5rem] border-2 border-[hsl(var(--foreground))] bg-[hsl(var(--foreground))] p-7 text-[hsl(var(--background))]"><Orbit className="mb-16 text-[hsl(var(--secondary))]" size={35} strokeWidth={1.5} /><p className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--muted-foreground))]">01 / $ANSEM</p><h3 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[.92]">The<br />ecosystem<br />currency.</h3><div className="absolute -bottom-7 -right-3 font-display text-[130px] font-extrabold leading-none text-[hsl(var(--secondary)/.2)]">$</div></div>
              <div className="reveal delay-2 relative min-h-[310px] overflow-hidden rounded-[1.5rem] border-2 border-[hsl(var(--foreground))] bg-[hsl(var(--secondary))] p-7"><ScanLine className="mb-16" size={35} strokeWidth={1.5} /><p className="font-mono-custom text-[10px] uppercase tracking-[.2em]">02 / Ansem ECO</p><h3 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[.92]">Value<br />comes<br />back.</h3><p className="absolute bottom-7 max-w-[220px] text-sm leading-relaxed text-[hsl(var(--foreground)/.7)]">Revenue flows back into the ecosystem that makes the ideas possible.</p></div>
              <div className="reveal delay-3 relative min-h-[310px] overflow-hidden rounded-[1.5rem] border-2 border-[hsl(var(--foreground))] bg-[hsl(var(--muted))] p-7"><Sparkles className="mb-16 text-[hsl(var(--accent))]" size={35} strokeWidth={1.5} /><p className="font-mono-custom text-[10px] uppercase tracking-[.2em]">03 / IRL Teddy Bull</p><h3 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[.92]">A real<br />thing you<br />can hold.</h3><p className="absolute bottom-7 max-w-[220px] text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">Physical product, real-world utility, and a soft spot for the tiny legends.</p></div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="border-y border-[hsl(var(--foreground))] bg-[hsl(var(--secondary))] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1360px]">
            <div className="reveal grid gap-8 lg:grid-cols-[.6fr_1.4fr]"><div><p className="mb-4 font-mono-custom text-[10px] uppercase tracking-[.22em]">03 / The route</p><h2 className="font-display text-5xl font-extrabold uppercase leading-[.9] tracking-[-.06em] sm:text-7xl">Keep your<br /><span className="text-[hsl(var(--accent))]">eyes up.</span></h2></div><p className="max-w-[480px] text-lg leading-relaxed text-[hsl(var(--foreground)/.72)] lg:pt-9">No manufactured countdowns. Just a visible build sequence, shared with the herd as it takes shape.</p></div>
            <div className="reveal delay-1 mt-16 grid gap-0 border-t-2 border-[hsl(var(--foreground))] md:grid-cols-4">
              {[['01', 'Find the herd', 'Join the waitlist, find the real channels, and bring one friend who gets it.'], ['02', 'Drop the art', 'The hand-drawn collection lands when the world is ready. First mint free.'], ['03', 'Build in public', 'Ansem ECO turns attention into products, experiments, and momentum.'], ['04', 'Give it back', 'Revenue feeds the ecosystem. IRL Teddy Bull brings the idea off-screen.']].map(([number, title, text], index) => (
                <div key={number} className={`group border-b border-[hsl(var(--foreground))] py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 ${index === 3 ? 'md:pr-0' : ''}`} data-testid={`roadmap-step-${number}`}>
                  <span className="font-mono-custom text-xs">{number}</span><h3 className="mt-12 font-display text-2xl font-extrabold uppercase leading-none">{title}</h3><p className="mt-4 text-sm leading-relaxed text-[hsl(var(--foreground)/.7)]">{text}</p><ArrowDownRight className="mt-7 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" size={21} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="waitlist" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[460px] w-[460px] rounded-full border-[70px] border-[hsl(var(--accent)/.25)]" />
          <div className="pointer-events-none absolute bottom-[-160px] left-[-100px] h-[400px] w-[400px] rounded-full border-[55px] border-[hsl(var(--secondary)/.2)]" />
          <div className="reveal relative z-10 mx-auto grid max-w-[1100px] items-center gap-12 rounded-[2rem] border-2 border-[hsl(var(--foreground))] bg-[hsl(var(--foreground))] p-7 text-[hsl(var(--background))] shadow-[10px_10px_0_hsl(var(--accent))] sm:p-12 lg:grid-cols-[1fr_.82fr] lg:p-16">
            <div><p className="font-mono-custom text-[10px] uppercase tracking-[.22em] text-[hsl(var(--secondary))]">The signal starts here</p><h2 className="mt-5 font-display text-5xl font-extrabold uppercase leading-[.88] tracking-[-.06em] sm:text-7xl">Pull up<br />a chair,<br /><span className="text-[hsl(var(--accent))]">baby.</span></h2><p className="mt-7 max-w-[430px] text-lg leading-relaxed text-[hsl(var(--background)/.68)]">Drop your email for the real launch signal. No spam, no fake mint links, no noise.</p></div>
            {submitted ? <div className="rounded-[1.4rem] border border-[hsl(var(--secondary)/.6)] bg-[hsl(var(--secondary)/.12)] p-7"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))]"><Check size={24} /></div><h3 className="mt-7 font-display text-3xl font-extrabold uppercase">You are in.</h3><p className="mt-3 leading-relaxed text-[hsl(var(--background)/.7)]">The herd will hear from us at the right moment. Keep your eyes on <a href="https://x.com/BabyAnsem_NFT" target="_blank" rel="noreferrer" className="link-underline" data-testid="link-confirmation-x">@BabyAnsem_NFT</a>.</p></div> : <form onSubmit={handleWaitlist} className="rounded-[1.4rem] border border-[hsl(var(--background)/.25)] bg-[hsl(var(--background)/.06)] p-5 sm:p-7"><label htmlFor="waitlist-email" className="font-mono-custom text-[10px] uppercase tracking-[.18em] text-[hsl(var(--background)/.62)]">Your best email</label><div className="mt-3 flex flex-col gap-3 sm:flex-row"><input id="waitlist-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@somewhere.good" className="h-13 min-w-0 flex-1 rounded-full border border-[hsl(var(--background)/.35)] bg-transparent px-5 font-mono-custom text-sm text-[hsl(var(--background))] outline-none placeholder:text-[hsl(var(--background)/.35)] focus:border-[hsl(var(--secondary))]" data-testid="input-waitlist-email" /><button type="submit" className="flex h-13 items-center justify-center gap-3 rounded-full bg-[hsl(var(--accent))] px-6 font-mono-custom text-xs uppercase tracking-[.14em] text-[hsl(var(--foreground))] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0_hsl(var(--secondary))]" data-testid="button-submit-waitlist">Get WL <Send size={15} /></button></div><p className="mt-5 flex items-center gap-2 font-mono-custom text-[9px] uppercase tracking-[.12em] text-[hsl(var(--background)/.45)]"><ShieldCheck size={13} /> One useful email. That is the deal.</p></form>}
          </div>
        </section>
      </main>

      <footer className="border-t border-[hsl(var(--foreground))] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <div><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[hsl(var(--foreground))] bg-[hsl(var(--accent))] font-display text-lg font-extrabold">B</span><span className="font-display text-xl font-extrabold uppercase">Baby Bull Ansem</span></div><p className="mt-4 font-mono-custom text-[10px] uppercase tracking-[.15em] text-[hsl(var(--muted-foreground))]">Built for the herd / 2025</p></div>
          <div className="flex items-center gap-5"><a href="https://x.com/BabyAnsem_NFT" target="_blank" rel="noreferrer" className="font-mono-custom text-[10px] uppercase tracking-[.16em] link-underline" data-testid="link-footer-x">X / BabyAnsem_NFT</a><a href="https://x.com/AMG_studio11" target="_blank" rel="noreferrer" className="font-mono-custom text-[10px] uppercase tracking-[.16em] link-underline" data-testid="link-footer-artist">Art / AMG_studio11</a><button type="button" onClick={() => scrollTo('top')} className="flex h-9 w-9 items-center justify-center rounded-full border border-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))]" aria-label="Back to top" data-testid="button-back-top"><Plus size={16} className="rotate-45" /></button></div>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
