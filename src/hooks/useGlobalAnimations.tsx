"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

export function useGlobalAnimations() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText)

    // Aimasi fade-center umum
    gsap.utils.toArray<HTMLElement>(".fade-center")?.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })

    // Animasi fade-up umum
    gsap.utils.toArray<HTMLElement>(".fade-up")?.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })

    // Aimasi fade-down umum
    gsap.utils.toArray<HTMLElement>(".fade-down")?.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { y: -40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })

    // Aimasi fade-right umum
    gsap.utils.toArray<HTMLElement>(".fade-right")?.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })

    // Animasi fade-left umum
    gsap.utils.toArray<HTMLElement>(".fade-left")?.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })

    // Animasi grid / stagger
    gsap.utils.toArray<HTMLElement>(".stagger-grid")?.forEach((grid) => {
      if (!grid) return;
      const item = grid.querySelectorAll(".fade-item");
      if (item.length) {
        gsap.fromTo(item,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: grid,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
      const itemLeft = grid.querySelectorAll(".fade-item-left");
      if (itemLeft.length) {
        gsap.fromTo(
          itemLeft,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: grid,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    })

    // Animasi SplitText
    gsap.utils.toArray<HTMLElement>(".split-text")?.forEach((el) => {
      if (!el) return;
      const split = new SplitText(el, { type: "lines, words, chars" })
      gsap.fromTo(
        split.chars,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })
    gsap.utils.toArray<HTMLElement>(".split-text-repeat")?.forEach((el) => {
      if (!el) return;
      const split = new SplitText(el, { type: "lines, words, chars" })
      gsap.fromTo(
        split.chars,
        { y: 5 },
        {
          y: -5,
          duration: 0.5,
          ease: "power1.inOut",
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
        }
      )
    })

    gsap.utils.toArray<HTMLElement>(".underline-gradient")?.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { width: "0%" },
        {
          width: "100%",
          duration: 1,
          ease: "linear",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })
  })
}
