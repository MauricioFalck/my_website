import myVisitedPlaces from "../assets/myVisitedPlaces.png";

const InternationalExperience = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold text-customSubtitleText">International experience</h3>
            <p className='text-2xl mt-5 mx-20'>"Travel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our people need it sorely on these accounts. Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all one's lifetime."</p>
            <p className="text-right mr-20 mb-10">- Mark Twain</p>
            <p className="mt-4">
                Throughout my career, I've had the opportunity to live and work in different countries, which has provided
                me with a broader perspective on various cultures and markets. These experiences have enriched my understanding
                of diverse business environments and enabled me to effectively navigate in multicultural settings.
            </p>
            <img src={myVisitedPlaces} name="My Visited Places" className="w-[80%] mx-[10%] my-10"></img>
            <p className="mt-4">
                Although I have worked in many countries across the world, I spent most of my international career in South American countries, Sweden, and Israel.
            </p>
        </div>
    )
}

export default InternationalExperience