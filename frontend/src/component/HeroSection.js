import { Ribbon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function HeroSection() {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";
    return (
        <>
            {!isLoginPage && (

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
