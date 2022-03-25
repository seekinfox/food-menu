import Navbar from "./components/Navbar";
import style from "./App.module.scss";
import Varieties from "./components/Varieties";
import TopChefs from "./components/TopChefs";
import FoodGuides from "./components/FoodGuide";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <Varieties />
      <TopChefs />
      <FoodGuides />
      <Footer />
    </div>
  );
}
