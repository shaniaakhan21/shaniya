"use client";
import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import CoffeeImg from '../../assets/images/coffee.jpeg';
import PretzelImg from '../../assets/images/pretzel.jpeg';
import ProfilePic1 from '../../assets/images/profilepic.png';
import PushPinIcon from '@mui/icons-material/PushPin';
import SchoolIcon from '@mui/icons-material/School';
import CelebrationIcon from '@mui/icons-material/Celebration';
import LaptopIcon from '@mui/icons-material/Laptop';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
//import { useRouter } from 'next/navigation';
import Education from './Education';
import Work from './Work';
import Project from './Project';

const PostFeed: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    // Example post data with author, date, title, content, image, and mood
    const posts = [
        {
            author: 'Shaniya Khan',
            date: '2023-12-25',
            title: 'My First Post',
            content: 'This is my site where I try and post about what Im up to and how to do things with code. You can follow along with RSS by hitting the Follow button up above. Or if youre only interested in stuff I wrote about, check out /writing.',
            image: CoffeeImg,
            mood: 'Feeling fresh 😊',
            profilePic: ProfilePic1,
            pinned: true,
        },
        {
            author: 'Jane Smith',
            date: '2024-01-15',
            title: 'Another Post',
            content: 'This is my site where I try and post about what Im up to and how to do things with code. You can follow along with RSS by hitting the Follow button up above. Or if youre only interested in stuff I wrote about, check out /writing.',
            image: PretzelImg,
            mood: 'Excited for the weekend 🎉',
            profilePic: ProfilePic1,
            pinned: false,
        },
    ];

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <Box className="w-full mt-0">
            {/* Tab Navigation */}
            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                className="p-2"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    '& .MuiTabs-indicator': { backgroundColor: '#cc0088', height: '5px' },
                }}
            >
                <Tab
                    sx={{
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': {
                            color: '#cc0088',
                        },
                        '&.Mui-selected': {
                            color: '#cc0088',
                        },
                    }}
                    icon={<CelebrationIcon  className='text-[12px] sm:text-[16px]' />}
                    iconPosition="start"
                    label="Feed"
                    className='text-[9px] sm:text-[16px] min-h-fit min-w-fit'
                />
                <Tab
                    sx={{
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': {
                            color: '#cc0088',
                        },
                        '&.Mui-selected': {
                            color: '#cc0088',
                        },
                    }}
                    icon={<SchoolIcon  className='text-[12px] sm:text-[16px]' />}
                    iconPosition="start"
                    label="Education"
                     className='text-[9px] sm:text-[16px] min-h-fit min-w-fit'
                />
                <Tab
                    sx={{
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': {
                            color: '#cc0088',
                        },
                        '&.Mui-selected': {
                            color: '#cc0088',
                        },
                    }}
                    icon={<LaptopIcon  className='text-[12px] sm:text-[16px]' />}
                    iconPosition="start"
                    label="Work"
                    className='text-[9px] sm:text-[16px] min-h-fit min-w-fit'
                />
                <Tab
                    sx={{
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': {
                            color: '#cc0088',
                        },
                        '&.Mui-selected': {
                            color: '#cc0088',
                        },
                    }}
                    icon={<RocketLaunchIcon  className='text-[12px] sm:text-[16px]' />}
                    iconPosition="start"
                    label="Projects"
                    className='text-[9px] sm:text-[16px] min-h-fit min-w-fit'
                />
            </Tabs>

            {/* Tab Panel */}
            <div className="sm:mt-2">
                {activeTab === 0 && (
                    <div className="post-feed">
                        {posts.map((post) => (
                            <div key={post.title} className="post mb-4 px-4 sm:px-8 pt-4 pb-8 rounded-xl hover:bg-[#dee2e645]">

                                {post.pinned && (
                                    <div className="text-gray-600 text-xs">
                                        <PushPinIcon className='my-1' />
                                        <span className="ml-1">Pinned</span>
                                    </div>
                                )}
                                {/* Author section with profile pic, name, and date */}
                                <div className="flex items-center mb-2">
                                    <Image
                                        src={post.profilePic}
                                        alt={post.author}
                                        width={60}
                                        height={60}
                                        className="rounded-full h-[60px]"
                                    />
                                    <div className="ml-3">
                                        <p className="font-semibold text-lg">{post.author}</p>
                                        <p className="text-gray-400 text-sm">{post.date}</p>
                                    </div>
                                </div>

                                {/* Mood section */}
                                <div className="bg-[#dee2e6] px-3 py-1 rounded-full inline-block text-sm text-gray-700 mb-2">
                                    {post.mood}
                                </div>

                                {/* Post title and content */}
                                <h2 className="text-xl font-bold mt-2">{post.title}</h2>
                                <p className="text-gray-800">{post.content}</p>

                                {/* Post image */}
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={600} // You can customize the width
                                    height={400} // You can customize the height
                                    className="rounded-xl mt-2"
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* Placeholder for other tabs */}
                {activeTab === 1 && <><Education /></>}
                {activeTab === 2 && <><Work /></>}
                {activeTab === 3 && <><Project /></>}
            </div>
        </Box>
    );
};

export default PostFeed;
