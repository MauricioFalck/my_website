import React from 'react';
import profilePic from "../assets/mauricio-home.jpg"

function Home() {
  return (
    <section className="my-8 mx-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div>
              <img
                src={profilePic}
                alt="Mauricio Falck"
                className="rounded-full w-48 h-48 mx-auto md:mx-0 relative"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:mx-8">
          <h3 className="text-customSubtitleText text-sm"><span className='font-semibold'>AI Enthusiast</span> | Passionate Solution Creator for <span className='font-semibold'>Customer Success</span></h3>
          <h2 className="text-2xl font-semibold mt-2 text-customHeaderText my-5">Mauricio Falck</h2>
          <p className="mt-8">
            With a career spanning over three decades in the IT industry, I am a professional known for my expertise
            in telecom IT systems (OSS/BSS), and large-scale systems architecture.
          </p>
          <br />

          <p>
            Today, as one of the founders of <a className="font-semibold hover:text-customNavHoverText" href="http://www.greatminds-inc.com">Greatminds Inc.</a>,
            I am dedicated to designing and delivering innovative AI use cases tailored to customer needs. With a blend of
            deep technical knowledge and strategic vision, I am committed to driving success and innovation for my customers.
          </p>
          <div className="mt-10 flex space-x-4 ">
            <a
              href="/my_website/assets/cv.pdf"
              target='_blank'
              type="application/pdf"
              className="bg-primaryButtonBg text-buttonText px-4 py-2 rounded hover:bg-primaryButtonHoverBg"
            >
              Download CV
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
