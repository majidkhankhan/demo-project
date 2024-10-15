import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Weather() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
 <HelmetProvider>
 <Helmet>
        <title>मौसम | शब्द टुडे | हिंदी न्यूज़</title>
        <link rel="canonical" href="https://www.sadaivsatya.com/Wether" />
      </Helmet>
 
 </HelmetProvider>
   
    <div className='bg-black'>
      <div className="container">
        <div className="text-center">
          <div className="elfsight-app-11a501a3-16f0-432b-84dd-a4961e8859cd" data-elfsight-app-lazy></div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Weather;
