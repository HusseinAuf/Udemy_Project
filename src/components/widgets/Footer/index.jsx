import "../../../styles/Footer.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
const Footer = ({data}) => {
    let {courseId} = useParams();
    const { ref: myRef, inView: isImagVisible } = useInView();
    useEffect(() => {
        if(isImagVisible){
            const courseCard = document.querySelector('.course-card .details');
            courseCard.style.position = "static";
        }
        else{
            const courseCard = document.querySelector('.course-card .details');
            courseCard.style.position = "fixed";
            courseCard.style.top = "4px";
            courseCard.style.width = "341.800px";
        }
    }, [isImagVisible])
    return (
        <div className="footer" ref={myRef}>
            <span className="companies">
                <span className="text">
                    <span>Top companies choose </span>
                    <span className="link">Udemy Business</span>
                    <span> to build in-demand career skills.</span>
                </span>
                <img src="https://drive.google.com/uc?export=view&id=1kv3BgYr_KJWrTiNSit2rUhOhaEceFUUt" alt="" />
                <span className="line"></span>
            </span>
            <span className="container2">
                <span className="language">
                    <i className="fa-solid fa-globe"></i>
                    <span className="text"> English</span>
                </span>
                <span className="menue">
                    <span className="menue-group">
                        <span className="menue-item">Udemy Business</span>
                        <span className="menue-item">Teach on Udemy</span>
                        <span className="menue-item">Get the app</span>
                        <span className="menue-item">About us</span>
                        <span className="menue-item">Contact us</span>
                    </span>
                    <span className="menue-group">
                        <span className="menue-item">Careers</span>
                        <span className="menue-item">Blog</span>
                        <span className="menue-item">Help and Support</span>
                        <span className="menue-item">Affiliate</span>
                        <span className="menue-item">Investors</span>
                    </span>
                    <span className="menue-group">
                        <span className="menue-item">Terms</span>
                        <span className="menue-item">Privacy policy</span>
                        <span className="menue-item">Cookie settings</span>
                        <span className="menue-item">Sitemap</span>
                        <span className="menue-item">Accessibility statement</span>
                    </span>
                </span>
            </span>
            <span className="logo">
                <img src="https://drive.google.com/uc?export=view&id=1CgYXaY3p3Q6if90WqMX7TE9475uHskTY" alt="" />
                <span className="date">© 2022 Udemy, Inc.</span>
            </span>
            
        </div>
    );
}
export default Footer;