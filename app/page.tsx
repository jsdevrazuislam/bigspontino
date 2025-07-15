import HeroSection from '@/sections/landing'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Bigspontino - Landing Page',
  description: 'Test Description'
}

const Page = () => {
  return (
    <HeroSection />
  )
}

export default Page