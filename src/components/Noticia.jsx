import React,{ useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import getApi from '../Api.js'

export default function Noticia() {
  const [noticia, setNoticia] = useState('hello')
  const {slug} = useParams();

  useEffect(() => {
    getApi(`noticias/${slug}`)
      .then((data) => data.json())
      .then((res)=>setNoticia(res[0]))
  }, [slug]);



  return (
    <div>
      <img src={noticia.imagem} alt={noticia.titulo} />
      <h2>{noticia.titulo}</h2>
      <p>{noticia.conteudo}</p>
    </div>
  )
}
