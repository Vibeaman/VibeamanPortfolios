import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  showCategory?: boolean;
  index?: number;
}

/**
 * Project card component with image, hover overlay, and smooth animations
 * Used in homepage featured projects and portfolio grid
 */
export function ProjectCard({ 
  project, 
  aspectRatio, 
  showCategory = true,
  index = 0 
}: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const ratio = aspectRatio || 'landscape';
  
  const aspectRatioClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[3/2]',
    square: 'aspect-square'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {project.externalUrl ? (
        <a
          href={project.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative overflow-hidden rounded-sm"
        >
          <CardInner project={project} ratio={ratio} aspectRatioClasses={aspectRatioClasses} showCategory={showCategory} index={index} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
        </a>
      ) : (
        <Link
          to={`/project/${project.slug}`}
          className="group block relative overflow-hidden rounded-sm"
        >
          <CardInner project={project} ratio={ratio} aspectRatioClasses={aspectRatioClasses} showCategory={showCategory} index={index} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
        </Link>
      )}
    </motion.div>
  );
}

interface CardInnerProps {
  project: Project;
  ratio: 'portrait' | 'landscape' | 'square';
  aspectRatioClasses: Record<string, string>;
  showCategory: boolean;
  index: number;
  isLoaded: boolean;
  setIsLoaded: (v: boolean) => void;
}

function CardInner({ project, ratio, aspectRatioClasses, showCategory, index, isLoaded, setIsLoaded }: CardInnerProps) {
  return (
    <div className="space-y-4">
      <div className={cn('relative overflow-hidden bg-muted rounded-sm', aspectRatioClasses[ratio])}>
        {!isLoaded && <div className="absolute inset-0 bg-muted" />}

        <motion.img
          src={project.coverImage}
          alt={project.title}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-700',
            isLoaded ? 'opacity-100' : 'opacity-0',
            'group-hover:scale-105'
          )}
          loading={index < 6 ? 'eager' : 'lazy'}
          onLoad={() => setIsLoaded(true)}
        />

        <div className="absolute inset-0 border-2 border-transparent group-hover:border-foreground/10 transition-colors duration-500" />

        {project.externalUrl && (
          <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 text-xs uppercase tracking-widest font-light rounded-sm">
            Visit →
          </div>
        )}
      </div>

      <div className="px-1 space-y-2">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-lg md:text-xl font-light tracking-wide text-foreground group-hover:text-foreground/70 transition-colors">
            {project.title}
          </h3>
          {showCategory && (
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-light shrink-0">
              {project.category} · {project.year}
            </span>
          )}
        </div>
        {project.description && (
          <p className="text-sm text-muted-foreground font-light leading-relaxed line-clamp-2">
            {project.description}
          </p>
        )}
        {project.externalUrl && (
          <p className="text-xs text-muted-foreground/70 font-light">
            Tap to visit the live site
          </p>
        )}
      </div>
    </div>
  );
}
