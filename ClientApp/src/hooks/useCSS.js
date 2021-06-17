import { useEffect } from 'react';

const useCSS = url => {
  useEffect(() => {
    const link = document.createElement('link');

    link.href = url;
    link.rel = "stylesheet";
    link.type = "text/css";

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    }
  }, [url]);
};


export default useCSS;
