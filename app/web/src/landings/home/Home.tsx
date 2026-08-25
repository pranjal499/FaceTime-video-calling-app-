import Navbar from './Navbar'
import Hero from './Hero'
import FeaturesGrid from './FeaturesGrid';

export default function Home () {
    return (
        <div className='bg-[#050505]'>
            <Navbar />
            <Hero />
            <FeaturesGrid />
        </div>
    )
}