import "../../../styles/Instructor.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
const Instructor = ({data}) => {
    let {courseId} = useParams();
    const [show_more , setShow_more] = useState(1);
    const showMoreRev = () => {
        if(show_more) setShow_more(0);
        else setShow_more(1);
    }
    return (
        <div className="instructor">
            <h1>Instructors</h1>
            <div className="instructor-info">
                <div className="name">{data[courseId]["instructor"]["name"]}</div>
                <div className="intro">{data[courseId]["instructor"]["Intro"]}</div>
                <div className="profile">
                    <span><img src={data[courseId]["instructor"]["Image"]}></img></span>
                    <span className="info">
                        <span className="item">
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg></span>
                            <span>{data[courseId]["instructor"]["Rating"]} Instructor Rating</span>
                        </span>
                        <span className="item">
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"></path><path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"></path></svg></span>
                            <span>{data[courseId]["instructor"]["reviewsNumber"]} Reviews</span>
                        </span>
                        <span className="item">
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"></path><path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path></svg></span>
                            <span>{data[courseId]["instructor"]["studentsNumber"]} Students</span>
                        </span>
                        <span className="item">
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path></svg></span>
                            <span>{data[courseId]["instructor"]["coursesNumber"]} Courses</span>
                        </span>
                    </span>
                </div>
            </div>
            <div className="description">
                <p className={show_more? "description-more" : "description-less"}>
                    {data[courseId]["instructor"]["description"]}
                </p>
                <button onClick={showMoreRev} className={show_more? "btn-show-more" : "btn-show-less"}>
                    {show_more? "Show more" : "Show less"}
                </button>
            </div>
            
        </div>
    );
}
export default Instructor;