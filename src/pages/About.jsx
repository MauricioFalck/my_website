import Companies from '../components/Companies';
import Languages from '../components/Languages';
import InternationalExperience from '../components/InternationalExperience';
import Telco from '../components/Telco';
import Education from '../components/Education';


function Resume() {
  return (
    <section className="my-8 mx-20">
      <h2 className="text-3xl font-semibold text-customHeaderText mb-10">About me</h2>
      <div>
        <p className="my-4">Hi! 👋👋</p>
      </div>
      <Companies />
      <Telco />
      <InternationalExperience />
      <Languages />
      <Education />
    </section>
  );
}

export default Resume;
