"use client";
import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import styles from './carousel.css';

interface CarouselProps {
    images: StaticImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
        }, 6000); // Change image every 6 seconds

        return () => clearInterval(interval);
    }, [totalImages]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    return (
        <div className='flex justify-center'>
            <Box sx={{ position: 'relative', width: '84%', height: '700px',  overflow: 'hidden' }} className='flex  h-fit sm:h-full border border-grey-400'>
                <div className={`${styles.carouselWrapper}`} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className={styles.carouselItem}>
                            <Image
                                src={image}
                                alt={`Image ${index + 1}`}
                                className={styles.carouselImage}
                            />
                        </div>
                    ))}
                </div>
            </Box>
            <IconButton
                onClick={handlePrev}
                className='absolute top-[10%] left-[18px] sm:top-[25%] sm:left-[63px] text-black z-10'
            >
                <ArrowLeftIcon sx={{ fontSize: '2.5rem' }} />
            </IconButton>
            <IconButton
                onClick={handleNext}
                className='absolute top-[10%] right-[18px] sm:top-[25%] sm:right-[63px] text-black z-10'
            >
                <ArrowRightIcon sx={{ fontSize: '2.5rem' }} />
            </IconButton>
        </div>
    );
};

export default Carousel;
