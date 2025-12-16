"use client";

import { useState } from "react";

// Icons as SVG components
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const BedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
    <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M4 18v2" />
    <path d="M20 18v2" />
    <path d="M12 4v2" />
  </svg>
);

const AreaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const PriceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    <path d="M12 18V6" />
  </svg>
);

const PoolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12h20" />
    <path d="M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <path d="M9 6V4" />
    <path d="M15 6V4" />
    <circle cx="9" cy="8" r="2" />
    <circle cx="15" cy="8" r="2" />
  </svg>
);

const GymIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6.5 6.5 11 11" />
    <path d="m21 21-1-1" />
    <path d="m3 3 1 1" />
    <path d="m18 22 4-4" />
    <path d="m2 6 4-4" />
    <path d="m3 10 7-7" />
    <path d="m14 21 7-7" />
  </svg>
);

const GardenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 10a6 6 0 0 0 6-6c-3.3 0-6 2.7-6 6" />
    <path d="M12 10a6 6 0 0 1-6-6c3.3 0 6 2.7 6 6" />
    <path d="M12 22V10" />
  </svg>
);

const SecurityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ParkingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
  </svg>
);

const ClubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const amenities = [
    { icon: <PoolIcon />, name: "Swimming Pool" },
    { icon: <GymIcon />, name: "Modern Gym" },
    { icon: <GardenIcon />, name: "Landscaped Garden" },
    { icon: <SecurityIcon />, name: "24/7 Security" },
    { icon: <ParkingIcon />, name: "Covered Parking" },
    { icon: <ClubIcon />, name: "Club House" },
  ];

  const highlights = [
    "Vitrified Tile Flooring",
    "Modular Kitchen",
    "Vastu Compliant Design",
    "Earthquake Resistant Structure",
    "Branded Fittings & Fixtures",
    "Ample Natural Light & Ventilation",
    "Premium Quality Construction",
    "Ready to Move",
  ];

  const galleryImages = [
    { src: "/images/project-1.jpeg", alt: "Riddhi Siddhi Apartment Exterior" },
    { src: "/images/project-2.jpeg", alt: "Riddhi Siddhi Apartment View" },
  ];

  const nearbyPlaces = [
    { name: "Schools & Colleges", distance: "Walking Distance" },
    { name: "Hospitals & Clinics", distance: "2 km" },
    { name: "Shopping & Markets", distance: "1.5 km" },
    { name: "Bus Stand", distance: "3 km" },
    { name: "Railway Station", distance: "4 km" },
  ];

  // WhatsApp contact function
  const handleWhatsAppClick = () => {
    const phoneNumber = "919325172453"; // Format: country code + number without +
    const message = "Hi, I'm interested in Riddhi Siddhi Apartment. Please share more details.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };


  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-[#b8860b]/15 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-white shadow-md">
                <img src="/logo.jpeg" alt="Riddhi Siddhi Apartment Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-base sm:text-lg font-semibold tracking-wide">
                <span className="text-[#b8860b]">RIDDHI SIDDHI</span> APARTMENT
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#gallery" className="text-sm text-gray-600 hover:text-[#b8860b] transition-colors">Gallery</a>
              <a href="#amenities" className="text-sm text-gray-600 hover:text-[#b8860b] transition-colors">Amenities</a>
              <a href="#location" className="text-sm text-gray-600 hover:text-[#b8860b] transition-colors">Location</a>
              <a href="#contact" className="btn-gold text-sm py-2 px-6">Contact Us</a>
            </div>
            <a href="#contact" className="md:hidden btn-gold text-sm py-2 px-4">Enquire</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#fefdfb]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-[#b8860b] text-xs sm:text-sm tracking-[0.4em] uppercase mb-3 sm:mb-4 animate-fade-in-up font-medium">
            Your Dream Home Awaits
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-bold mb-4 sm:mb-6 animate-fade-in-up delay-100 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
            <span className="block text-[#d4af37] mb-2 drop-shadow-lg">RIDDHI SIDDHI</span>
            <span className="block text-white drop-shadow-lg">APARTMENT</span>
          </h1>
          <p className="text-gray-100 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200 leading-relaxed drop-shadow-md">
            Premium 2 & 3 BHK Apartments in Akola
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <a href="#gallery" className="btn-gold">
              Explore Property
              <ArrowDownIcon />
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-[#b8860b]/50 text-[#b8860b] hover:bg-[#b8860b]/10 transition-all">
              Schedule a Visit
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#b8860b]/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#b8860b] rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bento */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-20 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <LocationIcon />, label: "Location", value: "Akola, Maharashtra" },
            { icon: <PriceIcon />, label: "Starting From", value: "₹32 Lakhs*" },
            { icon: <BedIcon />, label: "Configuration", value: "2 & 3 BHK" },
            { icon: <AreaIcon />, label: "Area Range", value: "850 - 1150 sq.ft" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-card p-4 sm:p-6 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-box mx-auto mb-3 text-[#b8860b]">
                {stat.icon}
              </div>
              <p className="text-gray-500 text-xs sm:text-sm mb-1">{stat.label}</p>
              <p className="text-[#1a1a1a] font-semibold text-sm sm:text-lg">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Bento Grid */}
      <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#b8860b] text-sm tracking-[0.2em] uppercase mb-2">Exclusive Gallery</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>
            A Glimpse of <span className="text-gold-gradient">Luxury</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[250px]">
          {/* Large Featured Image */}
          <div className="col-span-2 row-span-2 img-hover glass-card overflow-hidden">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Smaller Images */}
          {galleryImages.slice(1).map((img, index) => (
            <div key={index} className="img-hover glass-card overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Highlights & Amenities Bento */}
      <section id="amenities" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Highlights */}
          <div className="glass-card p-6 sm:p-8">
            <p className="text-[#b8860b] text-sm tracking-[0.2em] uppercase mb-2">Premium Features</p>
            <h3 className="text-2xl sm:text-3xl font-serif mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Key <span className="text-gold-gradient">Highlights</span>
            </h3>
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-[#b8860b]/10 transition-colors border border-gray-100"
                >
                  <div className="text-[#b8860b]">
                    <CheckIcon />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="glass-card p-6 sm:p-8">
            <p className="text-[#b8860b] text-sm tracking-[0.2em] uppercase mb-2">World-Class</p>
            <h3 className="text-2xl sm:text-3xl font-serif mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Amenities
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-[#b8860b]/10 border border-gray-100 hover:border-[#b8860b]/30 transition-all cursor-pointer group"
                >
                  <div className="text-[#b8860b] group-hover:scale-110 transition-transform">
                    {amenity.icon}
                  </div>
                  <span className="text-sm text-gray-600 text-center">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map Placeholder */}
          <div className="lg:col-span-2 glass-card p-6 sm:p-8 min-h-[400px] relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
            <div className="relative z-10 h-full flex flex-col justify-end">
              <p className="text-[#b8860b] text-sm tracking-[0.2em] uppercase mb-2">Strategic Location</p>
              <h3 className="text-2xl sm:text-3xl font-serif mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                Prime City <span className="text-gold-gradient">Center</span>
              </h3>
              <p className="text-gray-700 max-w-lg">
                Strategically located in Akola with easy access to schools, hospitals, markets, and major transportation hubs.
                Experience the perfect blend of peaceful living and urban convenience.
              </p>
            </div>
          </div>

          {/* Nearby Places */}
          <div className="glass-card p-6 sm:p-8">
            <p className="text-[#b8860b] text-sm tracking-[0.2em] uppercase mb-2">Connectivity</p>
            <h3 className="text-xl sm:text-2xl font-serif mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Nearby <span className="text-gold-gradient">Places</span>
            </h3>
            <div className="space-y-4">
              {nearbyPlaces.map((place, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#b8860b]/10 transition-colors border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-[#b8860b]">
                      <LocationIcon />
                    </div>
                    <span className="text-gray-700">{place.name}</span>
                  </div>
                  <span className="text-[#b8860b] font-semibold">{place.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#b8860b] text-sm tracking-[0.2em] uppercase mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>
            Schedule Your <span className="text-gold-gradient">Visit</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="glass-card p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message (Optional)"
                  rows={4}
                  className="form-input resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="btn-gold w-full justify-center">
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="glass-card p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-serif mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Contact <span className="text-gold-gradient">Information</span>
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-[#c9a961]/10 transition-colors cursor-pointer">
                <div className="icon-box text-[#c9a961]">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Call Us</p>
                  <p className="text-[#1a1a1a] font-semibold">+91 93251 72453</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-[#c9a961]/10 transition-colors cursor-pointer">
                <div className="icon-box text-[#25d366]">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">WhatsApp</p>
                  <p className="text-[#1a1a1a] font-semibold">+91 93251 72453</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-[#c9a961]/10 transition-colors cursor-pointer">
                <div className="icon-box text-[#c9a961]">
                  <EmailIcon />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email Us</p>
                  <p className="text-[#1a1a1a] font-semibold">info@riddhisiddhiapt.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-[#c9a961]/10 transition-colors cursor-pointer">
                <div className="icon-box text-[#c9a961]">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Visit Us</p>
                  <p className="text-[#1a1a1a] font-semibold">Akola, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-white shadow-md">
                <img src="/logo.jpeg" alt="Riddhi Siddhi Apartment" className="w-full h-full object-contain" />
              </div>
              <span className="font-semibold text-sm">
                <span className="text-[#b8860b]">RIDDHI SIDDHI</span> APARTMENT
              </span>
            </div>
            <p className="text-gray-500 text-sm text-center">
              © 2024 Riddhi Siddhi Apartment. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-[#b8860b] transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-[#b8860b] transition-colors text-sm">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25d366] rounded-full shadow-2xl hover:shadow-[#25d366]/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-float"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon />
        <span className="absolute -top-12 right-0 bg-[#1a1a1a] text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </button>
    </div>
  );
}
