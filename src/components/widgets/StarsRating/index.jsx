import "../../../styles/StarsRating.css";
const StarsRating = ({rate , color}) => {
    let remainder = rate;
    let rating = [];
    for(let i=0; i<5 ; i++){
        if(remainder === 0) rating.push(0);
        else{
            rating.push(Math.min(1 , remainder));
        }
        remainder = Math.max(remainder-1 , 0);
    }
    const starStyle = (yellow) => ({
        background: `linear-gradient(to right, ${color} ${yellow}% , transparent 0%)`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        WebkitTextStroke : `1px ${color}`,
    });
    return (
        <>
            {
                rating.map((yellow,index)=>{
                    return(
                        <span key={index} className="fa fa-star" style={starStyle(yellow*100)}></span>
                    )
                })
            }
            
        </>
    );
}
export default StarsRating;