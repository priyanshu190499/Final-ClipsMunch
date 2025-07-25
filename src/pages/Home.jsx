import HeroSection from '../components/HeroSection'
import FormatStyles from '../components/FormatStyles'
import AtGlance from '../components/AtGlance'
import Subsciption from '../components/Subsciption'
import FormatStyleBento from "../components/Format"
import MembershipBenefits from '../components/MembershipBenefits'
import WhyBookCall from '../components/BookCall'
import ProcessSteps from '../components/ProcessSteps'
import SubscriptionPlans from '../components/SubscriptionPlans'
import KnowMoreSection from '../components/KnowMoreSection'
import BlogsSection from "../components/BlogSecton"
import Feedback from '../components/Feedback'
import ContentTeam from '../components/ContentTeam'

export default function Home({ openPopup }) {
  return (
    <main>
      <HeroSection openPopup={ openPopup } />
     
      <FormatStyles />
      
      <AtGlance />
      <ProcessSteps/>
      <FormatStyleBento/>
      <MembershipBenefits/>
      <ContentTeam/>
      <Subsciption />
      <SubscriptionPlans/>
      <Feedback/>
      <WhyBookCall/>
      <KnowMoreSection/>
      <BlogsSection/>
      
      
     
    </main>
  )
}
