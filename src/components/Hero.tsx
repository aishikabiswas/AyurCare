import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Star } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center fade-up">
          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent-gold text-accent-gold" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">20+ Years Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Ayurvedic Wellness</span>
            <br />
            <span className="text-foreground">Center Dubai</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the ancient wisdom of Ayurveda with over two decades of expertise in natural healing, rejuvenation, and holistic wellness.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border">
              <h3 className="font-semibold text-primary mb-2">Natural Healing</h3>
              <p className="text-sm text-muted-foreground">Risk-free herbal therapies without side effects</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border">
              <h3 className="font-semibold text-primary mb-2">Expert Care</h3>
              <p className="text-sm text-muted-foreground">Certified Ayurvedic practitioners</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border">
              <h3 className="font-semibold text-primary mb-2">Proven Results</h3>
              <p className="text-sm text-muted-foreground">Thousands of satisfied clients</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg flex items-center gap-3"
            >
              <MessageCircle className="h-5 w-5" />
              Book Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg flex items-center gap-3"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-medium">Karama:</span>
              <a href="tel:056 592 9841" className="hover:text-primary transition-colors">
                056 592 9841
              </a>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Qusais:</span>
              <a href="tel:056 1448993" className="hover:text-primary transition-colors">
                056 1448993
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;