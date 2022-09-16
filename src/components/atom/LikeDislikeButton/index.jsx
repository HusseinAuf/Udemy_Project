import { useState } from "react";
import "../../../styles/LikeDislikeButton.css";

const LikeDislikeButton = ({data}) =>{
    const [likeClick , setLikeClick] = useState(0);
    const [DislikeClick , setDislikeClick] = useState(0);
    const LikeClicked = () => {
        if(likeClick){
            setLikeClick(0);
        }
        else{
            setLikeClick(1);
            setDislikeClick(0);
        }
    }
    const dislikeClicked = () => {
        if(DislikeClick){
            setDislikeClick(0);
        }
        else{
            setDislikeClick(1);
            setLikeClick(0);
        }
    }
    return (
        <span className="like-and-dislike">
            <span className="like" onClick={LikeClicked}>
                <i
                    className = {likeClick? "inactive fa fa-thumbs-o-up" : "active fa fa-thumbs-o-up"}
                ></i>
                <i 
                    className={likeClick? "active fa fa-thumbs-up" : "inactive fa fa-thumbs-up"}
                ></i>
            </span>
            <span className="dislike" onClick={dislikeClicked}>
                <i  
                    className = {DislikeClick? "inactive fa fa-thumbs-o-up" : "active fa fa-thumbs-o-up"}
                ></i>
                <i
                   className={DislikeClick? "active fa fa-thumbs-up" :"inactive fa fa-thumbs-up"}
                ></i>
            </span>
        </span>
        
    );
};
export default LikeDislikeButton;