import { motion } from "framer-motion";
import { Target, Eye, Heart, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower businesses with innovative technology solutions that drive growth and success.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be the leading technology partner for businesses worldwide, shaping the future of digital innovation.",
    },
    {
      icon: Heart,
      title: "Values",
      description: "Excellence, Innovation, Integrity, and Customer Success are at the core of everything we do.",
    },
    {
      icon: Users,
      title: "Team",
      description: "A diverse team of passionate experts dedicated to delivering exceptional results.",
    },
  ];

  const timeline = [
    { year: "2018", event: "NovaTech Labs founded with a vision to revolutionize software development" },
    { year: "2019", event: "Expanded team to 20+ experts and launched AI division" },
    { year: "2020", event: "Delivered 100+ successful projects across various industries" },
    { year: "2021", event: "Opened new offices and achieved 98% client satisfaction rate" },
    { year: "2022", event: "Reached 500+ projects milestone and won industry awards" },
    { year: "2023", event: "Became a leading technology partner for Fortune 500 companies" },
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
            About <span className="gradient-text">NovaTech Labs</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of passionate innovators, dedicated to building software that shapes the future.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl hover:glow-cyan transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Our <span className="gradient-text">Journey</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="glass p-6 rounded-2xl inline-block">
                      <div className="text-2xl font-black gradient-text mb-2">{item.year}</div>
                      <p className="text-muted-foreground">{item.event}</p>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10 glow-cyan" />
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-strong p-12 rounded-3xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Start Your <span className="gradient-text">Journey</span> with Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's build something amazing together. Get in touch with our team today.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold hover:glow-cyan transition-all"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
