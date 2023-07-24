import { create } from 'zustand';
interface NavState {
  mobileNavOpen: boolean;
  toggleMobileNav: () => void;
}

const useMobileNav = create<NavState>((set) => ({
  mobileNavOpen: false,
  toggleMobileNav: () =>
    set((state: any) => ({ mobileNavOpen: !state.mobileNavOpen })),
}));

export default useMobileNav;
