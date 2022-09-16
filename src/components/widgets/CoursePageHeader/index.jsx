import "../../../styles/CoursePageHeader.css";
import { useParams } from "react-router-dom";
import StarsRating from "../StarsRating";
const CoursePageHeader = ({data}) =>{
    let {courseId} = useParams();
    return (
        <div className="course-header">
            <div className="topic-menue">
                <span className="text">{data[courseId]["category"]}</span>
                <span className="arrow">{" > "}</span>
                <span className="text">{data[courseId]["categoryTopic"]}</span>
                <span className="arrow">{" > "}</span>
                <span className="text">{data[courseId]["topic"]}</span>
            </div>
            <img
                src={data[courseId]["previewImage"]}  
                alt = {data[courseId]["title"]}
                className="preview-img"
            />
            <span className="course-title">{data[courseId]["title"]}</span>
            {/* <span className="test"> sdfs</span> */}
            <p className="course-introduction">{data[courseId]["Introduction"]}</p>
            <div className="details">
                <div className="rating-info">
                    <span className="rating">
                        <span className="number-rating">
                            {data[courseId]["rate"]}{" "} 
                        </span>
                        <span className="stars-rating">
                            <StarsRating rate={data[courseId]["rate"]} color={"rgb(243,202,140)"}/>
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
                <div className="created-by">
                    <span>Created by </span>
                    <span className="name">
                        {data[courseId]["instructor"]["name"]}
                    </span>
                </div>
                <div className="info">
                    <span><i className="fa fa-exclamation-circle icon"></i></span>
                    <span className="last-update">Last updated {data[courseId]["lastUpdate"]}</span>

                    <span><i className="fa fa-globe icon"></i></span>
                    <span className="language"> {data[courseId]["globe"]}</span>

                    <span><i className="fa fa-cc icon"></i></span>
                    <span className="subitile"> {data[courseId]["Captioning"]}</span>

                </div>
            </div>
        </div>
    );
};
export default CoursePageHeader;
