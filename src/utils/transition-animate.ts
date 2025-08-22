import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")
  const bannerThree = document.getElementById("banner-3")
  const bannerFour = document.getElementById("banner-4")
  const logoTransition = document.getElementById("logo-transition-page")

  if (bannerOne && bannerTwo && bannerThree && bannerFour && logoTransition) {
    const tl = gsap.timeline()

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100,
      stagger: 0.2,
      delay: 1
    })

    tl.to(logoTransition, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        logoTransition.style.display = "none"
      }
    }, "<")
  }
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")
  const bannerThree = document.getElementById("banner-3")
  const bannerFour = document.getElementById("banner-4")
  const logoTransition = document.getElementById("logo-transition-page")

  if (bannerOne && bannerTwo && bannerThree && bannerFour && logoTransition) {
    const tl = gsap.timeline()

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        router.push(href)
        animatePageIn()
      }
    })

    tl.to(logoTransition, {
      opacity: 1,
      duration: 0.5,
      onStart: () => {
        logoTransition.style.display = "flex"
      }
    }, "<")
  }
}