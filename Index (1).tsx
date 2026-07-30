import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Hero from "../components/content/Hero";
import CollectionGrid from "../components/content/CollectionGrid";
import ProductCarousel from "../components/content/ProductCarousel";
import FeaturedBanner from "../components/content/FeaturedBanner";
import AboutSection from "../components/content/AboutSection";
import InstagramGallery from "../components/content/InstagramGallery";
import StoreInfo from "../components/content/StoreInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-6">
        <Hero />
        <ProductCarousel />
        <CollectionGrid />
        <FeaturedBanner />
        <AboutSection />
        <InstagramGallery />
        <StoreInfo />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
