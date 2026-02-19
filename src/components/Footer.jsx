import { FiHeart } from 'react-icons/fi'
import { personalInfo } from '../data'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Desenvolvido com <FiHeart className="heart-icon" /> por {personalInfo.name}
          </p>
          <p className="footer-copyright">
            © {currentYear} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
