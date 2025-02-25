
import { Header } from "@/components/header";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Header />
      
      <section className="section-padding pt-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h1 className="text-6xl font-bold leading-tight text-gray-900">
                Hotel, car &<br />experiences
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Accompanying us, you have a trip full of experiences. With our services,
                booking accommodation, resort villas, hotels becomes easy and convenient.
              </p>
              <Button 
                size="lg" 
                className="bg-[#4F46E5] hover:bg-[#4338CA] rounded-full px-8"
              >
                Start your search
              </Button>

              <div className="flex gap-8 pt-4">
                <button className="flex items-center gap-2 font-medium text-[#4F46E5]">
                  <div className="w-2 h-2 bg-[#4F46E5] rounded-full"></div>
                  Stays
                </button>
                <button className="text-gray-500 hover:text-gray-900">
                  Experiences
                </button>
                <button className="text-gray-500 hover:text-gray-900">
                  Cars
                </button>
                <button className="text-gray-500 hover:text-gray-900">
                  Flights
                </button>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-6">
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Search className="w-5 h-5 text-gray-400" />
                      <span className="font-medium">Location</span>
                    </div>
                    <Input 
                      placeholder="Where are you going?" 
                      className="border-0 bg-gray-50 focus-visible:ring-0 text-lg placeholder:text-gray-400"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="font-medium">Feb 06 - Feb 23</div>
                      <div className="text-sm text-gray-500">Check in - Check out</div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">4 Guests</div>
                      <div className="text-sm text-gray-500">Guests</div>
                    </div>
                  </div>
                  <Button className="w-full bg-[#4F46E5] hover:bg-[#4338CA] rounded-xl h-14">
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative hidden lg:grid grid-cols-5 gap-4 h-[600px]"
            >
              <div className="col-span-3 space-y-4">
                <img
                  src="/images/hero-1.jpg"
                  alt="Luxury resort"
                  className="rounded-2xl w-full h-[300px] object-cover"
                />
                <img
                  src="/images/hero-2.jpg"
                  alt="Beautiful destination"
                  className="rounded-2xl w-full h-[280px] object-cover"
                />
              </div>
              <div className="col-span-2">
                <img
                  src="/images/hero-3.jpg"
                  alt="Scenic view"
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
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
