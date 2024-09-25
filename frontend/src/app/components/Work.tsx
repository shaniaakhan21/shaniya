"use client";
import React, { useState } from 'react';
import { Box,  List, ListItem, ListItemText } from '@mui/material';
import { ThemeProvider } from '../../context/ThemeProvider'; // Adjust the import path as necessary
import SkillColors from './SkillColors';



const Work: React.FC = () => {
    const [activeSection, setActiveSection] = useState<'All' | 'Professional' | 'Volunteer' | 'Internships'>('All');
    const workExperiences = [
        {
            company: 'Dyrani Software Services, L.L.C',
            location: 'Dubai, U.A.E',
            role: 'Software Developer',
            period: 'Feb 2023 – Present',
            description: [
                'Led front-end development for four projects including Snap Partners, AISD Servers Project, Play Numbers Game, Emays and PremierX4Free, enhancing user experience and functionality.',
                'Redesigned UI/UX for Snap Partners platform, implementing features such as 1099 Tax Identification Number validation to ensure compliance with US tax laws.',
                'Developed and maintained the front-end and admin area for the PremierX4Free website, focusing on database management and secure data storage.'
            ],
            skills: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'TypeScript','React.js', 'Node.js', 'Next.js', 'REST APIs', 'API Integration', 
                'GraphQL', 'MySQL', 'MongoDB', 'PostgreSQL', 'GitLab', 'GitHub', 'AWS',  'Stripe', 'Docker', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Figma', 'Canva', 'VS Code', 'Postman' ]
        },
        {
            company: 'Musclestadt Sporternaehrung, India Pvt Ltd',
            location: 'Amritsar, India',
            role: 'Full Stack Developer',
            period: 'Nov 2021 – Dec 2022',
            description: [
                'Developed fully responsive and GDPR-compliant websites for multiple company brands including Musclestadt, Myogenetix, and Ergogenic, Pure powders encompassing both front-end and back-end development for optimal user experience.',
                'Designed and implemented a mobile app for ProteinBot, streamlining user access to product information and enhancing customer engagement',
                'Orchestrated successful digital marketing initiatives, including A/B testing on meta platforms and strategic ad campaigns, resulting in a 17% increase in website-generated orders and reaching over 1 million potential customers.'
            ],
            skills: ['Wordpress', 'HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'TypeScript','React.js', 'Node.js', 'Flutter', 'Nginix', 'MongoDB', 'PostgreSQL', 'GitLab', 'GitHub', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Figma', 'Canva', 'VS Code', 'Postman']
        },
        {
            company: 'MyDiela, FZE L.L.C',
            location: 'Remote Job (Contract)',
            role: 'Software Developer',
            period: 'Sept 2021 – Nov 2021',
            description: [
                'Developed a school management software using Django and Django-baton, serving over 1,000 users with 2,000 daily transactions.',
                'Consistently delivered tasks ahead of schedule, completing over 50 tasks with a 95% on-timedelivery rate..',
                'Integrated third-party APIs for enhanced Software functionality.'
            ],
            skills: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'TypeScript','React.js', 'Django', 'django-baton', 'Python', 'PostgreSQL', 'GitLab', 'GitHub', 'Canva', 'VS Code', 'Postman']
        },
        {
            company: 'Cue Learn Pvt. Ltd. ( CUEMATH )',
            location: 'Remote Job',
            role: 'Coding Instructor (Part-time)',
            period: 'May 2021 – Oct 2021',
            description: [
                'Instructed Python and JavaScript to students spanning Grade 1 to Grade 12, fostering a passion for coding across diverse age groups',
                'Presented captivating demonstration classes, effectively inspiring students to delve into the world of coding.',
                'Delivered instruction domestically and abroad, catering to both national and international audiences, ensuring accessibility to coding education on a global scale.'
            ],
            skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'VS Code', 'Tutoring']
        }

    ];

    const volunteerExperiences = [
        {
            company: 'Go Girl Humanitarian Foundation, India',
            location: 'Remote',
            role: 'Chief Operating Officer',
            period: 'Aug 2022 – Present',
            description: [
                'Cultivated strategic partnerships with NGOs to broaden the organizations outreach and effectiveness, enhancing collaborative efforts in pursuit of common goals.',
                'Orchestrated both online and offline workshops, ensuring seamless coordination among department heads, training managers, and tutors through consistent communication.',
                'Spearheaded the development and deployment of an inclusive and accessible curriculum, aligning with the organization&#39;s mission to provide equitable education opportunities.',
                'Demonstrated leadership acumen by chairing meetings, fostering a cohesive team environment, and leveraging strong teamwork and leadership skills to drive productivity and collaboration'
            ],
            skills: ['Team Lead', 'Interviewing', 'Organising Workshops', 'GitHub', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Figma', 'Canva', 'VS Code']
        },

        {
            company: 'The Girl Code, India',
            location: 'Remote',
            role: 'Chief Operating Officer',
            period: 'Feb 2022 –July 2022',
            description: [
                'Achieved promotion to Chief Operating Officer within a year, credited for outstanding performance and innovative collaboration with Yashoda Foundation, demonstrating proactive and out-of-the-box thinking.',
            ],
            skills: ['Team Lead', 'Organising Workshops', 'Interviewing', 'GitHub', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Figma', 'Canva', 'VS Code']
        },

        {
            company: 'The Girl Code, India',
            location: 'Remote',
            role: 'Chapter Manager ',
            period: 'July 2021 –Jan 2022',
            description: [
                'Supervised workshop execution, ensuring seamless coordination and updates with departmentheads, training managers, and tutors, thereby optimizing learning outcomes.',
                'Managed and led a cohesive team of curriculum developers, promoting collaboration and productivity through strong teamwork and leadership.'
            ],
            skills: ['Managing Chapters', 'GitHub', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Figma', 'Canva', 'VS Code']
        },
    ];

    const internships = [
        {
            company: 'Clever Programmer',
            location: 'Remote',
            role: 'Django Developer',
            period: 'Oct 2020 - Jul 2021',
            description: [
                'Developed a movie app using Django, GitHub, Git, Heroku, Python, HTML, and CSS with CRUD functionality for adding, updating, and deleting movies.',
                'Built a portfolio website using HTML, CSS, JavaScript, Bootstrap, Django-Baton, and SendGrid.',
                'Cloned cleverprogrammer.com to improve front-end skills using HTML, CSS, JavaScript and other technologies.'
            ],
            skills: ['Python', 'TensorFlow']
        },
        {
            company: 'Omion Fusion Technologies Private Limited',
            location: 'Remote',
            role: 'Web Developer & Trainer',
            period: 'May 2020 - Jul 2020',
            description: [
                'Skilled in HTML, CSS, JavaScript, WordPress, Python, and Django, with experience in developing and maintaining a website with 99.9% uptime.',
                'Handled development and maintenance of a website, achieving timely completion and deployment.',
                '3 months of experience teaching python programming to kids, conducted online classes and taught students to complete minor projects.',
                'Administered quizzes, assignments, and tests on a weekly basis, prepared daily PowerPoint presentations for the course.',
                'Promoted to trainers coach after one month of teaching, provided training to other trainers for 2 months on time management, teaching skills, and curriculum development.'
            ],
            skills: ['Python', 'TensorFlow']
        },
    ];

    interface ExperienceItem {
        company: string;
        location: string;
        role: string;
        period: string;
        description: string[];
        skills: string[];
    }

    const Section = ({ items, sectionStyles }: { items: ExperienceItem[], sectionStyles: string }) => (
        <Box className={sectionStyles}>
            {items.map((item, index) => (
                <div key={index} className='mb-2'>
                    <div className="flex flex-row justify-between items-center">
                        <h6 className="text-sm  md:text-xl lg:text-2xl  font-bold text-black">
                            {item.role}
                        </h6>
                        <div className='text-xs sm:text-sm' style={{ color: item.period.includes('Present') ? '#0a66c2' : '#cb112d' }}>
                            {item.period}
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p  className="font-semibold text-xs md:text-base lg:text-lg">
                            {item.company}
                        </p>
                        <p  className='text-xs sm:text-sm'>{item.location}</p>
                    </div>
                    <Box className="mt-2">
                        <p className="text-xs sm:text-base font-semibold text-black">Responsibilities:</p>
                        <List dense>
                            {item.description.map((desc, idx) => (
                                <ListItem key={idx} disablePadding>
                                    <ListItemText primary={desc}  />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box className="mt-2">
                        <p className="font-semibold mb-2">Technologies & Tools:</p>
                        <Box className="flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                                <SkillColors key={idx} skill={skill} />
                            ))}
                        </Box>
                    </Box>
                    <div className='bb'></div>
                </div>
            ))}
        </Box>
    )

    return (
        <ThemeProvider>
            <div className='flex justify-between items-center py-2 mb-2'>
                <button className={`px-3 py-1 md:px-4 md:py-2 lg:px-8 lg:py-2  rounded-full text-sm sm:text-base text-center ${activeSection === 'All' ? 'bg-[#cc0088] text-white' : 'bg-white'}`} onClick={() => setActiveSection('All')}>All</button>
                <button className={`px-3 py-1 md:px-4 md:py-2 lg:px-8 lg:py-2  rounded-full text-sm sm:text-base text-center ${activeSection === 'Professional' ? 'bg-[#cc0088] text-white' : 'bg-white'}`} onClick={() => setActiveSection('Professional')}>Professional</button>
                <button className={`px-3 py-1 md:px-4 md:py-2 lg:px-8 lg:py-2  rounded-full text-sm sm:text-base text-center ${activeSection === 'Volunteer' ? 'bg-[#cc0088] text-white' : 'bg-white'}`} onClick={() => setActiveSection('Volunteer')}>Volunteer</button>
                <button className={`px-3 py-1 md:px-4 md:py-2 lg:px-8 lg:py-2  rounded-full text-sm sm:text-base text-center ${activeSection === 'Internships' ? 'bg-[#cc0088] text-white' : 'bg-white'}`} onClick={() => setActiveSection('Internships')}>Internships</button>
            </div>

            {(activeSection === 'All' || activeSection === 'Professional') && (
                <Section items={workExperiences} sectionStyles="bg-white rounded-xl p-4 mb-2" />
            )}
            {(activeSection === 'All' || activeSection === 'Volunteer') && (
                <Section items={volunteerExperiences} sectionStyles="bg-[#cc008808] rounded-xl p-4 mt-2 mb-2" />
            )}
            {(activeSection === 'All' || activeSection === 'Internships') && (
                <Section items={internships} sectionStyles="bg-[#55aaff17] rounded-xl p-4 mt-2 sm:mb-0 mb-2" />
            )}
        </ThemeProvider>
    );
};

export default Work;
