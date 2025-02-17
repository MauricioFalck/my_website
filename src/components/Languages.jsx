import uk from '../assets/uk.jpg';
import pt from "../assets/pt.jpg";
import es from "../assets/es.jpg";

const Languages = () => {
    const languages = [
        { language: 'English', flag: uk, fluency: 'Native' },
        { language: 'Portuguese', flag: pt, fluency: 'Native' },
        { language: 'Spanish', flag: es, fluency: 'Native' }
    ];

    return (
        <div>
            <h3 className="text-xl font-semibold text-customSubtitleText mb-6">Languages</h3>
            <div className="flex gap-8 items-start">
                <div className="w-1/2 ml-10">
                    <ul className="space-y-4">
                        {languages.map((lang, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <img
                                    src={lang.flag}
                                    alt={`${lang.language} flag`}
                                    className="w-8 h-8 rounded-full object-cover"
                                />
                                <div>
                                    <span className="font-medium">{lang.language}</span>
                                    <span className="text-customSubtitleText ml-2">- {lang.fluency}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-1/2">
                    <p className="text-customBodyText">
                        Being born in the UK to Chilean parents and immigrating to Brazil at a young age has given me the unique ability to speak fluently in Portuguese, English, and Spanish
                    </p>
                    <p className="text-customBodyText">
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Languages;
