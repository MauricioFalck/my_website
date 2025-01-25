import React from 'react';

function Contact() {
  return (
    <section className="my-12 py-8 bg-neutral-800 rounded-lg shadow-md">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-customHeaderText mb-6">Contact Me</h2>
        <p className="text-lg text-customBodyText mb-6">
          Thank you for your interest in getting in touch. I would love to hear from you!
        </p>
        <a
          href="mailto:mfalck@greatminds-inc.com"
          className="text-primaryButtonText bg-primaryButtonBg hover:bg-primaryButtonHoverBg px-6 py-3 rounded-full inline-block mb-10 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Email Me
        </a>
        <p className="text-lg text-customBodyText mb-6">
          You can also reach out to me via LinkedIn. I would be thrilled to be a part of your network!
        </p>
        <a
          href="https://www.linkedin.com/in/MauricioFalck"
          className="text-customNavHoverText hover:underline text-lg transition duration-300 ease-in-out"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
