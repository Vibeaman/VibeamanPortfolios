import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Homepage with immersive hero section and featured projects grid
 * Showcases photographer's best work with minimal, elegant design
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen">
        {/* Hero Section - Full viewport with featured image */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Portrait */}
        <div className="absolute inset-0">
          <img
            src={photographerInfo.portraitImage}
            alt={photographerInfo.name}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6">
          <motion.div
            className="text-center space-y-6 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-widest text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {photographerInfo.name.toUpperCase()}
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl font-light tracking-wide text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {photographerInfo.tagline}
            </motion.p>

            <motion.h2
              className="text-xl md:text-2xl font-light tracking-wide text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {photographerInfo.heroHeadline}
            </motion.h2>

            <motion.p
              className="text-base md:text-lg font-light leading-relaxed text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.75 }}
            >
              {photographerInfo.heroIntroduction}
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <ScrollIndicator />
          </motion.div>
        </div>
      </section>

        {/* Introduction Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              What I Build and Do
            </h2>
            <div className="space-y-4 text-lg font-light leading-relaxed text-muted-foreground">
              <p>Every project starts with a problem.</p>
              <p>
                Something is too slow.<br />
                Something is difficult to manage.<br />
                Something needs to be automated.<br />
                An idea needs to become a real product.<br />
                A business needs a better way to serve its customers.
              </p>
              <p>That&apos;s where I come in.</p>
              <p>
                I take problems, ideas, and opportunities, figure out what needs to be built, and turn them into practical digital solutions.
              </p>
              <p>I&apos;m not interested in building technology just for the sake of it. I build to make things work better.</p>
              <p>
                From simple websites to full-scale web applications, backend systems, automation, bots, and on-chain products the technology is only the tool.
              </p>
              <p>The real product is the solution.</p>
              <p>Have a problem worth solving? Let&apos;s talk.</p>
            </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <span>Learn More About Me</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Client Promise Quote Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="space-y-8">
                <Quote className="size-10 mx-auto text-muted-foreground/60" strokeWidth={1} />
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed tracking-wide text-foreground">
                  {photographerInfo.clientQuote}
                </blockquote>
                <p className="text-sm md:text-base font-light tracking-widest uppercase text-muted-foreground">
                  For every client, every dream
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32 border-t border-border">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                A selection of recent work
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid - Edge to edge with minimal gaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
                showCategory={true}
                index={index}
              />
            ))}
          </div>

          {/* View All Link */}
          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
