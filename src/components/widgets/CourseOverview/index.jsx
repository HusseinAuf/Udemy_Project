import "../../../styles/CourseOverview.css";
const CourseOverview = ({data}) => {
    return (
        <div className="overview">

            <div className="head">What you'll learn</div>
            <div className="objectives">
            {
                data.map((objective , index) => {
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