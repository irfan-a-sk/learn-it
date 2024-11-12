import React from "react";
import contact from "../images/Contact.jpg";

const Contact = () => {
  return (
    <>
      <main className="bg-[#89D0CA] p-[20px] max-sm:p-[10px] ">
        <form className="">
          <div className="form bg-[#ffffff] w-[600px] xl:w-[650px] h-[600px] block mb-[100px]  ml-[40%] mr-[100px] max-sm:m-[auto] max-sm:w-[300px] md:w-[400px] md:ml-[42%] lg:w-[600px] lg:ml-[38%] md:h-[530px]">
            <h1 className="form-Head text-center pt-[30px] text-[30px]   ">
              CONTACT US
            </h1>
            <br />
            <div className="form-content flex flex-col items-end w-[600px] pr-[50px] lg:w-[550px] xl:w-[600px] max-sm:pr-[10px] max-sm:w-[300px] md:w-[390px] md:pr-[10px]  md:h-[] ">
              <input
                className="inputs border-b-[1px] border-solid border-[black] outline-none mt-[30px] w-[370px] max-sm:w-[270px]  md:w-[300px]  xl:w-[450px] lg:w-[420px]"
                type="text"
                placeholder="Enter Your Name"
              ></input>
              <br />
              <input
                className="inputs border-b-[1px] border-solid border-[black] outline-none mt-[30px] w-[370px] max-sm:w-[270px] md:w-[300px]  xl:w-[450px] lg:w-[420px] "
                type="Email"
                placeholder="Enter Your Email"
              ></input>
              <br />
              <textarea
                className="msg  border-b-[1px] border-solid border-[black] outline-none mt-[30px]  w-[370px] max-sm:w-[270px] md:w-[300px] xl:w-[450px] lg:w-[420px]"
                type="text"
                placeholder="Enter Your Messege"
              ></textarea>
            </div>
            <br />
            <button
              className="btn m-[auto] mt-[20px] border-[1px] border-solid border-[black] block p-[15px] w-[170px] hover:bg-[#71b9b3]"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>

        <img
          className=" w-[450px]  top-[26%] left-[17%] absolute max-sm:hidden md:w-[320px] md:left-[10%] md:top-[35%] xl:w-[430px] xl:left-[17%] xl:top-[25%] lg:w-[450px] lg:h-[550px] lg:left-[4%] lg:top-[29%] md:w-[370px] md:h-[480px] md:left-[3%]"
          src={contact}
          alt="contact-img"
        />

        <div className="contact-us relative max-sm:mt-[450px] md:mt-[180px]">
          <div className="contact-info flex   max-sm:flex-wrap justify-center gap-[50px] p-[10px] bg-[#292D33] text-[#fff] w-[50%] max-sm:w-[300px] m-[auto] absolute bottom-[-5%]  left-[0] right-[0] mt-[50px] xl:w-[60%] lg:w-[85%] md:w-[630px]  ">
            <div className="contact-section text-center w-[220px]">
              <i className="phone-icon text-[24px] mb-[10px]">&#9742;</i>
              <h2>CALL US</h2>
              <p>1 (234) 567-891, 1 (234) 987-654</p>
            </div>
            <div className="contact-section text-center w-[200px]">
              <i className="location-icon text-[24px] mb-[10px]">&#128202;</i>
              <h2 className="mb-[10px]">LOCATION</h2>
              <p className="m-[0]">
                121 Rock Street, 21 Avenue, New York, NY 92103-9000
              </p>
            </div>
            <div className="contact-section text-center w-[200px] ">
              <i className="clock-icon  text-[24px] mb-[10px] ">&#128336;</i>
              <h2>BUSINESS HOURS</h2>
              <p>Mon - Fri ...... 10 am - 8 pm, Sat, Sun ...... Closed</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
