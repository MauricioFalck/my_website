import React from 'react';
import amdocs from '../assets/amdocs.png';
import bcp from '../assets/bcp.jpg';
import ehpt from '../assets/ehpt.jpg';
import ericsson from '../assets/ericsson.jpg';
import hp from '../assets/hp.png';
import ibm from '../assets/ibm.png';
import metasolv from '../assets/metasolv.png';
import openet from "../assets/openet.jpg";
import infographic from "../assets/carreer-infographic.png";
import CompanyCard from '../components/CompanyCard';


const birthDate = new Date("1972-10-30")

const companies = [
  { logo: amdocs, name: "Amdocs", url: "https://www.amdocs.com/" },
  { logo: bcp, name: "BCP", url: "https://pt.wikipedia.org/wiki/BCP_(telecomunica%C3%A7%C3%B5es)" },
  { logo: ehpt, name: "EHPT", url: "https://en.wikipedia.org/wiki/Ericsson_Hewlett_Packard_Telecom" },
  { logo: ericsson, name: "Ericsson", url: "https://www.ericsson.com/" },
  { logo: ibm, name: "IBM", url: "https://www.ibm.com/" },
  { logo: hp, name: "HP", url: "https://www.hp.com/" },
  { logo: metasolv, name: "MetaSolv", url: "https://en.wikipedia.org/wiki/List_of_acquisitions_by_Oracle" },
  { logo: openet, name: "Openet", url: "https://en.wikipedia.org/wiki/Openet" },
];
function Resume() {
  return (
    <section className="my-8 mx-20">
      <h2 className="text-2xl font-semibold text-customHeaderText">About me...</h2>
      <div>
        <p className="mt-4">Hi! 👋👋</p>
        <p className="mt-4">My name is Mauricio Falck.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-customSubtitleText">About me...</h3>
        <p className="mt-4">
          I've been in the tech industry for about 30 years, working at some amazing companies like Amdocs,
          MetaSolv, HP, and EHPT.
        </p>
        <div className="grid grid-cols-4 gap-6 mx-[-1.5rem] my-10"> {/* Adjust grid container */}
          {companies.map((company, index) => (
            <CompanyCard key={index} logo={company.logo} name={company.name} url={company.url} />
          ))}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-customSubtitleText">About me...</h3>
      <p className="mt-4">
        Since 1998, when I joined BCP —a mobile carrier provider starting its operation at the time — I've
        gained extensive experience with BSS/OSS systems and other enterprise software solutions. My deep
        technical knowledge in these systems and my other skills have enabled me to take on various sales and
        presales roles, lead successful digital transformation programs, and managed large-scale accounts, such
        as Telefonica Peru.
      </p>
      <div>
        <img src={infographic} name="Carreer Infographic" ></img>
      </div>

      <p className="mt-4">
        Throughout my career, I've had the opportunity to live and work in different countries, which has provided
        me with a broader perspective on various cultures and markets. These experiences have enriched my understanding
        of diverse business environments and enabled me to effectively navigate and lead in multicultural settings.
      </p>
      <p className="mt-4">
        In 2022, I decided to leave the familiar corporate world and venture into the startup ecosystem. I first created
        my own company, Falck Consulting, which focuses on providing consulting services to companies that requires my skills
        and expertise, while preparing the ground for my next big move. </p>
      <p className='mt-4'>
        And recently in 2024, I co-founded Greatminds Inc., a company dedicated to creating and delivering innovative AI
        solutions tailored to customer needs.
      </p>

    </section>
  );
}

export default Resume;
