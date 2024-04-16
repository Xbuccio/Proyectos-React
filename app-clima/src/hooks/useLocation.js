import { useEffect, useState } from 'react';

const APIKEY = "9pkepgi0tyko1024n23zab5b2c2iepyfwhpcafke";
const API = "https://www.meteosource.com/api/v1/free/";

function useLocation() {
  const [lugar, setLugar] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseLugar = await fetch(
          `${API}find_places_prefix?text=buenosaires&language=en&key=${APIKEY}`
        );
        const dataLugar = await responseLugar.json();
        setLugar(dataLugar[0]);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchData();
  }, []);

  return lugar;
}

export default useLocation;
