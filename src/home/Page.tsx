import { useState } from 'react';
import MyVantaComponent from "../components/ui/background";
import ClickSpark from "../components/elements/Click";
import RippleButton from "../components/elements/Btn1";
import WhatWeDo from "../whatwedo.tsx/Page";
import myImg1 from '../assets/images/headphone.png';
import myImg2 from '../assets/images/headphone_vector.png';

export default function Home() {
  const [imgSrc, setImgSrc] = useState(myImg1);

  const handleMouseEnter = () => {
    setImgSrc(myImg2);
  };
  const handleMouseLeave = () => {
    setImgSrc(myImg1);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-black flex justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <MyVantaComponent />
        </div>
        <div className="relative w-full flex flex-col items-center justify-center min-h-screen z-[15] px-2 sm:px-4">
          <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center z-[2]">
              <div className="relative flex w-full flex-col items-center justify-center flex-1 py-12">
                <div className="relative w-full flex flex-col items-center justify-center mt-2 sm:mt-6 md:mt-18">
                  <div 
                    className="relative flex flex-col items-center justify-start w-full max-w-5xl mx-auto py-8 lg:py-16 min-h-[300px] sm:min-h-[400px]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <h1 
                      className="text-stroke-1 bg-clip-text bg-gradient-to-b from-white via-emerald-400 to-emerald-900 text-transparent font-extrabold text-center select-none leading-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl z-0 relative"
                    >
                      YOUR MOOD
                    </h1>
                    <h1 
                      className="text-stroke-1 bg-clip-text bg-gradient-to-b from-white via-emerald-400 to-emerald-900 text-transparent font-extrabold text-center select-none leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-8xl z-0 relative px-2 mt-2 sm:mt-6"
                    >
                      HAS A SOUNDTRACK
                    </h1>
                    <div className="absolute inset-0 flex justify-center items-center w-full z-[10] pointer-events-none">
                      <img
                        src={imgSrc}
                        className="w-[80%] max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px] object-contain select-none drop-shadow-2xl transition-all duration-300"
                        alt="Headphone"
                      />
                    </div>
                  </div>
                  <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6 text-center px-4 max-w-[95vw] sm:max-w-[85vw] md:max-w-[65vw] z-10 relative">
                    Songs chosen to calm your mind and match your mood.
                  </p>
                  <RippleButton
                    className="font-jost mt-8 duration-[600ms] relative flex items-center justify-center overflow-hidden rounded-full bg-[#036041] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg md:text-xl font-extrabold text-[#D0E3DD] transition hover:text-white hover:bg-[#D0E3DD] hover:shadow-lg hover:shadow-[#D0E3DD] hover:scale-105 uppercase z-10"
                    onClick={() => window.location.href = '/song'}
                  >
                    FIND YOUR SONG
                  </RippleButton>
                </div>
              </div>
            </div>
          </ClickSpark>
        </div>
      </div>
      <div className="relative w-full min-h-[60vh] md:h-screen z-[10] flex flex-col items-center justify-start flex-1 mb-25">
        <WhatWeDo />
      </div>
    </>
  );
}
