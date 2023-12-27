import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { URL_CHAMPIONS, URL_CHAMPIONS_IMAGE } from '../api/apiRest';
import ChampionDetails from './ChampionDetails'; // 
import "../styles/Champions.css"

const Champions = () => {
  const [championData, setChampionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL_CHAMPIONS);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setChampionData(data);

      } catch (error) {
        console.error('Error fetching champion data:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <>
      <h1>sanjkafhukaf</h1>
      {championData ? (
        <div className='champions-grid'>

          {Object.values(championData.data).slice(0, 50).map((champion) => (
            <Link to={`/${champion.id}`} key={champion.id} className='a'>
              <div className='champion-item'>
                <div className='champion-img-container'>
                  <img src={URL_CHAMPIONS_IMAGE + champion.id + '_0.jpg'} alt="" className='champions-image' />
                </div>
                <h3>{champion.name.toUpperCase()}</h3>
              </div>
            </Link>
          ))}

        </div>
      ) : (
        <p>Loading...</p>
      )}
      {championData && championData.data && championData.keys && (
        <ChampionDetails championID={championData.data[championData.keys[0]].id} />
      )}
    </>
  );

};

export default Champions;
