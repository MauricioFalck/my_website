import React from 'react';

const CompanyCard = ({ logo, name, url }) => {
    return (
        <div
            className="p-4 bg-neutral-900 shadow-lg rounded-lg flex flex-col items-center cursor-pointer"
            onClick={() => window.open(url, "_blank")}
        >
            <img src={logo} alt={name} className="w-16 h-16 my-5 text-customHeaderText" />
            <span className="text-center font-semibold text-customNavText my-3">{name}</span>
        </div>
    );
};

export default CompanyCard;
