import { FiArrowUp } from 'react-icons/fi'

import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer-inner'>
        <a className='brand' href='#top' aria-label='Voltar ao início'>
          RC<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} Reginaldo Correa. Feito com React, café e
          atenção aos detalhes.
        </p>
        <a className='footer-top' href='#top'>
          Voltar ao topo <FiArrowUp size={15} />
        </a>
      </div>
    </footer>
  )
}
