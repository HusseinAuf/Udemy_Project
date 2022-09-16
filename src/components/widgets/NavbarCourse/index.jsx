import "../../../styles/NavbarCourse.css";
import { useParams } from "react-router-dom";
const NavbarCourse = ({data}) => {
    let {courseId} = useParams();
    return (
        <div className="navbar-course">
            <div className="title">{data[courseId]["title"]}</div>
            <div className="rating-info">
                    <span className="rating">
                        <span className="number-rating">
                            {data[courseId]["rate"]}{" "} 
                        </span>
                        <span className="stars-rating">
                            <i className="fa-solid fa-star"></i>
                        </span>
                    </span>
                    <span className="rating-count">
                        <span>(</span>
                        <span className="text">
                            {data[courseId]["ratingCount"]} ratings
                        </span>
                        <span>)</span>
                    </span>
                    <span className="enroll-count">
                            {data[courseId]["enrollCount"]} students 
                    </span>
                </div>
        </div>
    );
}
export default NavbarCourse;