import './App.css';
import { Navigation } from './components/Navigation';


// const options = {method: 'GET', headers: {accept: 'application/json'}};
// fetch(`https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=QsbR1ArKHFa6tTqqxrKG5SOJw7RFmLMQ`, options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

function App() {
  return (
    <div className="container  bg-gray-100 rounded-lg shadow-md">
      <header className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Weather Dashboard</h1>
      </header>
    </div>
  );
}

export default App;
