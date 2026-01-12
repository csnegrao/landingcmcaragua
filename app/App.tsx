import { HeroSection } from './components/HeroSection';
import { CourseContentSection } from './components/CourseContentSection';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CurriculumSection } from './components/CurriculumSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CourseContentSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CurriculumSection />
      <GuaranteeSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
