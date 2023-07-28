'use client';
import RenderResults from '@/components/RenderResults';
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  NO_GROUP,
} from 'kbar';
type Props = {
  children: React.ReactNode;
};

const actions = [
  {
    id: 'about',
    name: 'About',
    shortcut: ['a'],
    keywords: 'about skills experience education',
    perform: () => (window.location.pathname = 'about-me'),
  },
  {
    id: 'contact',
    name: 'Contact',
    shortcut: ['c'],
    keywords: 'contact query email phone',
    perform: () => (window.location.pathname = 'contact-me'),
  },
  {
    id: 'projects',
    name: 'Projects',
    shortcut: ['p'],
    keywords: 'projects technology work',
    perform: () => (window.location.pathname = 'projects'),
  },
];

const Provider = ({ children }: Props) => (
  <KBarProvider actions={actions}>
    <KBarPortal>
      <KBarPositioner className='bg-dark-background/20   backdrop-blur-sm'>
        <KBarAnimator className="backdrop-blur-lg ">
          <KBarSearch className="bg-dark-background text-menu-text text-lg p-4 w-[40vw] rounded-lg" />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
    {children}
  </KBarProvider>
);
export default Provider;
