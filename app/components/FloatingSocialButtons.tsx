"use client";
import { MessageCircle, Instagram } from "lucide-react";

export function FloatingSocialButtons() {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">
      {/* Instagram Button */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-black hover:bg-black hover:border-white transition-all duration-300 shadow-lg"
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6 text-black group-hover:text-white transition-colors" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-green-500 border-2 border-green-500 hover:bg-green-600 hover:border-green-600 transition-all duration-300 shadow-lg"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white transition-colors" />
      </a>
    </div>
  );
}

