"use client";
import React from 'react';
import Carousel from './Carousel';
import { ThemeProvider } from '../../context/ThemeProvider';
import { Box, Typography } from '@mui/material';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import SkillColors from './SkillColors';
import Footer from './Footer';

interface ProjectPageProps {
    title: string;
    images: StaticImageData[];
    description: string[];
    skills: string[];
}

const ProjectPage: React.FC<ProjectPageProps> = ({ title, images, description, skills }) => {
    return (
        <ThemeProvider>
            <Box className="relative projectPage top-[8vh]" sx={{ px: 4 }}>
                <h2 className="text-lg sm:text-[2em] font-bold mt-1 mb-2 sm:mb-4 text-center">
                    {title}
                </h2>
                <Box className="h-fit flex justify-center flex-col bg-white rounded-lg sm:rounded-[4%] pt-4">
                    <div className='flex justify-center'>
                        <Carousel images={images} />
                    </div>
                    <Box className='px-6 py-2 sm:py-4 sm:px-28'>
                        {description.map((para, index) => (
                            <Typography key={index} variant="body1" component="p" className='text-[4px] sm:text-base'>
                                {para}
                            </Typography>
                        ))}
                    </Box>
                    <div className='flex flex-col sm:flex-row justify-between items-center'>
                        <div className='pb-8 px-6 sm:px-28 w-full sm:w-2/3'>
                            <h2 className="font-semibold mb-2">Technologies & Tools:</h2>
                            <Box className="flex flex-wrap gap-2">
                                {skills.map((skill, idx) => (
                                    <SkillColors key={idx} skill={skill} />
                                ))}
                            </Box>
                        </div>
                        <div className='w-full sm:w-1/3 flex flex-col justify-start sm:justify-end pb-8 px-6 sm:px-28'>
                            <h2 className="font-semibold mb-2 text-start sm:text-end">Important Links:</h2>
                            <div className='flex justify-start sm:justify-end'>
                                <Link href='https://emaysconcierge.com/' className='pr-2 icon-link' target="_blank" rel="noopener noreferrer">
                                    <LinkIcon />
                                </Link>
                                <Link href='https://github.com' className='icon-link' target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
            <Footer />
        </ThemeProvider>
    );
};

export default ProjectPage;
