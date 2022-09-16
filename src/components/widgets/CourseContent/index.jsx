import "../../../styles/CourseContent.css";
import { useParams } from "react-router-dom";
const CourseContent = ({data}) => {
    let {courseId} = useParams();
    const showMore = () =>{
         const tmp = document.querySelectorAll(".course-content .content-table .section");
         const allSectoin = Array.from(tmp);
         allSectoin.map((section , index) =>{
            section.style.display = "block";
         });
         const btn = document.querySelector(".course-content .content-table button");
         btn.style.display = "none";
    }
    const isVisible = (index) => {
        if(index < 10) return {
            display: "block",
        }
        else return {
            display: "none",
        }
    }
    return (
        <div className="course-content">
            <div className="head">Course content</div>
            <div>
            <span className="content-info">
                <span>{data[courseId]["sectionsCount"]} section • </span>
                <span>{data[courseId]["lecturesCount"]} lectures • </span>
                <span>{data[courseId]["totalLength"]} total length</span>
            </span>
            <span className="expand-sections">Expand all sections</span>
            </div>
            <div className="content-table">
                {
                data[courseId]["content"].map((section,index1) =>{
                    return(
                        <div key={index1} className="section" style={isVisible(index1)}>
                            <details>
                                <summary>
                                    <span className="text">{section["title"]}</span>
                                </summary>
                                {
                                    section["items"].map((lesson , index2) => {
                                        return(
                                            <div key={index2} className='lesson' >
                                                <i className="fa fa-play-circle"></i>
                                                <span className="text"> {lesson["title"]}</span>
                                            </div>
                                        )
                                    })
                                }
                            </details>
                        </div>
                    )
                })
                }
                {
                    (() => {
                            if(Object.keys(data[courseId]["content"]).length > 10) 
                                return (
                                <button onClick={showMore} className="show-more">
                                    {Object.keys(data[courseId]["content"]).length - 10} more sectoins
                                    </button>
                                )
                            return null;
                    })()
                }
                
            </div>
        </div>
    );
}
export default CourseContent;