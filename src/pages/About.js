import React from 'react'
import Wheel from '../images/CycleWheel.jpeg'
import Girl1 from '../images/Girl1.png'
import Desk from '../images/Desk.jpg'
import Girl2 from '../images/Girllook.jpg'
import sky from '../images/sky.png'

<link href="https://fonts.googleapis.com/css?family=Bungee+Inline" rel="stylesheet"></link>


const About =() => {
    return(
        <>
        <div className="App m-auto ">
            <h1 className='Heading text-center mt-[30px] text-[40px] max-sm:text-[30px]'><strong>Innovation </strong>in Online Learning
            </h1><br></br>
          </div>
         
          <div className="main w-[1000px] h-[950px] block m-[auto]  relative md:w-[700px] md:h-[550px] max-sm:w-[420px] ">
            <img src={sky} alt='blue-bg' className='absolute w-full h-[600px] -z-10 bottom-[2%] right-[12%] max-lg:right-[0%] max-sm:hidden  ' />
          <div className="grid-container flex text-[white] max-sm:grid max-sm:grid-cols-1">
            <div>
            <img src={Girl1} className="img1 max-sm:w-[350px] sm:h-[250px] max-sm:block max-sm:m-[auto] "width="670px"  alt='girl-img ' />
            </div>
            <div className="text max-w-[350px] h-[205px] p-[20px] bg-slate-900 w-[300px] md:h-[170px] max-sm:w-[350px] sm:h-[250px] max-sm:block max-sm:m-[auto]">
              <h3>Mordern <strong>Education</strong> </h3>
              <p>dfdkjd  dfkjkfdfkdjsdn dsfjshnvs sdisvjsdijvs sdivsdi
              </p>
            </div>
            <img src={Wheel} className="img2 w-[300px] h-[205px] md:h-[170px]  max-sm:hidden " alt='wheel-img ' />
            </div>
            <div className="grid2 flex max-sm:grid max-sm:grid-cols-1 ">
              <div className="girl2">
            <img src={Girl2} className="img3 w-[540px] h-[205px] md:h-[160px] md:w-[200px] max-sm:w-[350px] sm:h-[250px] max-sm:block max-sm:m-[auto]" alt='girl-2' />
            </div>
            <div className="text p-[20px] bg-slate-900 w-[230px] h-[205px] text-[white] md:h-[160px] md:w-[200px] max-sm:w-[350px] sm:h-[250px] max-sm:block max-sm:m-[auto]">
              <h3>Mordern <strong>Education</strong></h3>
              <p>dfdkjd  dfkjkfdfkdjsdn dsfjshnvs sdisvjsdijvs sdivsdi
              </p>
            </div>
            <div className="desk ">
            <img src={Desk} className="img4 w-[432px] h-[345px] object-cover mt-[-32.3%] ml-[0.01%] md:w-[385px] md:h-[270px] max-sm:w-[350px] max-sm:h-[250px] max-sm:block max-sm:m-[auto]" alt='desk-img' />
            </div>
            </div>
            </div>
    
    
            <div className="Container-2 relative mb-[40px] max-sm:w-[fit-content]">
              <div className="halfCircle rounded-br-[750px] rounded-bl-[750px] m-[auto] mt-[0px] mb-[60px] w-[850px] h-[400px] bg-[#89D0CA] text-center md:w-[700px] md:rounded-br-[650px] md:rounded-bl-[650px] md:h-[340px] max-sm:w-[420px] max-sm:rounded-br-[700px]  max-sm:block max-sm:m-[auto] max-sm:rounded-bl-[700px] max-sm:h-[220px] max-sm:mt-[50%] ">
                <h1 className='cont2head  pt-[30px] text-[35px] text-[white] text-[center]'><strong>Education & Learning</strong> </h1>
                <p className='tag  text-[white] text-[center]'>lorema aso epsuin </p>
              </div>
    
              <div className="card flex flex-wrap gap-[20px] justify-center mt-[-300px] md:mt-[-250px] max-sm:mt-[-90px] ">
                <div className="Card1 p-[20px] w-[300px] bg-[#D6D6D6] md:w-[170px] lg:w-[250px] max-sm:w-[270px]">
                  <div className="cardCirc ml-[20px] w-[90px] h-[90px] rounded-[50%] bg-[#71b9b3] text-[white] text-center md:w-[60px] md:h-[60px]">
                    <h1 className=' pt-[24px] text-[30px] md:pt-[10px]'><strong>01</strong></h1></div>
                  <div className='Teaching pl-[20px]'>
                    <h2><strong>Teaching</strong></h2>
                    <p>hwlo dakjsdkdfkjk asdkjjkfadhfak adfdj</p><br />
                    <a className='a pb-[10px]' href='/'>LEARN MORE</a>
                  </div>
                </div>
    
                <div className="Card2 p-[20px]  bg-[#D6D6D6] md:w-[170px] lg:w-[250px] max-sm:w-[270px]">
                  <div className="cardCirc ml-[20px] w-[90px] h-[90px] md:w-[60px] md:h-[60px] rounded-[50%] bg-[#71b9b3] text-[white] text-center"><h1 className=' pt-[24px] text-[30px] md:pt-[10px]'><strong>02</strong></h1></div>
                  <div className='Innovations pl-[20px]'>
                    <h2><strong>Innovations</strong></h2>
                    <p>hwlo dakjsdkdfkjk asdkjjkfadhfak adfdj</p><br />
                    <a className='a pb-[10px]' href='/'>LEARN MORE</a>
                  </div>
                </div>
    
                <div className="Card3 p-[20px]  bg-[#D6D6D6] md:w-[170px] lg:w-[250px] max-sm:w-[270px]">
                  <div className="cardCirc ml-[20px] w-[90px] h-[90px] rounded-[50%] bg-[#71b9b3] text-[white] text-center md:w-[60px] md:h-[60px]"><h1 className=' pt-[24px] text-[30px] md:pt-[10px]'><strong>03</strong></h1></div>
                  <div className='Students pl-[20px]'>
                    <h2><strong>Students</strong></h2>
                    <p>hwlo dakjsdkdfkjk asdkjjkfadhfak adfdj</p><br />
                    <a className='a pb-[10px]' href='/'>LEARN MORE</a>
                  </div>
                </div>
    
                <div className="Card4 p-[20px]  bg-[#D6D6D6] md:w-[170px] lg:w-[250px] max-sm:w-[270px]  ">
                  <div className="cardCirc ml-[20px] w-[90px] h-[90px] rounded-[50%] bg-[#71b9b3] text-[white] text-center md:w-[60px] md:h-[60px] ">
                    <h1 className=' pt-[24px] text-[30px] md:pt-[10px]'><strong>04</strong></h1></div>
                  <div className='Resource pl-[20px]'>
                    <h2><strong>Resourse</strong></h2>
                    <p>hwlo dakjsdkdfkjk asdkjjkfadhfak adfdj</p><br />
                    <a className='a pb-[10px]' href='/'>LEARN MORE</a>
                  </div>
                </div>
              </div>
            </div>
        

        
        </>
    )
}

export default About