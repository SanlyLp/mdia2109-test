import React from 'react';
import Image from 'next/image';
import styles from './products.module.css'

export default function Product({
     img = "",
     tag = "",
     price = 0,
    

}) {
   
    return (
        <div className={styles}>
            <div>
                {img=<Image src={img} width={200} height={200} /> }
                <div>{tag}</div>
                <div>{price}</div>
     
            </div>

        </div>
    )
}
