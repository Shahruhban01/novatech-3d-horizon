import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero3D from "@/components/Hero3D";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Hero3D />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />

        {/* Content */}
        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Building the Future of Technology</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              We Build{" "}
              <span className="gradient-text">Future-Ready</span>
              <br />
              Software
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge AI, Cloud Solutions, and Custom Software Development.
              Transform your vision into reality with NovaTech Labs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="glow-hover-cyan group" asChild>
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="glass hover:glass-strong" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
            >
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "50+", label: "Expert Team" },
              ].map((stat, index) => (
                <div key={index} className="glass p-6 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Preview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Why Choose <span className="gradient-text">NovaTech Labs?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cutting-Edge Technology",
                description: "We leverage the latest technologies to build scalable and innovative solutions.",
              },
              {
                title: "Expert Team",
                description: "Our team of experienced developers and designers brings your vision to life.",
              },
              {
                title: "24/7 Support",
                description: "We provide round-the-clock support to ensure your success.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl hover:glow-cyan transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
