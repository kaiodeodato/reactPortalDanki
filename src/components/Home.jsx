import React from 'react'
import { Link } from 'react-router-dom';
import NoticiaPrevia from './NoticiaPrevia';

export default function Home({noticias}) {
  return (
    <div className='container-noticia-previa'>

    {
      noticias?.map(item =>{
        return (
          <Link key={item.id}  to={'/reactPortalDanki/noticias/'+ item.slug} >
            <NoticiaPrevia
              titulo={item.titulo} 
              conteudo={item.conteudo}/>
          </Link>

        )
      })
    }
    <Link to={'https://portaldanki.onrender.com/admin/login'}>Admin</Link>
    </div>
  )
}
