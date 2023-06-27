import { useState, useEffect } from 'react'

import Notification from '../ui/notification'

import classes from './contact-form.module.css'

async function sendContactData(contactDetails: unknown) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()

  if(!res.ok) {
    throw new Error(data.message || 'Something wrong')
  }
}

export default function ContactForm() {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [requestStatus, setRequestStatus] = useState<'pending' | 'success' | 'error' | undefined>()
  const [notification, setNotification] = useState(null)
  const [requestError, setRequestError] = useState(null)

  async function sendMessageHandler(e: any) {
    e.preventDefault()
    setRequestStatus('pending')

    try {
      await sendContactData({email, name, message})
      setRequestStatus('success')

      setEmail('')
      setName('')
      setMessage('')
    } catch (error) {
      setRequestStatus('error')
      setRequestError(error.message)
    }

  }

  useEffect(() => {
    if(requestStatus === 'pending') {
      return setNotification({
        status: 'pending',
        title: 'sending message...',
        message: 'Your message is on its way'
      })
    } else if (requestStatus === 'success') {
      return setNotification({
        status: 'success',
        title: 'Success',
        message: 'Your message received'
      })
    } else if (requestStatus === 'error') {
      return setNotification({
        status: 'error',
        title: 'Error',
        message: requestError
      })
    }

    return

  }, [requestStatus])

  useEffect(() => {
    let timer

    if(requestStatus === 'success' || requestStatus === 'error') {
      timer = setTimeout(() => {
        setNotification(null)
        setRequestStatus(null)
      }, 3000)
    }

    return () => clearTimeout(timer)
  }, [requestStatus])

  return <section className={classes.contact}>
    <h1>How can I help you?</h1>
    <form className={classes.form} onSubmit={sendMessageHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='email'>Your email</label>
          <input type='email' id='email' value={email} onChange={(e => setEmail(e.target.value))} required/>
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>Your name</label>
          <input type='text' id='name' value={name} onChange={(e => setName(e.target.value))} required/>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your message</label>
          <textarea id='message' rows={5} value={message} onChange={(e => setMessage(e.target.value))} required/>
        </div>
        <div className={classes.actions}>
          <button type='submit'>Send message</button>
        </div>
      </div>
    </form>
    {notification && <Notification {...notification} />}
  </section>
}