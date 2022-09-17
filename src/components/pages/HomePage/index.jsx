import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../../styles/HomePage.css"
import MainHeader from "../../widgets/MainHeader";
import CoursesMainHeader from "../../widgets/CoursesMainHeader";
import CoursesHeaderForTopics from "../../widgets/CoursesHeaderForTopics";
import CoursesCards from "../../widgets/CoursesCards";
import Footer from '../../widgets/Footer';
const HomePage = ({data , searchText}) => {
    return (
        <div>
            <section className="header-section">
                 <MainHeader />
            </section>
            <section className="courses-section">
                <CoursesMainHeader />
                <div className="courses-topics">
                    <CoursesHeaderForTopics/>
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
            <Footer homePage = {1}/>
        </div>
    );
}
export default HomePage;