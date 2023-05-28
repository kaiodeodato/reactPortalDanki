import React from 'react'


export default function NoticiaPrevia(props) {
  return (
    <div className='box-noticia-previa'>
        <h2>{props.titulo}</h2>
        <p>{props.conteudo}</p>
    </div>
  )
}
