import "../../../styles/CoursesCards.css";
import StarsRating from "../StarsRating";
import { useNavigate } from "react-router-dom";
const CoursesCards = ({data , searchText}) =>{
    let navigate = useNavigate();
    return (
        <div className="courses-list">
        {
            data.filter((course) =>{
                 if(searchText === "")
                    return course;
                 if(course["title"].toLowerCase().includes(searchText.toLowerCase()))
                    return course;
            }).map((course , index) =>{ return (
                <div key={course["id"]} className="course" 
                onClick={() => {navigate(`/courses/${index}`)}}>
                    
                    <img
                        src={course["image"]}
                        alt = {course["title"]}
                        className="image"
                    />
                    <p className="title">
                        <strong>{course["title"]}</strong>
                    </p>
                    <p className="author">{course["instructor"]["name"]}</p>
                    <span className="rating">
                        <span className="number-rating">
                            {course["rate"]}{" "} 
                        </span>
                        <span className="stars-rating">
                            <StarsRating rate={course["rate"]} color={"rgb(229,152,25)"}/>
                        </span>
                    </span>
                    <p className="price">{course["price"]}</p>
                </div>
                )})
        }
        </div>
    );
};
export default CoursesCards;