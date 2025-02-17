import mack from '../assets/mack.png';
import uol from '../assets/uol.png';


const Education = () => {


    return (
        <div>
            <h3 className="text-xl font-semibold text-customSubtitleText">Education</h3>
            <div className="mt-4 space-y-4">
                <div className="bg-white/5 p-4 rounded-lg shadow-lg hover:bg-white/10 transition duration-300 flex justify-between items-center">
                    <div>
                        <h4 className="text-lg font-medium">University of London</h4>
                        <p className="text-customSubtitleText">Bachelor's in Computer Science</p>
                        <p className="text-sm text-gray-400 mb-2">First Class Honors</p>
                        <p className="text-sm text-gray-400">2020 - 2024</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg">
                        <img
                            src={uol}
                            alt="University of London Logo"
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                </div>

                <div className="bg-white/5 p-4 rounded-lg shadow-lg hover:bg-white/10 transition duration-300 flex justify-between items-center">
                    <div>
                        <h4 className="text-lg font-medium">Universidade Mackenzie</h4>
                        <p className="text-customSubtitleText mb-2">Bachelor's in Electric Engineering</p>
                        <p className="text-sm text-gray-400">1990 - 1997</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg">
                        <img
                            src={mack}
                            alt="Mackenzie Logo"
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;
