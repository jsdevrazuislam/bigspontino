"use client"
import React, { useState } from 'react';
import Header from '@/sections/header';
import HeroSection from '@/sections/hero';
import AboutSection from '@/sections/il-menu';
import ReservationModal from '@/components/reservation-modal';
import EventsSection from '@/sections/event-section';
import HistorySection from '@/sections/history-section';
import Gallery from '@/sections/gallery';
import ContactSection from '@/sections/contact';
import JobsSection from '@/sections/jobs-section';

function LandingPage() {

  const [open, setOpen] = useState(false)

  return (
    <main className='bg-primary/5'>
      <Header />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <HistorySection />
      <Gallery />
      <ContactSection />
      <JobsSection />
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 cursor-pointer right-6 z-50 bg-secondary text-white w-12 h-12 rounded-full shadow-lg hover:bg-orange-600 transition"
        aria-label="Open reservation"
      >
        🗓️
      </button>
      <ReservationModal isOpen={open} onClose={() => setOpen(false)} />
    </main>
  );
}

export default LandingPage;