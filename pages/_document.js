import Document, { Html, Head, Main, NextScript } from 'next/document';



export default class MyDocument extends Document {
  render() {
    return <Html lang='en'>
      <Head />
      <body>
        <div id='notifications'></div> 
        <Main />
        <NextScript />
      </body>
    </Html>
  }
}
