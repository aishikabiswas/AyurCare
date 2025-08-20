import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, MapPin, CheckCircle } from "lucide-react";
import herbalRemedies from "@/assets/herbal-remedies.jpg";

const About = () => {
  const achievements = [
    { number: "20+", label: "Years of Excellence", icon: <Clock className="h-5 w-5" /> },
    { number: "5000+", label: "Happy Clients", icon: <Users className="h-5 w-5" /> },
    { number: "50+", label: "Treatment Types", icon: <Award className="h-5 w-5" /> },
    { number: "2", label: "Dubai Locations", icon: <MapPin className="h-5 w-5" /> },
  ];

  const principles = [
    "Natural healing without harmful side effects",
    "Personalized treatment plans for each client",
    "Authentic Ayurvedic methods and practices",
    "Experienced and certified practitioners",
    "Holistic approach to mind, body, and spirit",
    "Continuous care and follow-up support"
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              About OrenzaCare
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Two Decades</span>
              <br />
              <span className="text-foreground">of Healing Excellence</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              AyurCare Ayurvedic Wellness Center has been Dubai's premier destination for authentic 
              Ayurvedic treatments for over 20 years. We combine ancient wisdom with modern wellness 
              practices to provide comprehensive natural healing solutions.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              Our system of natural therapies is completely risk-free, as our herbal methods are 
              free of any detrimental toxins and subsequent side effects. We believe in the power 
              of nature to heal, rejuvenate, and restore balance to your body and mind.
            </p>

            {/* Principles */}
            <div className="space-y-3 mb-8">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{principle}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg"
            >
              Learn Our Story
            </Button>
          </div>

          {/* Image & Stats */}
          <div className="fade-up lg:fade-in">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={herbalRemedies} 
                  alt="Ayurvedic healing herbs and remedies"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center mb-2 text-primary">
                        {achievement.icon}
                      </div>
                      <div className="text-2xl font-bold text-foreground">
                        {achievement.number}
                      </div>
                      <div className="text-xs text-muted-foreground leading-tight">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-24 text-center fade-up">
          <div className="bg-gradient-to-r from-primary-glow/20 to-accent/20 rounded-2xl p-12 border border-border">
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6 leading-relaxed">
              "Ayurveda is the most sacred science of life and is a part of the universe 
              which has a very basic and simple approach to healing."
            </blockquote>
            <cite className="text-primary font-semibold">— Ancient Ayurvedic Wisdom</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
