import amdocs from '../assets/amdocs.png';
import bcp from '../assets/bcp.jpg';
import ehpt from '../assets/ehpt.jpg';
import ericsson from '../assets/ericsson.jpg';
import hp from '../assets/hp.png';
import ibm from '../assets/ibm.png';
import metasolv from '../assets/metasolv.png';
import openet from "../assets/openet.jpg";
import CompanyCard from '../components/CompanyCard';

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

const Companies = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold text-customSubtitleText">In a nutshell</h3>
            <p className="mt-4">
                I've been in the tech industry for about 30 years, working at some amazing companies like Amdocs,
                MetaSolv, HP, and EHPT.
            </p>
            <div className="grid grid-cols-4 gap-6 mx-[-1.5rem] my-10">
                {companies.map((company, index) => (
                    <CompanyCard key={index} logo={company.logo} name={company.name} url={company.url} />
                ))}
            </div>
        </div>
    )
}

export default Companies;