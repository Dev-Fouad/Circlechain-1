import "./App.scss";
import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import Navigation from "./Components/Navigation";
import Onboarding from "./Components/Onboarding";
import Hero from "./Components/Hero";
import Market from "./Components/Market";
import Message from "./Components/Message";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Onboarding />
      <Hero/>
      <Market />
      <Message />
      <Footer />
    </div>
  );
}

export default App;
