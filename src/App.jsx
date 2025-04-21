import Header from "./components/Header.jsx"; // <-- add this line
import Button from "./components/Button.jsx";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Hero from "./components/Hero.jsx";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
