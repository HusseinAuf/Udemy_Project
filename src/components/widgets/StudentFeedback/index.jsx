import "../../../styles/StudentFeedback.css";
import { useParams } from "react-router-dom";
import StarsRating from "../StarsRating";
const StudentFeedback = ({data}) => {
    let {courseId} = useParams();
    return (
        <div className="student-feedback">
            <h1>Student feedback</h1>
            <div className="rating-state">
                <span className="average-rate">
                    <span className="number">{data[courseId]["rate"]}</span>
                    <span className="stars"><StarsRating rate={data[courseId]["rate"]} color="rgb(229,152,25)" /></span>
                    <span className="text">Course Rating</span>
                </span>
                <span className="rate-details">
                    <span className="count-stars count-5-stars ">
                        <span className="gragh" style={{background: `linear-gradient(to right, rgb(106,111,115) ${data[courseId]["studentFeedback"][1]}% , rgb(209,215,220) 0%)`}}></span>
                        <span className="stars"><StarsRating rate={5} color="rgb(229,152,25)" /></span>
                        <span className="percent">{data[courseId]["studentFeedback"][0]}%</span>
                    </span>
                    <span className="count-stars count-4-stars">
                        <span className="gragh" style={{background: `linear-gradient(to right, rgb(106,111,115) ${data[courseId]["studentFeedback"][1]}% , rgb(209,215,220) 0%)`}}></span>
                        <span className="stars"><StarsRating rate={4} color="rgb(229,152,25)" /></span>
                        <span className="percent">{data[courseId]["studentFeedback"][1]}%</span>
                    </span>
                    <span className="count-stars count-3-stars">
                        <span className="gragh" style={{background: `linear-gradient(to right, rgb(106,111,115) ${data[courseId]["studentFeedback"][2]}% , rgb(209,215,220) 0%)`}}></span>
                        <span className="stars"><StarsRating rate={3} color="rgb(229,152,25)" /></span>
                        <span className="percent">{data[courseId]["studentFeedback"][2]}%</span>
                    </span>
                    <span className="count-stars count-2-stars">
                        <span className="gragh" style={{background: `linear-gradient(to right, rgb(106,111,115) ${data[courseId]["studentFeedback"][3]}% , rgb(209,215,220) 0%)`}}></span>
                        <span className="stars"><StarsRating rate={2} color="rgb(229,152,25)" /></span>
                        <span className="percent">{data[courseId]["studentFeedback"][3]}%</span>
                    </span>
                    <span className="count-stars count-1-stars">
                        <span className="gragh" style={{background: `linear-gradient(to right, rgb(106,111,115) ${data[courseId]["studentFeedback"][4]}% , rgb(209,215,220) 0%)`}}></span>
                        <span className="stars"><StarsRating rate={1} color="rgb(229,152,25)" /></span>
                        <span className="percent">{data[courseId]["studentFeedback"][4]}%</span>
                    </span>
                </span>
            </div>
        </div>
    );
}
export default StudentFeedback;