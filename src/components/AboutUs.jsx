// src/components/AboutUs.js
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-8">
          About Us
        </h1>
        <div className="space-y-8">
          <section className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Flame Speed & Brightness Adjustments
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our electric fireplace allows you to adjust the flame's speed and
              brightness to match your mood. The flame effects can function
              independently of the heater, giving you the perfect ambiance
              without additional heat. Choose from four vibrant flame colors and
              use the dimmer to set the ideal brightness.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Safe & Overheat Protection
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Safety is our top priority. The built-in overheat protection
              system ensures the heater automatically shuts off when critical
              temperatures are reached. Designed with a bottom air outlet, it
              effectively prevents overheating and potential harm.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Two-Stage Temperature Control
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our heater features two temperature settings: 500W and 1500W.
              Additionally, the built-in timer lets you control when the heater
              operates, helping you save energy and enjoy a warm room upon
              arrival.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Graceful Infrared Heating Design
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Designed with elegance and portability in mind, this fireplace
              features a classic retro style with a sturdy build. Special
              lightweight materials ensure easy mobility, making it suitable for
              various settings such as offices, restaurants, or homes.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Realistic & Bright Flame Effect
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our advanced technology creates a flame effect that surpasses the
              aesthetics of real fire. Enjoy the ambiance of dancing flames and
              glowing logs without the risks associated with an open flame. The
              transparent glass design provides a stunning view from all angles.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Warm & Comfortable Experience
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Using the latest infrared heating technology, our heater offers
              fast and efficient warmth. It covers areas between 400 to 500
              square feet, with a heating time of just 5 to 7 minutes. The
              bottom vents reduce operational noise, ensuring a peaceful
              environment with noise levels under 40dB.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
