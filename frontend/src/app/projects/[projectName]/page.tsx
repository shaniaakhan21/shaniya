"use client";
import React from 'react';
import ProjectPage from '../../components/Projectpage';
import Header from '../../components/Header';
import projectData from '../../data/projectData';



const ProjectDynamicPage: React.FC<{ params: { projectName: string } }> = ({ params }) => {
  const { projectName } = params; // Access the projectName from params

  // Fetch the corresponding project data based on the projectName
  const project = projectData[projectName as keyof typeof projectData];


  if (!project) {
    return <div>Project not found.</div>; // Handle case where project doesn't exist
  }

  return (
    <>
      <Header />
      <ProjectPage
        title={project.title}
        images={project.images}
        description={project.description}
        skills={project.skills}
      />
    </>
  );
};

export default ProjectDynamicPage;
