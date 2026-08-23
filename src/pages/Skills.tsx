import { useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  AppWindow,
  Blocks,
  Bot,
  Code2,
  Database,
  Globe2,
  ServerCog,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';

type SkillGroup = {
  number: string;
  title: string;
  description: string;
  label: string;
  items: string[];
  icon: LucideIcon;
};

type Tilt = {
  x: number;
  y: number;
  lightX: number;
  lightY: number;
};

const skillGroups: SkillGroup[] = [
  {
    number: '01',
    title: 'Fullstack Development',
    description: 'I build complete web applications from interface to backend — handling the parts users see and the systems that make everything work behind the scenes.',
    label: 'What I work with',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'Python', 'Java', 'Go', 'Rust'],
    icon: Code2,
  },
  {
    number: '02',
    title: 'Web Development',
    description: 'I create modern, responsive websites and web experiences for businesses, brands, products, and personal projects — focused on clean design, usability, performance, and actually serving a purpose.',
    label: 'What I can build',
    items: ['Business Websites', 'Landing Pages', 'Portfolios', 'E-commerce', 'Web Platforms', 'Dashboards', 'Custom Web Applications'],
    icon: Globe2,
  },
  {
    number: '03',
    title: 'Backend & Systems',
    description: 'I build the systems behind products — APIs, databases, authentication, business logic, integrations, and services designed to keep applications reliable and scalable.',
    label: 'Technologies',
    items: ['Node.js', 'Python', 'Java', 'Go', 'Rust', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
    icon: ServerCog,
  },
  {
    number: '04',
    title: 'Web3 & Smart Contracts',
    description: 'I build blockchain-based products from the contract layer to the user interface, working with both EVM ecosystems and Solana.',
    label: 'What I work with',
    items: ['Solidity', 'Rust', 'Solana', 'EVM', 'Smart Contracts', 'dApps', 'Wallet Integration', 'On-chain Data', 'Foundry', 'Hardhat', 'Anchor', 'ethers', 'viem', 'wagmi'],
    icon: Blocks,
  },
  {
    number: '05',
    title: 'Bots & Automation',
    description: 'I build bots and automated systems that handle repetitive tasks, connect services, process information, and make workflows more efficient.',
    label: 'What I build',
    items: ['Telegram Bots', 'API Integrations', 'Automated Workflows', 'Data Processing', 'Custom Backend Automation'],
    icon: Bot,
  },
  {
    number: '06',
    title: 'Application Development',
    description: 'I’ve also built applications beyond the traditional website — taking an idea through development into a usable product. I approach applications the same way I approach everything else: understand the problem, design the solution, and build something people can actually use.',
    label: 'Product focus',
    items: ['Problem Discovery', 'Solution Design', 'Usable Products', 'End-to-End Delivery'],
    icon: AppWindow,
  },
  {
    number: '07',
    title: 'Databases & Infrastructure',
    description: 'A good product needs more than a good interface. I work with the infrastructure and data layers required to keep applications running properly.',
    label: 'Technologies',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'REST APIs', 'Authentication', 'Cloud Deployment', 'Git', 'GitHub'],
    icon: Database,
  },
];

const workflow = [
  {
    number: '01',
    title: 'Understand the problem',
    description: 'Before choosing a technology, I figure out what actually needs to be solved.',
  },
  {
    number: '02',
    title: 'Design the solution',
    description: 'I break the problem down and determine the simplest practical way to solve it.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'I choose the right tools and turn the solution into a working product.',
  },
  {
    number: '04',
    title: 'Ship',
    description: 'I care about deployment, reliability, usability, and the experience of the people actually using it.',
  },
];

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const Icon = group.icon;
  const cardRef = useRef<HTMLElement>(null);
  const inView = useInView(cardRef, { once: true, amount: 0.14 });
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState<Tilt>({ x: 0, y: 0, lightX: 50, lightY: 35 });
  const active = hovered && !prefersReducedMotion;

  const resetCard = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0, lightX: 50, lightY: 35 });
  };

  const trackPointer = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse' || prefersReducedMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    setTilt({
      x: (x - 0.5) * 8,
      y: (y - 0.5) * -8,
      lightX: x * 100,
      lightY: y * 100,
    });
  };

  return (
    <div className="relative min-h-[27rem] [perspective:1200px] md:min-h-[30rem]">
      <motion.article
        ref={cardRef}
        initial={{ opacity: 0, y: 34, rotateX: prefersReducedMotion ? 0 : 7 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? (active ? -8 : 0) : 34,
          rotateX: inView ? (active ? tilt.y : 0) : (prefersReducedMotion ? 0 : 7),
          rotateY: active ? tilt.x : 0,
          scale: active ? 1.008 : 1,
        }}
        transition={{
          opacity: { duration: 0.45, delay: index * 0.045 },
          y: { type: 'spring', stiffness: 220, damping: 22, delay: index * 0.045 },
          rotateX: { type: 'spring', stiffness: 170, damping: 18, mass: 0.55 },
          rotateY: { type: 'spring', stiffness: 170, damping: 18, mass: 0.55 },
          scale: { type: 'spring', stiffness: 260, damping: 20 },
        }}
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') setHovered(true);
        }}
        onPointerMove={trackPointer}
        onPointerLeave={resetCard}
        style={{ transformStyle: 'preserve-3d' }}
        className={`group relative flex h-full overflow-hidden border bg-background p-6 shadow-[0_16px_44px_-32px_hsl(var(--foreground)/0.28)] transition-colors duration-300 md:p-8 ${
          active ? 'border-foreground/45' : 'border-border'
        }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(320px circle at ${tilt.lightX}% ${tilt.lightY}%, hsl(var(--foreground) / 0.09), transparent 64%)`,
          }}
        />

        <motion.div
          aria-hidden="true"
          animate={{
            x: active ? tilt.x * -1.8 : 0,
            y: active ? tilt.y * 1.8 : 0,
            rotate: active ? -3 : 0,
            opacity: active ? 0.45 : 0.18,
          }}
          transition={{ type: 'spring', stiffness: 150, damping: 18 }}
          className="pointer-events-none absolute -right-4 -top-7 text-[9rem] font-extralight leading-none tracking-tighter text-muted/80 md:text-[11rem]"
          style={{ transform: 'translateZ(14px)' }}
        >
          {group.number}
        </motion.div>

        <motion.div
          aria-hidden="true"
          animate={{
            rotate: active ? 12 : 0,
            scale: active ? 1.06 : 1,
          }}
          transition={{ type: 'spring', stiffness: 130, damping: 20 }}
          className="pointer-events-none absolute -bottom-20 -right-20 size-56 rounded-full border border-foreground/10"
          style={{ transform: 'translateZ(7px)' }}
        />

        <div className="relative z-10 flex h-full w-full flex-col gap-7" style={{ transform: 'translateZ(38px)' }}>
          <div className="flex items-start justify-between gap-6">
            <motion.div
              animate={{
                rotate: active ? -7 : 0,
                scale: active ? 1.08 : 1,
                backgroundColor: active ? 'hsl(var(--foreground))' : 'transparent',
                color: active ? 'hsl(var(--background))' : 'hsl(var(--foreground))',
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="flex size-11 shrink-0 items-center justify-center border border-border"
            >
              <Icon className="size-5" strokeWidth={1.4} />
            </motion.div>
            <span className="text-xs font-light tracking-widest text-muted-foreground">{group.number}</span>
          </div>

          <div className="space-y-3">
            <h2 className="max-w-sm text-2xl font-light tracking-wide md:text-3xl">{group.title}</h2>
            <p className="text-base font-light leading-relaxed text-muted-foreground">{group.description}</p>
          </div>

          <div className="mt-auto space-y-3 pt-2">
            <p className="text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, itemIndex) => (
                <motion.span
                  key={item}
                  whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.025 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 19 }}
                  className="border border-border bg-background/70 px-2.5 py-1 text-xs font-light tracking-wide text-foreground"
                  style={{ transform: `translateZ(${42 + (itemIndex % 3) * 3}px)` }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        <span className="sr-only">Move your cursor over this skill card to explore its depth.</span>
      </motion.article>
    </div>
  );
}

export default function Skills() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <>
      <SEOHead
        title="Skills"
        description="Technology is the toolkit. Problem-solving is the skill. Explore Mayor Victor Bayo’s fullstack, Web3, automation, infrastructure, and application development capabilities."
      />

      <main className="min-h-screen overflow-hidden">
        <section className="relative isolate overflow-hidden border-b border-border px-6 py-24 md:py-32 lg:px-8">
          <motion.div
            aria-hidden="true"
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 36, ease: 'linear', repeat: Infinity }}
            className="pointer-events-none absolute -right-24 top-1/2 size-72 -translate-y-1/2 rounded-full border border-border/70 md:size-[28rem]"
          />
          <motion.div
            aria-hidden="true"
            animate={prefersReducedMotion ? undefined : { rotate: -360 }}
            transition={{ duration: 48, ease: 'linear', repeat: Infinity }}
            className="pointer-events-none absolute -right-16 top-1/2 size-52 -translate-y-1/2 rounded-full border border-foreground/10 md:size-[22rem]"
          />
          <div className="relative mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="space-y-6"
            >
              <p className="text-xs font-light uppercase tracking-[0.35em] text-muted-foreground">Skills / capability map</p>
              <h1 className="text-5xl font-light tracking-wide md:text-6xl lg:text-7xl">Skills</h1>
              <p className="text-xl font-light tracking-wide text-foreground md:text-2xl">Turning problems into working solutions.</p>
              <div className="mx-auto max-w-2xl space-y-4 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                <p>Technology is the toolkit. Problem-solving is the skill.</p>
                <p>I work across different areas of software development, choosing the right tools for the problem rather than forcing every project into the same stack.</p>
              </div>
              <p className="pt-2 text-[0.68rem] font-light uppercase tracking-[0.22em] text-muted-foreground">Move through the cards to explore the stack</p>
            </motion.div>
          </div>
        </section>

        <section className="relative px-6 py-16 md:py-24 lg:px-8">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(hsl(var(--border)/0.35)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.35)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="relative mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <SkillCard key={group.title} group={group} index={index} />
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-muted/30 px-6 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl space-y-4 md:mb-16">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Wrench className="size-5" strokeWidth={1.4} />
                <span className="text-xs font-light uppercase tracking-[0.25em]">How I Work</span>
              </div>
              <h2 className="text-4xl font-light tracking-wide md:text-5xl">From problem to product.</h2>
            </div>

            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {workflow.map((step, index) => (
                <div key={step.number} className="[perspective:900px]">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={prefersReducedMotion ? undefined : { y: -8, rotateX: 2, rotateY: index % 2 ? -2 : 2, scale: 1.015 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 22, delay: index * 0.045 }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="relative min-h-64 bg-background p-6 md:p-8"
                  >
                    <div style={{ transform: 'translateZ(20px)' }}>
                      <p className="mb-12 text-sm font-light tracking-widest text-muted-foreground">{step.number}</p>
                      <h3 className="mb-4 text-2xl font-light tracking-wide">{step.title}</h3>
                      <p className="text-base font-light leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 text-center md:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-3xl space-y-5"
          >
            <p className="text-2xl font-light leading-relaxed tracking-wide md:text-3xl">The goal isn’t to use more technology.</p>
            <p className="text-2xl font-light leading-relaxed tracking-wide text-muted-foreground md:text-3xl">It’s to use the right technology to solve the right problem.</p>
          </motion.div>
        </section>
      </main>
    </>
  );
}
