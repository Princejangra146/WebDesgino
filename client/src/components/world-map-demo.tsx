"use client";

import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";

export default function WorldMapDemo() {
  return (
    <section className="py-20 md:py-28 bg-[#050505] text-slate-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <p className="font-display font-semibold text-2xl md:text-4xl mb-3">
            Remote{" "}
            <span className="text-neutral-400">
              {"Connectivity".split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </p>
          <p className="text-sm md:text-base text-neutral-400 max-w-2xl mx-auto">
            Break free from traditional boundaries. Work from anywhere while
            staying connected to your clients across the globe.
          </p>
        </div>

        <WorldMap
          dots={[
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska
              end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska
              end: { lat: -15.7975, lng: -47.8919 }, // Brasília
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brasília
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
          lineColor="#38bdf8"
          theme="dark"
        />
      </div>
    </section>
  );
}