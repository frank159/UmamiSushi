import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import ChefePage from "./pages/ChefePage/ChefePage";
import DrinkPage from "./pages/drinkPage/drinkPage";
import FinalPage from "./pages/finalPage/finalPage";
import MainPage from "./pages/mainPage/mainPage";
import PresentationPage from "./pages/presentationPage/presentationPage";
import ServicePage from "./pages/servicePage/servicePage";

export default function Home() {
  return (
    <div>
      <Header />
      <MainPage />
      <PresentationPage />
      <DrinkPage />
      <ChefePage />
      <ServicePage />
      <FinalPage />
      <Footer />
    </div>
  );
}
