import { Ribbon } from 'lucide-react';
import { useLocation } from 'react-router-dom';

function HeroSection() {
    const location = useLocation();
    const hiddenPaths = ["/login", "/about-us","/room-details","/signup","/menu-item"]; 
    const isHidden = hiddenPaths.includes(location.pathname); 
    return (
        <>
            {!isHidden && (

                <div className="hero">

                    <div className="overlay"></div>
                    <h1>Experience Luxury & Comfort</h1>

                    <div className="scroll-icon">
                        <Ribbon size={20} color="white" />
                    </div>


                </div>
            )}
        </>
    );
}

export default HeroSection;
