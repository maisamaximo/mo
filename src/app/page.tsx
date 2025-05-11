import Hero from '@/components/Hero'
import TourList from '@/components/TourList'
import DestinationSection from '@/components/DestinationSection'
import VideoSection from '@/components/VideoSection'
import MustSeeInMadeira from '@/components/MustSeeInMadeira'
import AboutSection from '@/components/AboutSection'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import BlogSection from '@/components/BlogSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <TourList />
      <DestinationSection />
      <VideoSection />
      <MustSeeInMadeira />
      <AboutSection />
      <WhyUs />
      <Testimonials />
      <BlogSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
