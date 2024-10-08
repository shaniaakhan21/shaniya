"use client";
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CakeIcon from '@mui/icons-material/Cake';
import CreateIcon from '@mui/icons-material/Create';
import LinkIcon from '@mui/icons-material/Link';

interface BasicInfoProps {
    className?: string;
}

const BasicInfo: React.FC<BasicInfoProps> = ({ className = "" }) => {

    return (
        <div className={`flex flex-col space-y-2 rounded-xl bg-white p-4 shadow-md mt-4 sm:mt-0 ${className}`}>
            <div className='flex justify-between items-center'>
                <p className='text-[10px] sm:text-sm font-semibold text-gray-600'>
                    Software Developer and Chief Operating Officer.
                </p>
                <Link href="https://linkedin.com/in/codewithshaniya" className='text-[8px] sm:text-sm font-bold flex flex-row items-center text-white w-fit py-1 px-2 sm:py-2 sm:px-4 rounded-full' style={{ backgroundColor: '#cc0088' }}>
                    Follow <LinkedInIcon className='text-[12px] sm:text-lg ml-1 ' />
                </Link>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <p className='flex items-center'>
                    <BusinessCenterIcon className='text-[12px] sm:text-xl'/> <span className='text-gray-500 font-semibold text-[8px] sm:text-xs ml-1'>Available</span>
                </p>
                <p className='flex items-center'>
                    <Link href="/links" className='flex items-center'>
                        <LinkIcon className='text-[12px] sm:text-xl'/> <span className='text-[#cc0088] cursor-pointer hover:underline font-bold text-[8px] sm:text-xs ml-1'>Links</span>
                    </Link>
                </p>
                <p className='flex items-center'>
                    <CakeIcon className='text-[12px] sm:text-xl'/> <span className='text-gray-500 font-semibold text-[8px] sm:text-xs ml-1'>21 Feb 1999</span>
                </p>
                <p className='flex items-center' >
                    <Link href="/blogs" className='flex items-center'>
                        <CreateIcon className='text-[12px] sm:text-xl'/> <span className='text-[#cc0088] cursor-pointer hover:underline font-semibold text-[8px] sm:text-xs ml-1'>Technical Blogs</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default BasicInfo;
