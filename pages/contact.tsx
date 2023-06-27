import Head from 'next/head'

import ContactForm from '../components/contact/contact-form';

export default function ContactPage() {
  return <>
    <Head>
      <title>contact me</title>
      <meta name='description' content='send a message' />
    </Head>
    <ContactForm />
  </>
}