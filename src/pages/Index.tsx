import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import WhatsAppPopup from "@/components/WhatsAppPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">AyurCare</h3>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Dubai's premier Ayurvedic wellness center with over 20 years of excellence 
                in natural healing and holistic wellness treatments.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">Fb</span>
                </div>
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">Ig</span>
                </div>
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">Wa</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div>Ayurvedic Treatments</div>
                <div>Beauty Therapy</div>
                <div>Herbal Medicine</div>
                <div>Physiotherapy</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div>Karama: 056 592 9841</div>
                <div>Qusais: 056 1448993</div>
                <div className="pt-2">Open Daily: 9AM - 10PM</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 AyurCare Wellness Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <WhatsAppPopup />
    </div>
  );
};

export default Index;
