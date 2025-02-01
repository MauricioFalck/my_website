import React from 'react';

function Home() {
  return (
    <section className="my-8 mx-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div>
              <img
                src="src/assets/profile.jpg"
                alt="Your Name"
                className="rounded-full w-48 h-48 mx-auto md:mx-0 relative"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:mx-8">
          <h3 className="text-customSubtitleText"><span className='font-semibold'>AI Enthusiast</span> | Passionate Solution Creator for <span className='font-semibold'>Customer Success</span></h3>
          <h2 className="text-2xl font-semibold mt-2 text-customHeaderText">Mauricio Falck</h2>
          <p className="mt-4">
            With a career spanning over three decades in the IT industry, I am a seasoned professional known for my expertise in telecommunications IT systems (OSS/BSS), and large-scale systems architecture. I hold degrees in Electrical Engineering (1997) and Computer Science (2024), and I have made significant contributions to global giants like HP, Ericsson, and Amdocs in technical and sales related roles.
          </p>
          <br />
          <p>
            Today, as one of the founders of <a className="font-semibold hover:text-customNavHoverText" href="http://www.greatminds-inc.com">Greatminds Inc.</a>, I am dedicated to creating and delivering innovative AI solutions tailored to customer needs. With a blend of deep technical knowledge and strategic vision, I am committed to driving success and innovation in the digital age.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="path/to/your/cv.pdf"
              download
              className="bg-primaryButtonBg text-buttonText px-4 py-2 rounded hover:bg-primaryButtonHoverBg"
            >
              Download CV
            </a>
            <a
              href="/contact"
              className="bg-secondaryButtonBg text-buttonText px-4 py-2 rounded hover:bg-secondaryButtonHoverBg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
