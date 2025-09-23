
import './App.css';
import Home from './components/Home';

const App=() => {
  const apikey = process.env.REACT_APP_WEATHER_API;
  return (
    <div>
      <Home apikey={apikey}/>
    </div>
    
  );
}

export default App;
