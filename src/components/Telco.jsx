import infographic from "../assets/carreer-infographic.png";

const Telco = () => {
    return (
        <div>
            <div>
                <h3 className="text-xl font-semibold text-customSubtitleText">My career in IT Telco</h3>
                <p className="mt-4">
                    Since 1998, when I joined BCP —a mobile carrier provider starting its operation at the time — I've
                    gained extensive experience with BSS/OSS systems and other enterprise software solutions. My deep
                    technical knowledge in these systems and my other skills have enabled me to take on various sales and
                    presales roles, lead successful digital transformation programs, and managed large-scale accounts such
                    as <a href='https://telefonica.com.pe/' target="_blank">Telefonica Peru</a>.
                </p>
            </div>
            <div className="flex">
                <div className="md:w-1/2">
                    <p className="mt-4 mr-20">
                        In 2022, I decided to leave the familiar corporate world and venture into the startup ecosystem. I first created
                        my own company, Falck Consulting, which focuses on providing consulting services to companies that requires my skills
                        and expertise, while preparing the ground for my next big move. And recently in 2024, I co-founded Greatminds Inc., a company dedicated to creating and delivering innovative AI
                        solutions tailored to customer needs.</p>

                </div>
                <div className="md:w-1/2">
                    <img src={infographic} name="Carreer Infographic" ></img>
                </div>
            </div>
        </div>
    )
}

export default Telco;