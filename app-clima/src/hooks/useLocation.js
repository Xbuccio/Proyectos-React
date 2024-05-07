import { useEffect, useState } from 'react';

const APIKEY = "9pkepgi0tyko1024n23zab5b2c2iepyfwhpcafke";
const API = "https://www.meteosource.com/api/v1/free/";

function useLocation(formValue) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let locationData;
        if (formValue) {
          locationData = await fetchLocationData(formValue);
        } else {
          locationData = await fetchGeolocationData();
        }
        setLocation(locationData);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchData();
  }, [formValue]);

  return location;
}

async function fetchLocationData(value) {
  const responseLocation = await fetch(
    `${API}find_places_prefix?text=${value}&language=en&key=${APIKEY}`
  );
  const dataLocation = await responseLocation.json();
  return dataLocation[0];
}

async function fetchGeolocationData() {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
          const data = await response.json();
          const city = data.address.state;

          const responseLocation = await fetch(
            `${API}find_places_prefix?text=${city}&language=en&key=${APIKEY}`
          );
          const dataLocation = await responseLocation.json();
          resolve(dataLocation[0]);
        },
        (error) => {
          reject(error);
        }
      );
    });
  } else {
    console.error('Geolocation is not supported by this browser.');
    return null;
  }
}

export default useLocation;
