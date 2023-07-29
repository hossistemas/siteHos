'use client'

import Image from 'next/image'
import React, { useRef } from 'react';
import { Carousel } from '@mantine/carousel';

interface FeedbackProps {
    
}


export function Feedback(props: FeedbackProps){

    return( 
    
        <Carousel slideSize="70%" height={200} align="start" slideGap="xl" controlsOffset="xl" controlSize={27}>
       
        </Carousel>        

        )    

}