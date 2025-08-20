import { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = (number: string, location: string) => {
    const message = `Hi! I'd like to inquire about your Ayurvedic treatments at the ${location} location.`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
          aria-label="Open WhatsApp Chat"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-card border border-border rounded-lg shadow-xl w-80 max-w-[calc(100vw-3rem)]">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">AyurCare Support</h3>
                <p className="text-sm opacity-90">Typically replies instantly</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            <div className="bg-muted p-3 rounded-lg">
              <p className="text-sm text-muted-foreground mb-3">
                Hi there! 👋 How can we help you today? Choose your preferred location:
              </p>
            </div>

            {/* Location Options */}
            <div className="space-y-2">
              <button
                onClick={() => handleWhatsApp("971565929841", "Karama")}
                className="w-full p-3 bg-primary/10 hover:bg-primary/20 rounded-lg border border-primary/20 transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Karama Branch</div>
                    <div className="text-sm text-muted-foreground">+971 56 592 9841</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleWhatsApp("97156144993", "Qusais")}
                className="w-full p-3 bg-primary/10 hover:bg-primary/20 rounded-lg border border-primary/20 transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Qusais Branch</div>
                    <div className="text-sm text-muted-foreground">+971 56 144 8993</div>
                  </div>
                </div>
              </button>
            </div>

            <div className="text-xs text-muted-foreground text-center pt-2 border-t border-border">
              Open Daily: 9AM - 10PM
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WhatsAppPopup;