import "../../../styles/Requirements.css";
import { useParams } from "react-router-dom";
const Requirements = ({data}) => {
    let {courseId} = useParams();
    return (
        <div className="requirements">
            <h1 className="header">Requirements</h1>
            {
                data[courseId]["requirements"].map((require , index) => {
                    return (
                        <div key={index} className="require">
                            <i className="fa fa-circle"></i>
                            <span className="text">{require}</span>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default Requirements;