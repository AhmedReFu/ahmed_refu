import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {

  const sectionRef=useRef(null);
  const project1Ref= useRef(null)
  const project2Ref= useRef(null)
  const project3Ref = useRef(null)
  
  



  useGSAP(() => {

    const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
    projects.forEach((card, index) => {
      gsap.fromTo(
        card, {
        y: 50,
        opacity: 0
      },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100'
          }
        })
    })

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 })
    
  },[])

  return (
    <section id='work' ref={sectionRef} className="app-showcase">
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* LEFT */}
          <div className='first-project-wrapper' ref={project1Ref}>
            <div className='image-wrapper'>
              <img src="/images/project1.png" alt="Computer Parts World" />

            </div>
            <div className='text-content'><h2>On-Demand 'Computer Parts World' Makes Building Your Own PC Easier Than Ever with Its User-Friendly Website.</h2>
            <p className="text-white-50 md:text-xl">An Website Built With React, NodeJS, TailwindCSS For A Fast, User-Friendly Experience.</p></div>
          </div>
          {/*RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Goldmines Picture" />
              </div>
              <h2>Movies Download Website Free - <a href="https://goldmines-nu.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline"> Visit</a></h2>
</div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="" />
              </div>
              <h2>PetShop Caring for Your Pets, Always and Forever - <a href="https://pet-shop-2023.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline"> Visit</a></h2>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection