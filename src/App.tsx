import { Navigation } from './Navigation/Navigation';


// const options = {method: 'GET', headers: {accept: 'application/json'}};
// fetch(`https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=QsbR1ArKHFa6tTqqxrKG5SOJw7RFmLMQ`, options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

function App() {
  return (
    <Navigation />
  );
}

export default App;
