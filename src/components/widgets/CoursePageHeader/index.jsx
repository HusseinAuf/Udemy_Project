import "../../../styles/CoursePageHeader.css";
import { useParams } from "react-router-dom";
import StarsRating from "../StarsRating";
const CoursePageHeader = ({data}) =>{
    let {courseId} = useParams();
    const getDiscount = (price , originalPrice) =>{
        return Math.round(100 - (parseInt(price)*100/parseInt(originalPrice)));
    }
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
                    <span>
                        <span><i className="fa fa-exclamation-circle icon"></i></span>
                        <span className="last-update">Last updated {data[courseId]["lastUpdate"]}</span>
                    </span>
                    <span>
                        <span><i className="fa fa-globe icon"></i></span>
                        <span className="language"> {data[courseId]["globe"]}</span>
                    </span>
                    <span>
                        <span><i className="fa fa-cc icon"></i></span>
                        <span className="subitile"> {data[courseId]["Captioning"]}</span>
                    </span>

                </div>

                <span className="price-details">
                    <span className="price">E£{data[courseId]["price"]}</span>
                    <span className="original-price">E£{data[courseId]["originalPrice"]}</span>
                    <span className="discount">{getDiscount(data[courseId]["price"] , data[courseId]["originalPrice"])}% off</span>
                </span>
                <button className="add-to-cart">Add to cart</button>
                <div className="money-back">30-Day Money-Back Guarantee</div>
                <div className="share">
                    <span>Share</span>
                    <span>Gift this course</span>
                    <span>Apply Coupon</span>
                </div>

            </div>
        </div>
    );
};
export default CoursePageHeader;
