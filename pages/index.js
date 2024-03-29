import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Skills from '../components/Skills'
import Links from './Links'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio | Web Developer</title>
        <meta name="description" content="I’m a Web Developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href='../public/assets/AL.png' />
      </Head>
    <Main />
    <About />
    <Skills />
    <Contact />
    </div>
  )
}
