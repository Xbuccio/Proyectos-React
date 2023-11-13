import { useEffect, useState } from 'react'
import css from './card.module.scss'
import axios from 'axios'
import { URL_ESPECIES, URL_POKEMON } from '../../../api/apiRest.js'

export default function Card({ card }) {

  const [itemPokemon, setItemPokemon] = useState({})
  const [especiePokemon, setEspeciePokemon] = useState({})

  useEffect(() => {
    const dataPokemon = async () => {
      const api = await axios.get(`${URL_POKEMON}/${card.name}`)

      setItemPokemon(api.data)
    }

    dataPokemon()
  }, [])

  useEffect(() => {
    const dataEspeciePokemon = async () => {

      const URL = card.url.split('/')
      const api = await axios.get(`${URL_ESPECIES}/${URL[6]}`)

      setEspeciePokemon(api.data)
    }

    dataEspeciePokemon()
  }, [])

  return (
    <div className={css.card}>
      <img
        src={itemPokemon?.sprites?.other["official-artwork"]?.front_default}
        alt="pokemon"
        className={css.img_poke}
      />
      <div className={`bg-${especiePokemon?.color?.name} ${css.sub_card}`} >
        <strong className={css.id_card}> 011 </strong>
        <strong className={css.name_card}> name </strong>
        <h4 className={css.altura_card}> 10cm </h4>
        <h4 className={css.peso_card}> peso </h4>
        <h4 className={css.habitat_card}> habitat </h4>

        <div className={css.div_stats}>
          {itemPokemon?.stats?.map((sta, index) => {
            return <h6 key={index} className={css.item_stats}>
              <span className={css.name}> {sta.stat.name}  </span>
              <progress value={sta.base_stat} max={110}></progress>
              <span className={css.numero}> {sta.base_stat} </span>
            </h6>
          })}
        </div>

        <div  className={css.div_type_color}>
          {itemPokemon?.types?.map((ti, index) => {
            return <h6 key={index} className={`color-${ti.type.name} ${css.color_type}`}> 
              {" "}
              {ti.type.name}{" "}
            </h6>
          })}
        </div>
      </div>
    </div>
  )
}
