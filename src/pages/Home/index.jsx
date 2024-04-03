import './styles.scss';

import { Header } from '../../components/Header';
import { Banners } from './Banners';
import { Categorys } from './Categorys';
import { NavBanners } from './NavBanners';
import { Releases } from './Releases';
import { Blog } from './Blog';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <div className="App">
      <Header />

      <main>
        <Banners />
        <Categorys />
        <NavBanners />
        <Releases />
        <Blog />
        <Footer />
      </main>
    </div>
  );
}