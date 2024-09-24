"use client";
import React from 'react';
import ProjectPage from '../components/Projectpage';
import EmaysOne from '../../assets/images/work/Emays/1.png';
import EmaysTwo from '../../assets/images/work/Emays/2.png';
import EmaysThree from '../../assets/images/work/Emays/3.png';
import EmaysFour from '../../assets/images/work/Emays/4.png';
import EmaysFive from '../../assets/images/work/Emays/5.png';
import EmaysSix from '../../assets/images/work/Emays/6.png';
import EmaysSeven from '../../assets/images/work/Emays/7.png';
import EmaysEight from '../../assets/images/work/Emays/8.png';
import EmaysNine from '../../assets/images/work/Emays/9.png';
import EmaysEleven from '../../assets/images/work/Emays/11.png';
import EmaysTwelve from '../../assets/images/work/Emays/12.png';
import EmaysThirteen from '../../assets/images/work/Emays/13.png';
import EmaysFourteen from '../../assets/images/work/Emays/14.png';
import EmaysFifteen from '../../assets/images/work/Emays/15.png';
import EmaysSixteen from '../../assets/images/work/Emays/16.png';



const projectOneImages = [
  EmaysOne,
  EmaysTwo,
  EmaysThree,
  EmaysFour,
  EmaysFive,
  EmaysSix,
  EmaysSeven,
  EmaysEight,
  EmaysNine,
  EmaysEleven,
  EmaysTwelve,
  EmaysThirteen,
  EmaysFourteen,
  EmaysFifteen,
  EmaysSixteen
];

const ProjectOne: React.FC = () => {
  const description = [
    "Hellotax is a VAT compliance automation software tailored towards multi-channel traders across Europe.",
    "The company already had a functioning web app but needed a professional to create an entirely new experience with the latest technologies to leverage speed and provide an optimal user experience as their customers were increasing. At the core of the product is data so there was heavy data transformation and manipulation involved and they needed to make that process as fast as possible.",
    "With this information in mind, I examined the existing platform, started documenting flaws and identifying strategies to tackle them. We settled to use Vue as their in-house team was more familiar with it. I bootstrapped the project, and within a few weeks the designated MVP which included a partial component library optimized for accessibility was ready.",
    "Usually, systems that require loads of data manipulation and all sorts of computations settle to perform these operations server-side. But since we were dealing with really huge data (reaching megabytes at times), the round trip time (RTT) was in high numbers which resulted in delayed updates. To tackle this, I had to implement a lot of the processing and manipulation logic on the frontend, leaving special computation work and business logic for the backend.",
    "Now, it's easy to go wrong and pollute data in these computations which made it clear that we needed solid assertion mechanisms so I created a bunch of fail-safe optimized utility libraries which implemented solid type-checks and validation techniques to ensure fast, yet accurate data diffing and transformation work to preserve the integrity of the information displayed and minimize runtime errors and unusability.",
    "After nine months of work, we were finally ready to go live and the beta version was launched. It not only met but exceeded the expectations and beat the previous version at speed, accessibility and reliability."
  ];

  return (
    <ProjectPage
      title="Emays"
      images={projectOneImages}
      description={description}
      skills={['React.js', 'TypeScript', 'Node.js', 'CSS', 'TailwindCSS', 'JavaScript', 'AWS', 'Postman', 'VS Code', 'Figma', 'MongoDB', 'GitHub', 'GitLab']} 
    />
  );
};

export default ProjectOne;
