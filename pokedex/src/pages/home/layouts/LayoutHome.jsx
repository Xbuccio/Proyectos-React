import { useEffect, useState } from 'react'
import Header from '../header/Header.jsx'
import css from './layoutHome.jsx'
import axios from 'axios'
import { URL_POKEMON } from '../../../api/apiRest.js'
import Card from '../cards/Card.jsx'

export default function LayoutHome() {

  const [arrayPokemon, setArrayPokemon] = useState([])
  console.log(arrayPokemon)

  useEffect(() => {
    const api = async () => {
      const apiPoke = await axios.get(`${URL_POKEMON}`)

      setArrayPokemon(apiPoke.data.results)
    }

    api()
  }, [])

  return (
    <div className={css.layout}>
      
      <Header />

      <div>
        {arrayPokemon.map((card, index) => {
          return <Card key={index} card={card} />;
        })}
      </div>
    </div>
  )
}
