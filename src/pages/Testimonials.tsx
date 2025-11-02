import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
      text: "NovaTech Labs transformed our business with their innovative solutions. The team's expertise and dedication are unmatched. Highly recommended!",
    },
    {
      name: "Michael Chen",
      role: "CTO, FinanceHub",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
      text: "Working with NovaTech Labs was a game-changer. They delivered a robust platform that exceeded our expectations. Professional and reliable!",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      text: "The quality of work and attention to detail is exceptional. NovaTech Labs understood our vision and brought it to life perfectly.",
    },
    {
      name: "David Park",
      role: "Founder, E-Commerce Plus",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
      text: "Outstanding service from start to finish. The team was responsive, creative, and delivered on time. Couldn't be happier with the results!",
    },
    {
      name: "Lisa Anderson",
      role: "VP Operations, SmartIoT",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      rating: 5,
      text: "NovaTech Labs' technical expertise helped us scale our IoT platform seamlessly. They're true partners in innovation!",
    },
    {
      name: "James Wilson",
      role: "Marketing Director, SocialMetrics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      rating: 5,
      text: "The analytics platform they built for us provides incredible insights. NovaTech Labs delivers cutting-edge solutions with great support.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about working with us.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto"
        >
          {[
            { value: "98%", label: "Client Satisfaction" },
            { value: "500+", label: "Projects Delivered" },
            { value: "4.9/5", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="glass p-6 rounded-2xl text-center">
              <div className="text-4xl font-black gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass p-8 h-full hover:glow-cyan transition-all group relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 relative z-10">"{testimonial.text}"</p>

                {/* Client Info */}
                <div className="flex items-center gap-4 relative z-10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 glass-strong p-12 rounded-3xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Join Our <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the same level of excellence and innovation that our clients rave about.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold hover:glow-cyan transition-all"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
