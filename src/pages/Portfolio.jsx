import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  const projects = [
    {
      name: 'Project One',
      description: 'This is a brief description of Project One.',
      language: 'JavaScript',
      githubLink: 'https://github.com/yourusername/project-one'
    },
    {
      name: 'Project Two',
      description: 'This is a brief description of Project Two.',
      language: 'Python',
      githubLink: 'https://github.com/yourusername/project-two'
    },
    // Add more projects here
  ];

  return (
    <section className="my-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-customHeaderText mb-6 text-center">My Portfolio</h2>
        <div className="flex flex-col items-center">
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
