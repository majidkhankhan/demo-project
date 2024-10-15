import React, { useEffect } from 'react';

const Translate = () => {
  useEffect(() => {
    const googleTranslateElementInit = () => {
      // Initialize Google Translate widget
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    };

    // Load Google Translate API script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up: Remove the script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="google_translate_element"></div>
    </div>
  );
};

export default Translate;
