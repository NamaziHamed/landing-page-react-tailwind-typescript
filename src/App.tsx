import Layout from "./components/layout";
import Hero from "./components/sections/hero";
import Brands from "./components/sections/Brands";
import Services from "./components/sections/services";
import About from "./components/sections/aboutUs";
import Pricing from "./components/sections/pricing";
import CallToAction from './components/sections/callToAction'

function App() {
  return (
    <Layout title="Hamed Devs.co">
      <Hero />
      <Brands />
      <Services />
      <About />
      <Pricing />
      <CallToAction />
    </Layout>
  );
}
export default App;
