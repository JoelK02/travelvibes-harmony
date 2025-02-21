
import { Header } from "@/components/header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const tours = [
  {
    name: "Kuala Selangor",
    duration: "Full Day",
    price: "MYR 299",
    description: "Experience the charm of Kuala Selangor with fireflies viewing and seafood dinner.",
  },
  {
    name: "Melaka",
    duration: "Full Day",
    price: "MYR 349",
    description: "Explore the historic city of Melaka, a UNESCO World Heritage site.",
  },
  {
    name: "Genting Highlands",
    duration: "Full Day",
    price: "MYR 399",
    description: "Visit Malaysia's coolest resort with optional theme park tickets.",
  },
  {
    name: "Batu Caves + KL City",
    duration: "Half Day",
    price: "MYR 249",
    description: "Discover Kuala Lumpur's iconic landmarks and cultural sites.",
  },
];

const DailyTours = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative pt-20">
        <div
          className="absolute inset-0 z-0 h-[400px]"
          style={{
            backgroundImage: "url('/images/daily-tours.jpg')",
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
            <h1 className="text-4xl font-bold mb-4">Daily Tours</h1>
            <p className="text-lg mb-6">
              Join our expertly guided tours to Malaysia's most fascinating destinations
            </p>
            <Button size="lg">View Available Tours</Button>
          </motion.div>
        </div>

        <div className="container-custom py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((tour) => (
              <motion.div
                key={tour.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                <div className="text-sm text-gray-600 mb-2">{tour.duration}</div>
                <div className="text-lg font-semibold text-primary mb-3">
                  {tour.price}
                </div>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <Button className="w-full">Book Now</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DailyTours;
