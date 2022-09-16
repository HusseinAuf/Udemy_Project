import "../../../styles/Reviews.css";
import { useParams } from "react-router-dom";
import StarsRating from "../StarsRating";
import LikeDislikeButton from "../../atom/LikeDislikeButton";
const Reviews = ({data}) => {
    let {courseId} = useParams();
    return (
        <div className="reviews">
            <h1>Reviews</h1>
            {
                data[courseId]["reviews"].map((review, index) => {
                    return(
                        <div key={review["id"]} className="review">
                            <span className="profile">
                                <span className="picture">
                                    <span>{review["name"][0]}</span>
                                </span>
                                <span className="details">
                                    <span className="name">
                                        {review["name"]}
                                    </span>
                                    <span className="rate">
                                        <StarsRating rate={review["rate"]} color={"rgb(229,152,25)"} />
                                    </span>
                                    <span className="content">
                                         {review["content"]}
                                    </span>
                                    <span>
                                        <LikeDislikeButton/>
                                    </span>
                                </span>
                            </span>
                            <div className="line"></div>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default Reviews;