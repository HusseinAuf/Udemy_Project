import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../../styles/HomePage.css"
import MainHeader from "../../widgets/MainHeader";
import CoursesMainHeader from "../../widgets/CoursesMainHeader";
import CoursesHeaderForTopics from "../../widgets/CoursesHeaderForTopics";
import CoursesCards from "../../widgets/CoursesCards";
import {python_header} from '../../../constants/db.js'
const HomePage = ({data , searchText}) => {
    //  console.log(data.length);
    return (
        <div>
            <section className="header-section">
                 <MainHeader />
            </section>
            <section className="courses-section">
                <CoursesMainHeader />
                <div className="courses-topics">
                    <CoursesHeaderForTopics data = {python_header}/>
                    {
                        data.length === 0?
                        <div className="spinner">
                            <Spinner animation="border"/>
                        </div>
                        :
                        <CoursesCards data = {data} searchText = {searchText}/>
                    }
                </div>
            </section>
        </div>
    );
}
export default HomePage;