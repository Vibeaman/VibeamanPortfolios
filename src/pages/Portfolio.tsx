import { projects } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';

/**
 * Portfolio page with masonry grid
 * Features smooth animations and responsive layout
 */
export default function Portfolio() {

  return (
    <>
      <SEOHead 
        title="Portfolio"
        description="A selection of real products I’ve built to solve problems, simplify processes, and turn ideas into useful software."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
              Projects
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
              Problems I’ve Solved
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-light tracking-wide max-w-2xl mx-auto mt-4">
              A selection of real products I’ve built to solve problems, simplify processes, and turn ideas into useful software.
            </p>
            <p className="text-sm text-muted-foreground/70 font-light tracking-wide mt-4">
              Every project starts with a problem and ends with a solution.
            </p>
            <p className="text-sm text-muted-foreground/70 font-light tracking-wide mt-2">
              Click the picture to visit the live site or automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid - Edge to edge */}
      <section className="py-12 md:py-16 px-2 md:px-4">
        <PortfolioGrid projects={projects} />
      </section>

        {/* Bottom spacing */}
        <div className="h-24" />
      </div>
    </>
  );
}
