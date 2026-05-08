import { useState } from 'react'

function App() {
const [city , setCity] = useState("");
const [weather , setWeather] = useState("");
  async function fetchWeather() {
        const url = `https://wttr.in/${city}?format=j1`;

        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error("City not found");
            }
            let data = await res.json();

setWeather(  data.current_condition[0].temp_C)

        }

        catch (error) {
            console.error("API Error:", error);

        }
    }



  return (
  <>
  <div className='container'>
    <label htmlFor="input" className='text'> get your temperature</label>
      <input className='input' type="search" onChange={ e => setCity(e.target.value) } />

<p className='text'>  the temperature at {city} is {weather}°C </p>
 <button className='weatherBtn'
    onClick={fetchWeather}>get your city weather</button>
</div>

  </>
  )
}

export default App
