import { useEffect } from 'react';

const LoadGoogleMapsScript = ({ onLoad }: any) => {
  useEffect(() => {
    if (!window.google) {
      let googleScript = document.getElementById('googleMaps');
      if (!googleScript) {
        const script = document.createElement('script');
        script.id = 'googleMaps';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_mapsKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.addEventListener('load', onLoad);
      }
    } else {
      onLoad();
    }
  }, [onLoad]);

  return null;
};

export default LoadGoogleMapsScript;