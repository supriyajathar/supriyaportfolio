import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";

import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demo: <a href="https://supriyajathar.github.io/WeatherApp/">Demo</a>,
      code:<a href="https://github.com/supriyajathar/WeatherApp.git">Code</a>,

     
    },
    {
      id: 2,
      src: reactParallax,
      demo: <a href="https://supriyajathar.github.io/EduTech/">Demo</a>,
      code:<a href="https://github.com/supriyajathar/EduTech.git">Code</a>,
    },
    {
      id: 3,
      src: navbar,
      demo: <a href="https://supriyajathar.github.io/EduTech/">Demo</a>,
      code:<a href="https://github.com/supriyajathar/EduTech.git">Code</a>,
    },
    // {
    //   id: 4,
    //   src: reactSmooth,
    // },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen overflow"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 
               {demo}
                
                
  
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                {code}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
