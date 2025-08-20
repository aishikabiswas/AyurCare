import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Sparkles, Brain, Shield, Users } from "lucide-react";
import ayurvedicTreatment from "@/assets/ayurvedic-treatment.jpg";
import herbalRemedies from "@/assets/herbal-remedies.jpg";
import relaxationTherapy from "@/assets/relaxation-therapy.jpg";

const Services = () => {
  const services = [
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Ayurvedic Treatments",
      description: "Traditional panchakarma therapies, oil massages, and detoxification treatments using authentic Ayurvedic methods.",
      image: ayurvedicTreatment,
      features: ["Panchakarma Therapy", "Abhyanga Massage", "Shirodhara Treatment"]
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Beauty & Rejuvenation",
      description: "Natural beauty therapies that care for wrinkles, sagging skin, detoxify, rejuvenate and tone up your skin.",
      image: relaxationTherapy,
      features: ["Anti-aging Treatments", "Skin Rejuvenation", "Natural Face Therapy"]
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Herbal Medicine",
      description: "Customized herbal remedies and natural medicines prepared according to ancient Ayurvedic formulations.",
      image: herbalRemedies,
      features: ["Custom Herbal Blends", "Natural Supplements", "Dietary Consultation"]
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Stress Management",
      description: "Holistic approaches to mental wellness including meditation guidance and stress relief therapies.",
      image: ayurvedicTreatment,
      features: ["Meditation Sessions", "Stress Relief Therapy", "Mental Wellness"]
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Physiotherapy",
      description: "Combine modern physiotherapy with traditional Ayurvedic healing for optimal recovery and wellness.",
      image: relaxationTherapy,
      features: ["Pain Management", "Injury Recovery", "Movement Therapy"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Wellness Consultation",
      description: "Personalized wellness plans based on your unique constitution and health needs.",
      image: herbalRemedies,
      features: ["Health Assessment", "Lifestyle Guidance", "Follow-up Care"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-primary-glow/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of Ayurvedic treatments and wellness services, 
            designed to restore balance and promote natural healing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card/80 backdrop-blur-sm border-border overflow-hidden group"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full p-3">
                  {service.icon}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-up">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
              Ready to Begin Your Wellness Journey?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Schedule a consultation with our experienced Ayurvedic practitioners and discover the path to natural healing.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;