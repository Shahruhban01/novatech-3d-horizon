import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      description: "A comprehensive financial analytics platform with real-time data visualization and AI-powered insights.",
      tags: ["React", "Node.js", "AI/ML", "AWS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      results: ["40% increase in user engagement", "Real-time analytics", "99.9% uptime"],
    },
    {
      title: "HealthCare Mobile App",
      category: "Mobile Application",
      description: "Patient management system with telemedicine capabilities and appointment scheduling.",
      tags: ["React Native", "Firebase", "Healthcare"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      results: ["10K+ active users", "HIPAA compliant", "4.8★ rating"],
    },
    {
      title: "E-Commerce Platform",
      category: "Full Stack",
      description: "Modern online marketplace with advanced search, payment integration, and inventory management.",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      results: ["$2M+ in transactions", "50K+ products", "Global scaling"],
    },
    {
      title: "AI Content Generator",
      category: "AI/ML Platform",
      description: "Intelligent content creation tool powered by advanced language models and natural language processing.",
      tags: ["Python", "TensorFlow", "GPT", "Cloud"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      results: ["90% time saved", "Multi-language support", "Custom AI models"],
    },
    {
      title: "Smart IoT Dashboard",
      category: "IoT Solution",
      description: "Real-time monitoring and control system for IoT devices with predictive maintenance.",
      tags: ["React", "MQTT", "AWS IoT", "Analytics"],
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
      results: ["1000+ connected devices", "Real-time monitoring", "30% cost reduction"],
    },
    {
      title: "Social Media Analytics",
      category: "Data Platform",
      description: "Comprehensive social media monitoring and analytics platform with sentiment analysis.",
      tags: ["Vue.js", "Python", "BigQuery", "ML"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      results: ["Multi-platform tracking", "Sentiment analysis", "Custom reports"],
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
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects and success stories from clients worldwide.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass overflow-hidden h-full group cursor-pointer hover:glow-cyan transition-all">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-primary/90">
                    {project.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="space-y-2 mb-4">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
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
            Ready to Start Your <span className="gradient-text">Next Project?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Contact us to discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold hover:glow-cyan transition-all"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
