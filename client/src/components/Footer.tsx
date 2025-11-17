import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-slate-800 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10">
          <div>
            <h3 className="text-2xl font-display font-bold mb-3">
              WebDesigno
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Crafting digital experiences that inspire and convert. Your partner
              in modern web excellence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-100">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Web Development",
                "UI/UX Design",
                "E-commerce",
                "Mobile Apps",
                "SEO",
                "Branding",
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-slate-400 hover:text-slate-100 transition-colors"
                    data-testid={`link-footer-service-${index}`}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-100">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-slate-400 hover:text-slate-100 transition-colors"
                  data-testid="link-footer-portfolio"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("process")}
                  className="text-slate-400 hover:text-slate-100 transition-colors"
                  data-testid="link-footer-process"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-slate-400 hover:text-slate-100 transition-colors"
                  data-testid="link-footer-testimonials"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-400 hover:text-slate-100 transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-100">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to get the latest news and updates.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="space-y-3 max-w-xs"
            >
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-newsletter"
                className="bg-black/40 border-slate-700 text-slate-100 placeholder:text-slate-500"
              />
              <Button
                type="submit"
                className="w-full bg-[#7C3AED] hover:bg-[#6D28D9]"
                size="sm"
                data-testid="button-subscribe"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs md:text-sm text-slate-500">
              © 2024 WebDesigno. All rights reserved.
            </p>
            <div className="flex gap-5 text-xs md:text-sm">
              <a
                href="#"
                className="text-slate-500 hover:text-slate-100 transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-slate-100 transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}