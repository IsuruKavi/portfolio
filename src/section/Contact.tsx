import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import { useState } from "react";
import Button from "../components/Button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "isurukavindalakshan863@gmail.com",
   
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94775673251",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sri Lanka",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something impactful.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have an idea or project? Let’s connect and make it happen.
          </p>
        </div>

        <div className=" lg:grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400 mb-6 md:mb-6">
            <div className="glass rounded-3xl md:p-8 p-4">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex md:items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0 ">
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium break-all ">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className=" animate-fade-in animation-delay-300">
            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30 animate-fade-in animation-delay-400 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I’m currently open to new opportunities and exciting projects.
                Whether you're looking for a full-time engineer or a freelance
                collaborator, feel free to reach out.
              </p>
            </div>
            <a href="mailto:isuruKavindalakshan863@gmail.com">
              <Button className="w-full" type="submit" size="lg">
                Send Message
                <Send className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
