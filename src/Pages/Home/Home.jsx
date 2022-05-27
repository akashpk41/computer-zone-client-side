import Contact from "../Components/Contact";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Parts from "./Parts/Parts";
import PCBuilding from "./PCBuilding";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <main className="">
      <Banner />
      <Parts />
      <Reviews />
      <BusinessSummary />
      <PCBuilding />
      <Contact />
    </main>
  );
};

export default Home;
