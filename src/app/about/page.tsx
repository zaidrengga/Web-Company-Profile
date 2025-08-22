"use client"

import { useGlobalAnimations } from '@/hooks/useGlobalAnimations'
import { BadgeCheck, BarChart, Lightbulb } from 'lucide-react'
import React from 'react'

const About = () => {
  useGlobalAnimations();
  return (
    <div className="">
      <section
        id="about"
        className="min-h-screen flex items-center justify-center p-10"
      >
        <div className="flex flex-col justify-center items-center space-y-4 p-6 bg-white/10 rounded-2xl backdrop-blur-xs relative overflow-hidden">
          <div className="absolute w-92 h-92 bg-purple-500 rounded-full blur-[150px] top-0 right-10 opacity-20"></div>
          <div className="absolute w-92 h-92 bg-blue-500 rounded-full blur-[150px] bottom-0 left-10 opacity-20"></div>
          <div className="flex flex-col">
            <h1 className="md:text-4xl text-2xl font-bold split-text text-title">About <span className='underline-gradient'></span></h1>
            <p className='text-gray-300 md:text-lg fade-up'>
              LuminoTech Solutions adalah perusahaan teknologi berbasis di Jakarta yang berfokus pada pengembangan digital: website, aplikasi mobile, dan solusi AI.
              Kami hadir untuk membantu bisnis Anda lebih modern, efisien, dan kompetitif. <br />
              Menjadi partner teknologi terpercaya untuk menciptakan inovasi digital yang berkelanjutan.
            </p>
          </div>

          <div className="stagger-grid grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="p-6 flex flex-col items-center gap-4 rounded-2xl bg-black/70 fade-item">
              <Lightbulb className='w-20 h-20 text-yellow-400' />
              <p className='text-center'>Memberikan solusi digital yang inovatif dan efisien.</p>
            </div>
            <div className="p-6 flex flex-col items-center gap-4 rounded-2xl bg-black/70 fade-item">
              <BarChart className='w-20 h-20 text-green-400' />
              <p className='text-center'>Meningkatkan produktivitas bisnis melalui teknologi.</p>
            </div>
            <div className="p-6 flex flex-col items-center gap-4 rounded-2xl bg-black/70 fade-item">
              <BadgeCheck className='w-20 h-20 text-blue-400' />
              <p className='text-center'>Menyediakan layanan dengan kualitas premium.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About