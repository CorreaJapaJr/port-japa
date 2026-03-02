import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiAlertCircle, FiCheck, FiMail, FiPhone, FiSend } from 'react-icons/fi';
import { personalInfo } from '../data';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [errors, setErrors] = useState({})

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
    // Limpa mensagem de status
    if (status.message) {
      setStatus({ type: '', message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      setStatus({
        type: 'error',
        message: 'Por favor, corrija os erros no formulário'
      })
      return
    }

    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      // Simula envio de e-mail (substitua com EmailJS ou sua API)
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Para usar EmailJS, descomente e configure:
      /*
      const emailjs = (await import('emailjs-com')).default
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Reginaldo'
        },
        'YOUR_PUBLIC_KEY'
      )
      */

      setStatus({
        type: 'success',
        message: '✨ Mensagem enviada com sucesso! Entrarei em contato em breve.'
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Erro ao enviar:', error)
      setStatus({
        type: 'error',
        message: '❌ Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.'
      })
    } finally {
      setIsLoading(false)
    }
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
            {status.message && (
              <motion.div
                className={`form-status ${status.type}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status.type === 'success' ? <FiCheck /> : <FiAlertCircle />}
                <span>{status.message}</span>
              </motion.div>
            )}

            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome completo"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                placeholder="Conte-me sobre seu projeto ou ideia..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
              <span className="char-count">{formData.message.length} caracteres</span>
            </div>

            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  Enviando...
                </>
              ) : (
                <>
                  <FiSend />
                  Enviar Mensagem
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
