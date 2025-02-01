import React from 'react';

function ProjectCard({ name, description, language, githubLink }) {
    return (
        <div className="border border-gray-300 shadow-lg p-4 rounded-lg mx-4 my-4 w-full max-w-5xl">
            <div className="flex flex-row items-center space-x-4">
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-customHeaderText mb-2">{name}</h3>
                    <p className="text-customBodyText mb-2">{description}</p>
                    <p className="text-customSubtitleTextBlue mb-4">Language: {language}</p>
                </div>
                <a
                    href={githubLink}
                    className="text-primaryButtonText bg-primaryButtonBg hover:bg-primaryButtonHoverBg px-4 py-2 rounded inline-block"
                >
                    View on GitHub
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
