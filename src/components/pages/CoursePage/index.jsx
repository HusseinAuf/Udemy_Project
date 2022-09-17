import "../../../styles/CoursePage.css"
import Spinner from 'react-bootstrap/Spinner';
import CoursePageHeader from "../../widgets/CoursePageHeader";
import CourseOverview from "../../widgets/CourseOverview";
import CourseContent from "../../widgets/CourseContent";
import CoursePageCard from "../../widgets/CoursePageCard";
import NavbarCourse from "../../widgets/NavbarCourse";
import Requirements from "../../widgets/Requirements";
import Description from "../../widgets/Description";
import Instructor from "../../widgets/Instructor";
import StudentFeedback from "../../widgets/StudentFeedback";
import Reviews from "../../widgets/Reviews";
import Footer from "../../widgets/Footer";
const CoursePage = ({data}) => {
    if(data.length === 0){
        return (
          <div className="spinner">
            <Spinner animation="border"/>
          </div>
        )
    }
    return (
        <div className="course-page">
            <NavbarCourse data={data}/>
            <div className="course-details">
                <CoursePageHeader data={data}/>
                <CourseOverview data={data}/>
                <CourseContent data={data}/>
            </div>
            <div className="course-card">
                <CoursePageCard data={data}/>
            </div>
            <Requirements data={data}/>
            <Description data={data}/>
            <Instructor data={data}/>
            <StudentFeedback data={data}/>
            <Reviews data={data}/>
            <Footer homePage = {0}/>
        </div>
    );
}
export default CoursePage;