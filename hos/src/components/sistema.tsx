import Image from 'next/image'
import React from 'react';
import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface SistemaProps {
    onClick: any;
}






export function Sistema(props: SistemaProps){

    return(
        <div>
            <h1>Por que o HOS é o melhor sistema para você?</h1>
        <Carousel>
            <div className=''>
            <h3>1</h3>
            </div>
    
        </Carousel>
        </div>

    
       
        )    

}
    