
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
            <TwoExtraSection />
            <TwoExtraSection />
          </main>
     );
};

export default Home;