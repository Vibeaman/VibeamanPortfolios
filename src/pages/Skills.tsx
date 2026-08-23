import { motion } from 'framer-motion';
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

export default function Skills() {
  return (
    <>
      <SEOHead
        title="Skills"
        description="Technology is the toolkit. Problem-solving is the skill. Explore Mayor Victor Bayo’s fullstack, Web3, automation, infrastructure, and application development capabilities."
      />

      <main className="min-h-screen">
        <section className="border-b border-border px-6 py-24 md:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="space-y-6"
            >
              <p className="text-xs font-light uppercase tracking-[0.35em] text-muted-foreground">Skills</p>
              <h1 className="text-5xl font-light tracking-wide md:text-6xl lg:text-7xl">Skills</h1>
              <p className="text-xl font-light tracking-wide text-foreground md:text-2xl">Turning problems into working solutions.</p>
              <div className="mx-auto max-w-2xl space-y-4 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                <p>Technology is the toolkit. Problem-solving is the skill.</p>
                <p>I work across different areas of software development, choosing the right tools for the problem rather than forcing every project into the same stack.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.article
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: index * 0.035 }}
                  className="group relative overflow-hidden border border-border bg-background p-6 transition-colors hover:bg-muted/35 md:p-8"
                >
                  <div className="pointer-events-none absolute right-5 top-3 select-none text-7xl font-extralight leading-none tracking-tighter text-muted/70 md:text-8xl" aria-hidden="true">
                    {group.number}
                  </div>
                  <div className="relative flex h-full flex-col gap-7">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex size-11 shrink-0 items-center justify-center border border-border text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                        <Icon className="size-5" strokeWidth={1.4} />
                      </div>
                      <span className="text-xs font-light tracking-widest text-muted-foreground">{group.number}</span>
                    </div>

                    <div className="space-y-3">
                      <h2 className="max-w-sm text-2xl font-light tracking-wide md:text-3xl">{group.title}</h2>
                      <p className="text-base font-light leading-relaxed text-muted-foreground">{group.description}</p>
                    </div>

                    <div className="mt-auto space-y-3 pt-2">
                      <p className="text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">{group.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="border border-border px-2.5 py-1 text-xs font-light tracking-wide text-foreground">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
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
              {workflow.map((step) => (
                <div key={step.number} className="min-h-64 bg-background p-6 md:p-8">
                  <p className="mb-12 text-sm font-light tracking-widest text-muted-foreground">{step.number}</p>
                  <h3 className="mb-4 text-2xl font-light tracking-wide">{step.title}</h3>
                  <p className="text-base font-light leading-relaxed text-muted-foreground">{step.description}</p>
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
