"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq9() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">
            Everything you need to know about switching, pausing, and
            customising your plan
          </p>
        </div>
        <div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">Can I switch plans?</h2>
            <p>
              Yes. Change your plan anytime from your account dashboard. The new
              plan starts the following week. No penalties, no fuss.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">What if I need to pause?</h2>
            <p>
              Pause your subscription for up to two weeks whenever you like.
              Your meals resume on your chosen date. We keep your preferences
              saved.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Can I customise spice levels?
            </h2>
            <p>
              Absolutely. Select your preferred spice level—mild, medium, or
              hot—during checkout or update it in your account anytime.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              What's the delivery cut-off time?
            </h2>
            <p>
              Orders must be placed by 8 PM the day before delivery. We deliver
              between 7 AM and 9 AM the next morning across all service areas.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Do you handle food allergies?
            </h2>
            <p>
              Yes. Inform us of any allergies during sign-up. We prepare meals
              separately and clearly label them. Your safety is our priority.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more help?
          </h4>
          <p className="md:text-md">
            Reach out to our team via WhatsApp or email. We're here to answer
            anything about your plan.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact us" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
