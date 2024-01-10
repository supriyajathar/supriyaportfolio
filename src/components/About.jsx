import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg  p-4  mx-auto  flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
  I am supriya jathar ,a dedicated full-stack developer with knee interest
  in creafting responsive and interactive websites.Currently in my third 
  of study pursuing a degree in Information technology at DYPCOE pune,I am 
  commited to combining theoretical knowledge with practical skill to contribute 
  effectivly to the dynamic field of web development.<br></br><br></br>
  I take pride in my academic achievements, securing 96.33% in the Higher State Board exam in 2021 and 90.40% in the Maharashtra State Board exam in 2019.
  am enthusiastic about leveraging technology to solve real-world problems and eager to contribute my skills and knowledge to innovative projects. Feel free to reach out for discussions, or just to connect!
        </p>

        <br />

        <p className="text-xl">
         
        </p>
      </div>
    </div>
  );
};

export default About;
