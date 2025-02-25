
import { Header } from "@/components/header";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search, Calendar, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="section-padding pt-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h1 className="text-5xl font-bold leading-tight text-gray-900">
                Hotel, car &<br />experiences
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Accompanying us, you have a trip full of experiences. With our services,
                booking accommodation, resort villas, hotels becomes easy and convenient.
              </p>
              <Button size="lg" className="bg-[#4F46E5] hover:bg-[#4338CA]">
                Start your search
              </Button>

              <div className="flex gap-8 pt-4">
                <button className="flex items-center gap-2 font-medium text-gray-900 border-b-2 border-gray-900">
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

              <div className="bg-white shadow-lg rounded-2xl p-4 space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <Search className="w-4 h-4" />
                      Location
                    </label>
                    <Input 
                      placeholder="Where are you going?" 
                      className="border-0 bg-gray-50 focus-visible:ring-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <Calendar className="w-4 h-4" />
                      Check in - Check out
                    </label>
                    <Input 
                      placeholder="Feb 06 - Feb 23" 
                      className="border-0 bg-gray-50 focus-visible:ring-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <Users className="w-4 h-4" />
                      Guests
                    </label>
                    <Input 
                      placeholder="4 Guests" 
                      className="border-0 bg-gray-50 focus-visible:ring-0"
                    />
                  </div>
                </div>
                <Button className="w-full bg-[#4F46E5] hover:bg-[#4338CA]">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/hero-1.jpg"
                  alt="Luxury resort"
                  className="rounded-2xl w-full h-[300px] object-cover"
                />
                <img
                  src="/images/hero-2.jpg"
                  alt="Beautiful destination"
                  className="rounded-2xl w-full h-[300px] object-cover mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-sm font-medium text-gray-600">Next trip</div>
                <div className="text-lg font-semibold text-gray-900">Malaysia, Wonderful!</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
