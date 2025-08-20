import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";

const Contact = () => {
  const locations = [
    {
      name: "Karama Center",
      address: "Al Karama, Dubai, UAE",
      phone: "056 592 9841",
      hours: "9:00 AM - 10:00 PM",
      icon: <MapPin className="h-5 w-5 text-primary" />
    },
    {
      name: "Qusais Center", 
      address: "Al Qusais, Dubai, UAE",
      phone: "056 1448993",
      hours: "9:00 AM - 10:00 PM",
      icon: <MapPin className="h-5 w-5 text-primary" />
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-primary-glow/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your wellness journey? Contact us today to schedule your consultation 
            and discover the healing power of Ayurveda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 fade-up">
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Book Your Consultation
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <Input 
                        placeholder="Enter your full name"
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number *
                      </label>
                      <Input 
                        placeholder="Enter your phone number"
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Preferred Location
                    </label>
                    <select className="w-full px-3 py-2 border border-input bg-background/50 rounded-md text-foreground">
                      <option value="">Select a location</option>
                      <option value="karama">Karama Center</option>
                      <option value="qusais">Qusais Center</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Service of Interest
                    </label>
                    <select className="w-full px-3 py-2 border border-input bg-background/50 rounded-md text-foreground">
                      <option value="">Select a service</option>
                      <option value="ayurvedic">Ayurvedic Treatments</option>
                      <option value="beauty">Beauty & Rejuvenation</option>
                      <option value="herbal">Herbal Medicine</option>
                      <option value="stress">Stress Management</option>
                      <option value="physio">Physiotherapy</option>
                      <option value="consultation">Wellness Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your wellness goals or any specific concerns..."
                      rows={4}
                      className="bg-background/50"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit"
                      className="flex-1 bg-primary hover:bg-primary/90 py-6 text-lg"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6 text-lg"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fade-up">
            {/* Quick Contact */}
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 justify-start py-6"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  Call Now
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground justify-start py-6"
                >
                  <MessageCircle className="h-5 w-5 mr-3" />
                  WhatsApp Chat
                </Button>
              </CardContent>
            </Card>

            {/* Locations */}
            {locations.map((location, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                    {location.icon}
                    {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{location.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <a 
                      href={`tel:${location.phone}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{location.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-foreground mb-2">Emergency Consultation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Need immediate assistance? We're available for urgent wellness consultations.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Emergency Contact
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;