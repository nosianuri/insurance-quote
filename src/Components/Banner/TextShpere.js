import React, { useEffect } from 'react'
import './TextShpere.css'
import TagCloud from 'TagCloud'

const TextShpere = () => {
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = [
                "Life",
                "Health",
                "Medicare",
                "ACA",
                "Home",
                "Final Expense",
                "Motorcycle",
                "Auto",
                "Car",
            ];
            const options = {
                radius: 300,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true
            };
            TagCloud(container, texts, options);
        };
    }, []);
    return (
        <>
            <div className='text-shpere'>
                <span className='tagcloud'></span>
            </div>
        </>
    )
}

export default TextShpere;