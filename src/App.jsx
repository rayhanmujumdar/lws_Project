import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import TaskBoard from "./components/TaskBoard";
function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <HeroSection />
        <TaskBoard />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
