
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const useAnimation = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1200,
            easing: "ease-in-sine",
            delay: 100,
          });
          AOS.refresh();
    }, []);
};

export default useAnimation;
