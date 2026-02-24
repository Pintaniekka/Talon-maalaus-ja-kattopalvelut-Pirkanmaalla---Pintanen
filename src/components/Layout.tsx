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
  const { pathname } = useLocation();
  const hideBanner = pathname === '/toiminta-alueet';

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {!hideBanner && <ToimintaAlueetBanner />}
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Layout;
