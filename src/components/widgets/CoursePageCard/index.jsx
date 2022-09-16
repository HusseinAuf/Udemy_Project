import { useEffect } from "react";
import "../../../styles/CoursePageCard.css";
import { useParams } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
const CoursePageCard = ({data}) => {
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
    const getDiscount = (price , originalPrice) =>{
        return Math.round(100 - (parseInt(price)*100/parseInt(originalPrice)));
    }
    return (
        <>
            <img
                src={data[courseId]["previewImage"]}  
                ref={myRef}
                alt = {data[courseId]["title"]}
                className="preview-img"
            />
            <div className="details">
                <span className="price-details">
                    <span className="price">E£{data[courseId]["price"]}</span>
                    <span className="original-price">E£{data[courseId]["originalPrice"]}</span>
                    <span className="discount">{getDiscount(data[courseId]["price"] , data[courseId]["originalPrice"])}% off</span>
                </span>
                <div className="days-left">
                     <i className="fa fa-clock-o" aria-hidden="true"></i>
                     <span>{" "}{data[courseId]["daysLeft"]} day left at this price!</span>
                </div>
                <button className="add-to-cart">Add to cart</button>
                <button className="buy-now">Buy now</button>
                <div className="money-back">30-Day Money-Back Guarantee</div>
                <div className="course-include">
                    <h1>This course includes:</h1>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"></path></svg>
                        <span>{data[courseId]["hoursCount"]} hours on-demand video</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"></path></svg>
                        <span>{data[courseId]["articlesCount"]} article</span>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></svg>
                        <span>{data[courseId]["downloadableResource"]} downloadable resources</span>
                    </div>

                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z"></path></svg>
                        <span>Full lifetime access</span>
                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"></path><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>
                        <span>Access on mobile and TV</span>
                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path><path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path></svg>
                        <span>Certificate of completion</span>
                    </div>
                </div>
                <div className="share">
                    <span>Share</span>
                    <span>Gift this course</span>
                    <span>Apply Coupon</span>
                </div>
                <div className="udemy-business">
                    <h1>Training 5 or more people?</h1>
                    <p>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
                    <button>Try Udemy business</button>
                </div>
            </div>
        </>
    );
}
export default CoursePageCard;