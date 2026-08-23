import type { Project } from '@/types';

import tixoImg from '@/assets/project-tixo.jpg';
import superteamImg from '@/assets/project-superteam.jpg';
import cryptogigsImg from '@/assets/project-cryptogigs.jpg';
import basedlaunchImg from '@/assets/project-basedlaunch.jpg';
import zeroGBountyImg from '@/assets/project-0gbounty.jpg';
import tokengateImg from '@/assets/project-tokengate.png';
import revampImg from '@/assets/revamp-logo.png';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Tixo',
    category: 'fullstack',
    year: '2026',
    slug: 'tixo',
    externalUrl: 'https://www.tixo.online',
    coverImage: tixoImg,
    description: "Africa's freshest event platform. Discover epic events, book instantly, and create sell-outs — all in one place.",
    location: 'Live at tixo.online',
    images: [
      { id: '1-1', src: tixoImg, alt: 'Tixo homepage', aspectRatio: 'portrait' }
    ]
  },
  {
    id: '2',
    title: 'Superteam Brasil',
    category: 'web3',
    year: '2025',
    slug: 'superteam-brasil',
    externalUrl: 'https://superteam-brasil-ywz3.vercel.app',
    coverImage: superteamImg,
    description: 'The Solana hub in LATAM. A community platform for the best developers, creatives, and founders building the future of Web3 in Brazil.',
    location: 'Live on Vercel',
    images: [
      { id: '2-1', src: superteamImg, alt: 'Superteam Brasil homepage', aspectRatio: 'portrait' }
    ]
  },
  {
    id: '3',
    title: 'CryptoGigs',
    category: 'web3',
    year: '2026',
    slug: 'cryptogigs',
    externalUrl: 'https://cryptogigss.vercel.app',
    coverImage: cryptogigsImg,
    description: "Find crypto freelance opportunities first. Scans new token launches across Solana, Base, and Ethereum to surface projects that need your skills before they post listings.",
    location: 'Live on Vercel',
    images: [
      { id: '3-1', src: cryptogigsImg, alt: 'CryptoGigs homepage', aspectRatio: 'portrait' }
    ]
  },
  {
    id: '4',
    title: 'BasedLaunch',
    category: 'defi',
    year: '2025',
    slug: 'basedlaunch',
    externalUrl: 'https://based-launch-delta.vercel.app',
    coverImage: basedlaunchImg,
    description: 'The anti-rug launchpad. Team vesting, locked liquidity, and transparent launches — built on Solana.',
    location: 'Live on Vercel',
    images: [
      { id: '4-1', src: basedlaunchImg, alt: 'BasedLaunch homepage', aspectRatio: 'portrait' }
    ]
  },
  {
    id: '5',
    title: '0G Bounty Board',
    category: 'ai',
    year: '2025',
    slug: '0g-bounty-board',
    externalUrl: 'https://0g-bounty-board.vercel.app',
    coverImage: zeroGBountyImg,
    description: "An AI agent marketplace. Post tasks with rewards. AI agents bid and complete work using 0G's decentralized compute — pay only for approved results.",
    location: 'Live on Vercel',
    images: [
      { id: '5-1', src: zeroGBountyImg, alt: '0G Bounty Board homepage', aspectRatio: 'portrait' }
    ]
  },
  {
    id: '6',
    title: 'TokenGate',
    category: 'bot',
    year: '2026',
    slug: 'tokengate',
    externalUrl: 'https://t.me/tokengate1bot',
    coverImage: tokengateImg,
    description: 'Telegram bot that verifies Solana token holders in your group and automatically removes non-holders.',
    location: 'Live on Telegram',
    images: [
      { id: '6-1', src: tokengateImg, alt: 'TokenGate Telegram bot profile', aspectRatio: 'portrait' }
    ]
  },
  {
    id: '7',
    title: 'Revamp Initiatives',
    category: 'nonprofit',
    year: '2026',
    slug: 'revamp-initiatives',
    externalUrl: 'https://www.therevampinitiatives.org',
    coverImage: revampImg,
    description: 'A creative social impact hub empowering vulnerable communities through creative expression, vocational training, and sustainable development across Nigeria.',
    location: 'Live at therevampinitiatives.org',
    images: [
      { id: '7-1', src: revampImg, alt: 'Revamp Initiatives homepage', aspectRatio: 'portrait' }
    ]
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);

  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
