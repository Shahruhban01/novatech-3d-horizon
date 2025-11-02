import { motion } from "framer-motion";
import { Code, Smartphone, Brain, Cloud, Palette, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Build responsive, scalable web applications with modern frameworks and technologies.",
      features: ["React & Next.js", "Node.js Backend", "Progressive Web Apps", "E-commerce Solutions"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Create stunning native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS & Android", "App Store Optimization"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Leverage artificial intelligence to automate processes and gain valuable insights.",
      features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Custom AI Models"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Deploy and manage applications with robust cloud infrastructure and CI/CD pipelines.",
      features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Automation", "Cloud Migration"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Design beautiful, intuitive user interfaces that enhance user experience.",
      features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Transform your business with innovative digital solutions and strategies.",
      features: ["Process Automation", "Legacy System Modernization", "Digital Strategy", "Technology Consulting"],
      color: "from-yellow-500 to-orange-500",
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
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass h-full p-8 hover:glow-cyan transition-all group cursor-pointer">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="mt-6 pt-6 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-primary font-semibold">Learn More →</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 glass-strong p-12 rounded-3xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Need a Custom <span className="gradient-text">Solution?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We specialize in creating tailored solutions for unique business challenges.
            Let's discuss your project requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold hover:glow-cyan transition-all"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
