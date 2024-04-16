import  { useState, useEffect } from 'react';

function App() {
  const [lugarBase, setLugarBase] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
            .then(response => response.json())
            .then(data => {
              const fullAddress = data.display_name;
              const city = fullAddress.split(',')[2].trim(); // Obtiene la parte de la ciudad sin espacios
              setLugarBase(city);
            })
            .catch(error => {
              console.error('Error fetching location:', error);
            });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
    </div>
  );
}

export default App;

