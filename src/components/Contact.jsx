import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiPhone, FiSend } from 'react-icons/fi';
import { personalInfo } from '../data';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implementar lógica de envio (ex: EmailJS, FormSpree, etc)
    console.log('Form submitted:', formData)
    alert('Mensagem enviada com sucesso!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Entre em Contato</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-subtitle">Vamos trabalhar juntos!</h3>
            <p className="contact-text">
              Estou sempre aberto a novos projetos e oportunidades.
              Entre em contato e vamos criar algo incrível!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <FiMail className="contact-icon" />
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Reginaldo da Rosa Correa Junior"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Seu Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Sua Mensagem"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiSend /> Enviar Mensagem
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
