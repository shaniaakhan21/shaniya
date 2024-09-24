"use client";
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { ThemeProvider, useTheme } from '../../context/ThemeProvider'; // Adjust the import path as necessary


// Define a styled component for the timeline item
const TimelineItem = styled('div')(() => {
    const { theme: currentTheme } = useTheme();
    const colorMap = {
        light: '#e0e0e0',  // Grey 300 for light theme
        dark: '#b0b0b0',   // Grey 300 for dark theme
        pink: '#f0f0f0',   // Grey 300 for pink theme
    };

    return {
        position: 'relative',
        borderBottom: `1px solid ${colorMap[currentTheme]}`,
    };
});

// Define a styled component for the date
const DateText = styled(Typography)(() => {
    const { theme: currentTheme } = useTheme();
    const colorMap = {
        light: '#757575',  // Grey 600 for light theme
        dark: '#9e9e9e',   // Grey 600 for dark theme
        pink: '#cfcfcf',   // Grey 600 for pink theme
    };

    return {
        color: colorMap[currentTheme],
        fontSize: '14px',
    };
});

const WorkExperience: React.FC = () => {
    const experiences = [
        {
            company: 'Dyrani Software Services, L.L.C',
            location: 'Dubai, U.A.E',
            role: 'Software Developer',
            period: 'Feb 2023 – Present',
        },
        {
            company: 'Musclestadt Sporternaehrung, India Private Limited',
            location: 'Amritsar, India',
            role: 'Full Stack Web and App Developer',
            period: 'Nov 2021 – Dec 2022',
        },
        {
            company: 'MyDiela, FZE L.L.C',
            location: 'Remote Job',
            role: 'Software Developer (Contract)',
            period: 'Sept 2021 – Nov 2021',
        }
    ];

    return (
        <ThemeProvider>
            <Box>
                <h2 className='text-lg font-bold mb-2'>Work Experience</h2>
                {experiences.map((exp, index) => (
                    <TimelineItem key={index} className='py-2'>
                        <Typography variant="h6" component="div" className='text-sm font-bold'>
                            {exp.role}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" className='text-xs font-semibold'>
                            {exp.company}
                        </Typography>
                        <div className='flex flex-row justify-between pt-1'>
                            <DateText
                                className='text-xs'
                                style={{ color: exp.period.includes('Present') ? '#0a66c2' : '#cb112d' }}
                            >
                                {exp.period}
                            </DateText>
                            <Typography variant="body1" color="textSecondary" className='text-xs'>
                                {exp.location}
                            </Typography>
                        </div>
                    </TimelineItem>
                ))}
            </Box>
        </ThemeProvider>
    );
};

export default WorkExperience;
