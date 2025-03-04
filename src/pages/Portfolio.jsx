import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  const projects = [
    {
      name: 'Project One',
      description: 'This is a brief description of Project One.',
      language: 'JavaScript'
    },
    {
      name: 'Project Two',
      description: 'This is a brief description of Project Two.',
      language: 'Python',
      githubLink: 'https://github.com/yourusername/project-two'
    },
    {
      name: 'Project Three',
      description: 'This is a brief description of Project Three.',
      language: 'Java',
      githubLink: 'https://github.com/yourusername/project-three'
    },
  ];

  return (
    <section className="flex-grow overflow-y-auto my-8 mx-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-customHeaderText mb-6 text-left">My Portfolio</h2>

        <div className="flex flex-col items-center space-y-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              language={project.language}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
