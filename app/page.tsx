'use client';

import ContactUs from "./_components/ContactUs";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Testimonial from "./_components/Testimonial";
import WhatsappIcon from "./_assets/whatsapp-icon.png"
import Image from "next/image";

export default function Home() {

  const go2Whatsapp = () => {
    window.open("https://wa.me/14372560892", "_blank");
  }
  return (
    <div >
      <div className="fixed-contacts">
        <Image src={WhatsappIcon} alt="Whatsapp Icon" width={50} height={50} onClick={go2Whatsapp} />
      </div>
      <Hero />
      <Services />
      <Testimonial />
      <ContactUs />
      <Footer />

    </div>
  );
}
