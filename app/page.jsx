"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-[var(--foreground)]">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-24 px-6 md:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold mb-12"
          >
            Everything you need to manage your finances
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index}
                className="h-full"
              >
                <Card className="rounded-2xl shadow-md p-6 bg-white dark:bg-gray-800 transition-colors h-full">
                  <CardContent className="space-y-4 pt-4">
                    <div className="text-blue-600">{feature.icon}</div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 md:px-20 bg-blue-50 dark:bg-gray-900 transition-colors duration-300">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold mb-16 text-gray-900 dark:text-white"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 md:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold mb-16"
          >
            What Our Users Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index}
                className="h-full"
              >
                <Card className="rounded-2xl shadow-md p-6 bg-white dark:bg-gray-800 transition-colors h-full">
                  <CardContent className="pt-4">
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="ml-4 text-left">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {testimonial.quote}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center px-4"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 dark:text-gray-300 mb-8">
            Join thousands of users already managing their money smarter with
            Finergy.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 
                  dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 
                  transition-colors duration-300 px-8 py-5 text-lg rounded-full shadow"
              >
                Start Free Trial
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;
