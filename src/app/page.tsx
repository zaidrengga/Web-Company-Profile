'use client'

import Image from 'next/image'
import bgHero from "@/assets/image/bg-hero.jpg"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useGlobalAnimations } from '@/hooks/useGlobalAnimations'
import CardRemi from '@/components/ui/CardRemi'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, BarChart, Lightbulb, Mail, MapPin, Phone } from 'lucide-react'
import data from '@/lib/data.json'
import AppFooter from '@/components/template/AppFooter'

const Home = () => {
  const heroContain = useRef<HTMLImageElement>(null);
  const serviceContain = useRef<HTMLDivElement>(null);
  const scrollHorizontal = useRef<HTMLDivElement>(null);
  const teamsContain = useRef<HTMLDivElement>(null);
  const cardRemiRef = useRef<HTMLDivElement[]>([]);

  const { services, teams, projects, testimonials } = data;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!heroContain.current || !serviceContain.current || !scrollHorizontal.current || !teamsContain.current) return;

    // Hero animation
    const heroAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
      },
    });

    const heroAnimationEnd = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "+=800px",
        end: "+=500px",
        scrub: true,
      },
    });

    heroAnimation.fromTo(
      heroContain.current,
      { scale: 0.8, clipPath: "inset(10%)" },
      { scale: 1, clipPath: "inset(0%)" }
    );

    heroAnimationEnd.fromTo(
      heroContain.current,
      { y: 0 },
      { y: -200 }
    );

    // Next animation
    const serviceAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "+=600px",
        end: "+=400px",
        scrub: true
      },
    });

    serviceAnimation.fromTo(
      serviceContain.current,
      { scale: 0.8, borderRadius: "100%", width: "300px", height: "300px" },
      { scale: 1, borderRadius: "0", width: "100%", height: "300px" }
    );

    // Horizontal scroll animation

    scrollHorizontal.current && gsap.to(
      scrollHorizontal.current,
      {
        x: -scrollHorizontal.current.scrollWidth + scrollHorizontal.current.offsetWidth,
        scrollTrigger: {
          trigger: scrollHorizontal.current,
          start: "10% top",
          end: () => `+=${window.innerHeight}`,
          scrub: 0.5,
        }
      }
    );

    // Card Remi animation
    const cards = teamsContain.current?.querySelectorAll('.cards') as NodeListOf<HTMLElement>;
    if (!cards) return;
    const rotations = [-15, -7.5, 7.5, 15];

    cardRemiRef.current.forEach((card, index) => {
      if (!card) return;
      const frontEl = card.querySelector('.flip-card-front');
      const backEl = card.querySelector('.flip-card-back');
      if (!frontEl || !backEl) return;
      const staggerOffset = index * 0.1;
      const startOffset = 1 / 3 + staggerOffset;
      const endOffset = 2 / 3 + staggerOffset;

      ScrollTrigger.create({
        trigger: card,
        start: "-=400px",
        end: "top center",
        scrub: 1,
        id: `card-flip-${index}`,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress >= startOffset && progress <= endOffset) {
            const animationProgress = (progress - startOffset) / (1 / 3);
            const frontRotation = -180 * animationProgress;
            const backRotation = 180 - 180 * animationProgress;
            const cardRotation = rotations[index] * (1 - animationProgress);

            gsap.to(frontEl, { rotateY: frontRotation, ease: "power1.out" });
            gsap.to(backEl, { rotateY: backRotation, ease: "power1.out" });
            gsap.to(card, {
              rotate: cardRotation,
              ease: "power1.out",
              onComplete: () => {
                gsap.to(card, { rotate: 0, ease: "power1.out" });
              },
            });
          }
        },
      });
    })
  }, []);
  useGlobalAnimations();
  return (
    <div className='w-full bg-black'>
      {/* Hero background */}
      <div className="absolute w-full">
        <div className="absolute w-full">
          <div className="absolute w-1/3 h-92 bg-purple-500 rounded-full blur-[150px] top-0 right-10 opacity-30"></div>
          <div className="absolute w-1/3 h-92 bg-blue-500 rounded-full blur-[150px] top-72 left-10 opacity-30"></div>
        </div>
        <div className="relative w-full h-[300vh]">
          <Image
            ref={heroContain}
            src={bgHero}
            alt="hero"
            className="h-screen object-cover sticky top-0 fade-down"
            priority
          />
        </div>
      </div>

      {/* Hero section */}
      <section id='home' className="flex justify-center items-center w-full h-screen overflow-hidden fade-center">
        <div className="flex flex-col justify-center items-center max-w-3xl text-center px-20">
          <h1 className="md:text-4xl text-3xl font-bold split-text">
            Transform Your Business with Technology
          </h1>
          <p className="md:text-xl text-base">
            Kami menyediakan layanan pengembangan website, aplikasi, dan solusi AI modern untuk mendukung pertumbuhan bisnis Anda.
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <Link href="/about" className="px-4 py-2 bg-indigo-950 text-white rounded-lg md:text-base text-xs flex items-center gap-2 text-nowrap">
              Get Started <ArrowRight className='w-4 h-4 inline-block' />
            </Link>
            <Link href="/services" className="px-4 py-2 backdrop-blur-sm bg-white/10 text-white rounded-lg md:text-base text-xs flex items-center gap-2 text-nowrap">
              Our Services <ArrowRight className='w-4 h-4 inline-block' />
            </Link>
          </div>
        </div>
      </section>

      {/* About section */}
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

      {/* Services section */}
      <section id='services' className='w-full h-[250vh] relative'>
        <div className="w-full flex justify-center">
          <div ref={serviceContain} className="h-72 flex items-center justify-center p-10 overflow-hidden bg-black">
            <span className='text-4xl font-bold text-center split-text text-title'>TRANSFORM YOUR BUSINESS WITH TECHNOLOGY <span className='underline-gradient'></span></span>
          </div>
        </div>
        <div className="pt-16 sticky h-screen top-0 overflow-hidden p-10 bg-black">
          <h1 className='md:text-4xl text-2xl font-bold mb-4 split-text text-title'>Layanan Kami <span className='underline-gradient'></span></h1>
          <div ref={scrollHorizontal} className="flex items-center gap-10 w-full stagger-grid mt-4">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col justify-center gap-2 fade-item md:min-w-[500px] min-w-[320px] rounded-xl border border-gray-600 overflow-hidden fade-item">
                <img src={service.image} alt={service.title} className='aspect-video object-cover' />
                <div className="p-4">
                  <h1 className='text-xl font-bold'>{service.title}</h1>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id='portfolio'>
        {/* Team section */}
        <section className="min-h-screen w-full relative" ref={teamsContain}>
          <div className="w-full h-full flex flex-col items-center justify-center pt-20 bg-black">
            <h1 className='md:text-4xl text-2xl font-bold mb-20 split-text text-title '>Teams <span className='underline-gradient'></span></h1>
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-10">
              {teams.map((team, index) => (
                <div className="w-[200px] h-[280px] mx-auto perspective-[1000px] cards"
                  key={index}>
                  <CardRemi
                    id={team.name}
                    title={team.name}
                    position={team.position}
                    image={team.image}
                    ref={(el) => { cardRemiRef.current?.push(el!); }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section className="w-full p-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="md:text-4xl text-2xl font-bold text-title mb-8 split-text">
              Proyek Kami <span className="underline-gradient"></span>
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-grid">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="fade-item">
                  <div className="bg-white/10 border-4 border-white/10 rounded-xl backdrop-blur-sm overflow-hidden group hover:-translate-y-2 transition-all duration-300 ease-in-out"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover rounded-md aspect-video overflow-hidden group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                    <div className="p-4 flex flex-col">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-gray-300 mt-2">{project.description}</p>
                      <Link
                        href={project.link}
                        className="text-indigo-400 hover:text-indigo-200 transition-colors mt-2 block"
                      >
                        Lihat Detail <ArrowRight className="inline-block w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div id='blog'>
        {/* Why Us section */}
        <section className='w-full flex justify-center items-center p-10 py-20 relative bg-black'>
          <div className="absolute w-1/3 h-96 top-10 left-0 bg-purple-600 rounded-full blur-[100px] opacity-30"></div>
          <div className="absolute w-1/3 h-96 bottom-10 right-0 bg-blue-600 rounded-full blur-[100px] opacity-30"></div>

          <div className="w-full md:p-10 p-4 rounded-xl backdrop-blur-2xl bg-white/10">
            <div className="flex md:flex-row flex-col w-full justify-between">
              <div className="flex flex-col">
                <h1 className='split-text md:text-3xl 2xl font-bold text-title'>Kenapa Kami? <span className='underline-gradient'></span></h1>
                <ul className='text-gray-400 text-lg list-disc list-inside stagger-grid'>
                  <li className='fade-item-left'>Tim profesional berpengalaman dalam bidangnya</li>
                  <li className='fade-item-left'>Solusi teknologi yang inovatif dan efektif</li>
                  <li className='fade-item-left'>Fokus pada kepuasan pelanggan dan hasil yang optimal</li>
                  <li className='fade-item-left'>Komitmen terhadap kualitas dan keamanan</li>
                  <li className='fade-item-left'>Pelayanan pelanggan yang responsif dan ramah</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 md:w-1/2 w-full items-center justify-center fade-up">
                <h1 className='split-text-repeat md:text-4xl text-2xl font-bold text-indigo-600'>Lumino<span className='text-white'>Tech</span></h1>
                <p className='text-gray-400 md:text-lg text-base'>Ayo bergabung dengan tim kami!</p>
                <Link href="/about" className='px-4 py-2 bg-black rounded-lg md:text-base text-sm flex items-center gap-2'>Get Started <ArrowRight className='w-4 h-4 inline-block' /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section className="w-full p-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="md:text-4xl text-2xl font-bold text-title mb-8 split-text">
              Apa Kata Klien Kami? <span className="underline-gradient"></span>
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-grid">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 p-6 rounded-xl backdrop-blur-sm fade-item"
                >
                  <p className="italic text-gray-300">"{testimonial.quote}"</p>
                  <div className="mt-4 flex items-center gap-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Contact section */}
      <section id='contact' className='w-full flex justify-center items-center p-10 py-20 relative bg-black'>
        <div className="absolute w-1/3 h-96 top-10 left-0 bg-purple-600 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute w-1/3 h-96 bottom-10 right-0 bg-blue-600 rounded-full blur-[100px] opacity-30"></div>

        <div className="w-full p-10 rounded-xl backdrop-blur-2xl bg-white/10">
          <div className="flex md:flex-row flex-col w-full justify-between gap-4">
            <div className="flex flex-col">
              <h1 className='split-text md:text-3xl 2xl font-bold text-title'>Hubungi Kami<span className='underline-gradient'></span></h1>
              <p className='text-gray-400 md:text-lg text-base mb-4 fade-left'>Jika Anda memiliki pertanyaan atau ingin berkolaborasi, jangan ragu untuk menghubungi kami.</p>
              <ul className='text-gray-400 text-lg stagger-grid'>
                <li className='fade-item-left flex items-center gap-2'><MapPin className='w-4 h-4 inline-block' /> Surabaya, Indonesia</li>
                <li className='fade-item-left flex items-center gap-2'><Mail className='w-4 h-4 inline-block' /> lumino@example.com</li>
                <li className='fade-item-left flex items-center gap-2'><Phone className='w-4 h-4 inline-block' /> +62812345678</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 md:w-1/2 w-full items-center justify-center stagger-grid">
              <input type="text" placeholder="Nama" className='px-4 py-2 rounded-lg bg-white/5 w-full md:text-base text-sm fade-item' />
              <input type="email" placeholder="Email" className='px-4 py-2 rounded-lg bg-white/5 w-full md:text-base text-sm fade-item' />
              <textarea placeholder="Pesan" className='px-4 py-2 rounded-lg bg-white/5 w-full md:text-base text-sm h-20 resize-none fade-item'></textarea>
              <button className='px-4 py-2 bg-black rounded-lg md:text-base text-sm flex items-center gap-2 fade-item'>Kirim Pesan <ArrowRight className='w-4 h-4 inline-block' /></button>
            </div>
          </div>
        </div>
      </section>

      <AppFooter />
    </div>
  );
};

export default Home;
