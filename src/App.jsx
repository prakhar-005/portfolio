import Layout from "./components/layout/Layout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
    </Layout>
  );
}