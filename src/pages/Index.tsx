
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServiceCard } from "@/components/service-card";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of premium travel services designed to make
              your Malaysian journey unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Airport Transfers"
              description="Comfortable and reliable transfers to and from KLIA, KLIA2, and Subang Airport"
              image="/images/airport-transfer.jpg"
              link="/airport-transfers"
            />
            <ServiceCard
              title="Daily Tours"
              description="Explore Malaysia's most iconic destinations with our scheduled daily tours"
              image="/images/daily-tours.jpg"
              link="/daily-tours"
            />
            <ServiceCard
              title="Private Tours"
              description="Customized private tours with luxury vehicles for the ultimate travel experience"
              image="/images/private-tours.jpg"
              link="/private-tours"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
