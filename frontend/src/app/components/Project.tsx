"use client";
import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import CWEImage from '../../assets/images/work/cwe.png'
import { StaticImageData } from 'next/image';
// Define the ProjectProps interface
interface ProjectProps {
    imageSrc: StaticImageData;
    altText: string;
    projectName: string;
    projectUrl: string;
    projectPage: string;
    bgColor?: string; // Optional background color
}

// The Project component
const Project: React.FC<ProjectProps> = ({ imageSrc, projectPage, altText, projectName, projectUrl, bgColor = '#ffeef978' }) => {
    return (
        <Box className='bg-white rounded-xl mt-1 mb-2'>
            <div className='flex justify-center p-4'>
                <Link href={projectPage} className='text-[#cc0088]' target="_blank" rel="noopener noreferrer">
                    <Image src={imageSrc} width={80} height={80} alt={altText} />
                </Link>
            </div>
            <div className={`p-4 rounded-b-xl`} style={{ backgroundColor: bgColor }}>
                <h4>{projectName}</h4>
                <Link href={projectUrl} className='text-[#cc0088]' target="_blank" rel="noopener noreferrer">
                    {projectUrl.replace('https://', '')}
                </Link>
            </div>
        </Box>
    );
};

const ProjectsPage: React.FC = () => {

    return (
        <div className='p-0'>
            <Project
                imageSrc={CWEImage}
                altText='Uttarakhand Technical University Logo'
                projectName='CWE Buster'
                projectUrl='https://www.cwebuster.com/'
                bgColor='#ffeef978'
                projectPage= {`/projects/${encodeURIComponent('cwebooster')}`}
            />

            <Project
                imageSrc={CWEImage}
                altText='Other Project Logo'
                projectName='Other Project'
                projectUrl='https://www.otherproject.com'
                bgColor='#ffeef978'
                projectPage= {`/projects/${encodeURIComponent('emays')}`}
            />

            <Project
                imageSrc={CWEImage}
                altText='Uttarakhand Technical University Logo'
                projectName='CWE Buster'
                projectUrl='https://www.cwebuster.com/'
                bgColor='#ffeef978'
                projectPage= {`/projects/${encodeURIComponent('CWE Buster')}`}
            />

            <Project
                imageSrc={CWEImage}
                altText='Other Project Logo'
                projectName='Other Project'
                projectUrl='https://www.otherproject.com'
                bgColor='#ffeef978'
                projectPage= {`/projects/${encodeURIComponent('CWE Buster')}`}
            />
        </div>
    );
};

// Exporting the parent component as default
export default ProjectsPage;
