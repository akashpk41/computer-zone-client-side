
import Contact from '../Components/Contact';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts/Parts';
import Reviews from './Reviews/Reviews';
import TwoExtraSection from './TwoExtraSection';

const Home = () => {


     return (
          <main className='' >
            <Banner />
            <Parts />
            <Reviews />
            <BusinessSummary />
         <Contact />
            <TwoExtraSection />
          </main>
     );
};

export default Home;