import { useState } from 'react';
import { Navigation } from './Navigation/Navigation';
import LoadGoogleMapsScript from './components/LoadGoogleMapsScript/LoadGoogleMapsScript';


// const options = {method: 'GET', headers: {accept: 'application/json'}};
// fetch(`https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=QsbR1ArKHFa6tTqqxrKG5SOJw7RFmLMQ`, options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));



function App() {

  const [isMapsLoaded, setMapsLoaded] = useState(false);

  const handleMapLoad = () => {
    console.log('Google Maps script loaded successfully');
    setMapsLoaded(true);
  };

  return (
    <>
      <LoadGoogleMapsScript onLoad={handleMapLoad} />
      {isMapsLoaded && <Navigation />}
    </>
  );
}

export default App;
