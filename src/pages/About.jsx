import React from 'react';

function About() {
  return (
    <section className="my-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src="path/to/your/photo.jpg"
            alt="Your Name"
            className="rounded-full w-48 h-48 mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <h3 className="text-gray-600">AI Enthusiast | Passionate Solution Creator for Customer Success</h3>
          <h2 className="text-2xl font-semibold mt-2">Mauricio Falck</h2>
          <p className="mt-4">
            With a career spanning nearly four decades in the IT industry, I am a seasoned professional known for my expertise in telecommunications systems, OSS/BSS, and large-scale systems architecture. I hold degrees in Electrical Engineering (1997) and Computer Science (2024), and I have made significant contributions to global giants like IBM, HP, Ericsson, and Amdocs.
          </p>
          <br />
          <p>
            Today, as one of the founders of Greatminds Inc., I am dedicated to delivering innovative AI solutions tailored to customer management needs. With a blend of deep technical knowledge and strategic vision, I am committed to driving success and innovation in the digital age.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="path/to/your/cv.pdf"
              download
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Download CV
            </a>
            <a
              href="/contact"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
