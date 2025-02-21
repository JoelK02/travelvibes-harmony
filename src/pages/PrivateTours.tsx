
import { Header } from "@/components/header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const vehicles = [
  {
    type: "Alphard/Vellfire",
    capacity: "6 passengers",
    features: ["Leather seats", "Premium comfort", "Extra luggage space"],
    price: "from MYR 899/day",
  },
  {
    type: "Starex",
    capacity: "11 passengers",
    features: ["Spacious interior", "Comfortable seating", "Large windows"],
    price: "from MYR 799/day",
  },
  {
    type: "Van",
    capacity: "13 passengers",
    features: ["Air-conditioned", "Reliable", "Economic choice"],
    price: "from MYR 699/day",
  },
  {
    type: "Bus",
    capacity: "40 passengers",
    features: ["Perfect for large groups", "Tour guide system", "Restroom"],
    price: "from MYR 1499/day",
  },
];

const PrivateTours = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative pt-20">
        <div
          className="absolute inset-0 z-0 h-[400px]"
          style={{
            backgroundImage: "url('/images/private-tours.jpg')",
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
            <h1 className="text-4xl font-bold mb-4">Private Tours</h1>
            <p className="text-lg mb-6">
              Customize your perfect Malaysian journey with our private tour services
            </p>
            <Button size="lg">Plan Your Tour</Button>
          </motion.div>
        </div>

        <div className="container-custom py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Vehicles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of premium vehicles, each offering comfort and style
              for your private tour experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle) => (
              <motion.div
                key={vehicle.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{vehicle.type}</h3>
                <div className="text-primary font-medium mb-2">{vehicle.capacity}</div>
                <ul className="text-sm text-gray-600 mb-4 space-y-2">
                  {vehicle.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-primary mb-4">
                  {vehicle.price}
                </div>
                <Button className="w-full">Book Vehicle</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateTours;
