import React from 'react';

function Resume() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold">Resume</h2>
      <p className="mt-4">
        I am a dedicated developer with a passion for creating innovative solutions. Below are links to my CV, LinkedIn, and GitHub profiles.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow p-4 rounded flex items-center justify-center">
          <a href="path/to/your/cv.pdf" download className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="mt-2 text-center">Download CV</span>
          </a>
        </div>
        <div className="bg-white shadow p-4 rounded flex items-center justify-center">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 00-12 0v8a6 6 0 0012 0V8z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h4m-2-2v4" />
            </svg>
            <span className="mt-2 text-center">LinkedIn</span>
          </a>
        </div>
        <div className="bg-white shadow p-4 rounded flex items-center justify-center">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 00-3.16 19.48c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.7.115 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0012 2z" />
            </svg>
            <span className="mt-2 text-center">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
