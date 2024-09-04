import Social from "@/components/Social/page"
import { Button} from "@/components/ui/button"
import {FiDownload} from 'react-icons/fi'

const Home= () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row  items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Computer Science Student</span>
            <h1 className="h1 mb-6">Helo I&apos;m <br /> <span className="text-accent">Faiza Benzir</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">I excel at crafting elegant digital experiences and I am porficient in various machin learning and deep learning technologies</p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            {/* socials */}
            </div>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}

export default Home