
import { Header } from "@/components/header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const AirportTransfers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative pt-20">
        <div
          className="absolute inset-0 z-0 h-[400px]"
          style={{
            backgroundImage: "url('/images/airport-transfer.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl font-bold mb-4">Airport Transfers</h1>
            <p className="text-lg mb-6">
              Reliable and comfortable transfers to and from all major airports in Malaysia
            </p>
            <Button size="lg">Book Transfer Now</Button>
          </motion.div>
        </div>

        <div className="container-custom py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Our Transfer Service</h2>
              <p className="text-gray-600">
                Experience hassle-free airport transfers with our professional drivers
                and comfortable vehicles. We offer:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li>✓ 24/7 service availability</li>
                <li>✓ Meet & greet at arrival hall</li>
                <li>✓ Flight monitoring</li>
                <li>✓ Free waiting time</li>
                <li>✓ Door-to-door service</li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Book Your Transfer</h3>
              {/* Booking form will be added here */}
              <p className="text-gray-600 mb-4">Coming soon: Online booking system</p>
              <Button className="w-full">Contact Us to Book</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirportTransfers;
