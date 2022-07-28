import React from 'react'
import '../Paginas/PaginasStyle.css'

const imagenConstruccion = require.context('../../images/banners', true);

const Nosotros = () => {
  return (
    <div>
      <img src={imagenConstruccion(`./Construccion.png`)} alt="pagina en construccion" className='construccion' />
    </div>
  )
}

export default Nosotros