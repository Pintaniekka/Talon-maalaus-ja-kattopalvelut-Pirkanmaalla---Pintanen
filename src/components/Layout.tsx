import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MobileBottomBar from './MobileBottomBar';
import ToimintaAlueetBanner from './ToimintaAlueetBanner';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <ToimintaAlueetBanner />
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Layout;
