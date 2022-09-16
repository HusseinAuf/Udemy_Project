import { useState } from "react";
import { useParams } from "react-router-dom";
import "../../../styles/Description.css";
const Description = ({data}) => {
    let {courseId} = useParams();
    const [show_more , setShow_more] = useState(1);
    const showMoreRev = () => {
        if(show_more) setShow_more(0);
        else setShow_more(1);
    }
    return (
        <div className="description">
            <div className= {show_more?"content-show-more content" : "content-show-less content"}>
                <h1>Description</h1>
                {
                    data[courseId]["description"].map((paragraph , index) => {
                        return (
                            <div key={index} className="paragraph">
                                {paragraph}
                            </div>
                        )
                    })
                }
                <br/>
                <h1>Who this course is for:</h1>
                <div className="paragraph">
                    {data[courseId]["whoFor"]}
                </div>
            </div>
            <button onClick={showMoreRev} className={show_more? "btn-show-more" : "btn-show-less"}>{show_more? "Show more" : "Show less"}</button>
            
        </div>
    );
}
export default Description;