import {useeffect} from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation(); 

    useeffect(() => {
        window.scrollTo(0, 0); 
    }, [pathname]);
    return children || null;
};
export default ScrollToTop;