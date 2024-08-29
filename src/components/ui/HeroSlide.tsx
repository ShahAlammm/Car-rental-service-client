import { useState, useEffect } from 'react';
import image from '../../assets/hero-bg.png';
import image1 from '../../assets/hero.png';
import image2 from '../../assets/car2.png';
import image3 from '../../assets/car3.png';
import image4 from '../../assets/car4.png';
import image5 from '../../assets/car5.png';
import image6 from '../../assets/car6.png';
import image7 from '../../assets/car7.png';
import image8 from '../../assets/car8.png';
import image9 from '../../assets/car9.png';
import image10 from '../../assets/car10.png';
import image11 from '../../assets/car11.png';
import image13 from '../../assets/car13.png';
import image14 from '../../assets/car14.png';
import image15 from '../../assets/car15.png';
import image17 from '../../assets/car17.png';
import image18 from '../../assets/car18.png';
import image19 from '../../assets/car19.png';


const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image13,
    image14,
    image15,
    image17,
    image18,
    image19
];

const HeroSlide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='h-96 md:h-[40rem] relative flex items-center w-full justify-center overflow-hidden bg-cover bg-left bg-no-repeat'

            style={{ backgroundImage: `url(${image})` }}
        >

            <div className="relative w-full lg:h-2/3 h-52 transition-transform duration-300 hover:scale-105">
                {images.map((image, index) => (
                    <div

                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full" />
                    </div>
                ))}
            </div>

        </div>

    );
};

export default HeroSlide;
