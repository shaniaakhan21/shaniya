"use client";
import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import WorkExperience from './Workbox';
import VolunteerExperience from './Volunteer';

const RightSidebar: React.FC = () => {


    return (
        <aside className="w-full lg:w-1/6 h-fit top-10 md:top-0 lg:top-10 relative md:relative lg:fixed mt-2 sm:mt-0">
            <div className='rounded-xl shadow-md px-4 py-3 bg-white '>
                <div>
                    <div className='flex flex-row justify-start pb-1'>
                        <LocalPhoneIcon className='mr-2' sx={{ color: '#cc0088' }} />
                        +971-54-5764531
                    </div>
                    <div className='flex flex-row justify-start pb-1'>
                        <MailIcon className='mr-2' sx={{ color: '#cc0088' }} />
                        shaniaakhan21@gmail.com
                    </div>
                    <div className='flex flex-row justify-start pb-1'>
                        <MyLocationIcon className='mr-2' sx={{ color: '#cc0088' }} />
                        Dubai, U.A.E
                    </div>
                </div>
            </div>

            <div className='rounded-xl shadow-md px-4 py-3 bg-white mt-4'>
                <WorkExperience />
            </div>

            <div className='rounded-xl shadow-md px-4 py-3 bg-white mt-4'>
                <VolunteerExperience />
            </div>

        </aside>
    );
};

export default RightSidebar;
