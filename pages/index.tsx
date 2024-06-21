import About from '../components/About';
import Coding from '../components/Coding';
import Contact from '../components/Contact';
import Landing from '../components/Landing';
import Layout, { name } from '../components/Layout';
import Music from '../components/Music'

export default function Home() {
  return (
    <Layout >
      <Landing />
      <About />
      <Coding />
      <Music />
      <Contact />      
    </Layout>
  );
}