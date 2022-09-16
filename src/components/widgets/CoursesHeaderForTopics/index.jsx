import "../../../styles/CoursesHeaderForTopics.css";
const CoursesHeaderForTopics = ({data}) =>{
    const {category , header , description} = data;
    return (
        <div className="header-courses-topic">
            <h1>{header}</h1>
            <p className="description">{description}</p>
            <button>Explore {category}</button>
        </div>
    );
};
export default CoursesHeaderForTopics;
