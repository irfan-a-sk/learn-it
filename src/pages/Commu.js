import React from 'react'
import office from "../images/office.png";
import subscrip from "../images/subscrip.webp";
import group from "../images/group.jpg";
import writing from "../images/writing.jpg";
import tech from "../images/tech.webp";
import Anytime from "../images/anytime learn.jpg";

function Commu() {
  return (
    <>
     <header className='text-center mb-[20px]'>
        <h2>Offerings Tailored to Your Goals</h2>
        <p>We offer a wide range of courses and programs to help you upskill, reskill, increase employee engagement and invest in high potential team members.</p>
    </header>
    <main>
        <section className="head flex flex-wrap justify-between">
            <div classname="card w-[250px] mb-[20px] text-center p-[20px] border-[1px] border-[solid] border-[#ccc] radius-[5px]">
                <img classname=' img max-w-[100%]' src={office} alt="AI Icon"/>
                <h3>Comprehensive Learning Solutions & Program Design</h3>
                <p>Ready to go & tailored learning</p>
                <a href="#">Learn More →</a>
            </div>
            <div classname="card w-[250px] mb-[20px] text-center p-[20px] border-[1px] border-[solid] border-[#ccc] radius-[5px]">
                <img classname=' img max-w-[100%]' src={subscrip} alt="Team Pass Icon"/>
                <h3>Training Subscription Packages</h3>
                <p>Unlimited access to virtual training</p>
                <a href="#">Learn More →</a>
            </div>
            <div classname="card w-[250px] mb-[20px] text-center p-[20px] border-[1px] border-[solid] border-[#ccc] radius-[5px]">
                <img classname=' img max-w-[100%]' src={group} alt="Group classnamees Icon"/>
                <h3>Private Group classnamees & Workshops</h3>
                <p>Prebuilt or redesigned with your needs in mind</p>
                <a href="#">Learn More →</a>
            </div>
            <div classname="card w-[250px] mb-[20px] text-center p-[20px] border-[1px] border-[solid] border-[#ccc] radius-[5px]">
                <img classname=' img max-w-[100%]' src={writing} alt="Lab Cohorts Icon"/>
                <h3>Learning Lab Cohorts</h3>
                <p>5-week training programs designed to upskill your team</p>
                <a href="#">Learn More →</a>
            </div>
            <div classname="card w-[250px] mb-[20px] text-center p-[20px] border-[1px] border-[solid] border-[#ccc] radius-[5px]">
                <img classname=' img max-w-[100%]' src={tech} alt="New Technology Icon"/>
                <h3>New Technology Adoption Programs</h3>
                <p>Train employees on new software</p>
                <a href="#">Learn More →</a>
            </div>
            <div classname="card w-[250px] mb-[20px] text-center p-[20px] border-[1px] border-[solid] border-[#ccc] radius-[5px]">
                <img classname=' img max-w-[100%]' src={Anytime} alt="Learnit Anytime Icon"/>
                <h3>Learnit Anytime</h3>
                <p>1000+ high-quality training videos available 24/7 from anywhere</p>
                <a href="#">Learn More →</a>
            </div>
        </section>
    </main>
    </>
  )
}

export default Commu
