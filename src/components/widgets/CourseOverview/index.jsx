import "../../../styles/CourseOverview.css";
import { useParams } from "react-router-dom";
const CourseOverview = ({data}) => {
    let {courseId} = useParams();
    return (
        <div className="overview">

            <div className="head">What you'll learn</div>
            <div className="objectives">
            {
                data[courseId]["overview"].map((objective , index) => {
                    return(
                        <span key={index} className="objective">
                            <span className="icon"><i className="fa fa-check" aria-hidden="true"></i></span>
                            <span className="text">{objective}</span>
                        </span>
                    )
                })
            }
            </div>
            
        </div>
    );
}
export default CourseOverview;