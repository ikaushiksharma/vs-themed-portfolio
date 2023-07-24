'use client';
import useMobileNav from 'app/stores/nav';
import { useRouter } from 'next/navigation';
type Props = {
  path: string;
};

const MobileNav = ({ path }: Props) => {
  const { mobileNavOpen, toggleMobileNav } = useMobileNav();
  const router = useRouter();

  const toggleMobileMenu = () => {
    toggleMobileNav();
  };
  const goToPath = (path: string) => {
    router.push(path);
    toggleMobileMenu();
  };
  return (
    <nav className="w-full z-10 lg:hidden">
      <div className="w-full h-16 flex justify-between items-center border-b border-gray-theme">
        <button
          className="text-menu-text font-fira_retina flex h-full items-center mx-5"
          onClick={() => goToPath('/')}
        >
          kaushik-sharma
        </button>
        {!mobileNavOpen ? (
          <img
            src="/icons/burger.svg"
            onClick={toggleMobileMenu}
            className="w-5 h-5 mx-5 my-auto cursor-pointer transition-all"
          />
        ) : (
          <img
            src="/icons/burger-close.svg"
            onClick={toggleMobileMenu}
            className="w-5 h-5 mx-5 my-auto cursor-pointer transition-all"
          />
        )}
      </div>

      <div
        className={`bg-mobile-menu-blue w-full  flex-col z-10 ${
          mobileNavOpen ? 'flex' : 'hidden'
        }`}
      >
        <button
          className={`text-menu-text font-fira_retina px-6 py-4 flex items-center border-b border-gray-theme ${
            path === '/' ? 'text-white' : ''
          }`}
          onClick={() => goToPath('/')}
        >
          _hello
        </button>
        <button
          className={`text-menu-text font-fira_retina px-6 py-4 flex items-center border-b border-gray-theme ${
            path === '/about-me' ? 'text-white' : ''
          }`}
          onClick={() => goToPath('/about-me')}
        >
          _about-me
        </button>
        <button
          className={`text-menu-text font-fira_retina px-6 py-4 flex items-center border-b border-gray-theme ${
            path === '/projects' ? 'text-white' : ''
          }`}
          onClick={() => goToPath('/projects')}
        >
          _projects
        </button>
        <button
          className={`text-menu-text font-fira_retina px-6 py-4 flex items-center border-b border-gray-theme ${
            path === '/contact-me' ? 'text-white' : ''
          }`}
          onClick={() => goToPath('/contact-me')}
        >
          _contact-me
        </button>
      </div>
    </nav>
  );
};

export default MobileNav;
