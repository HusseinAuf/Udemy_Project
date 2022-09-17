
import "../../../styles/PagesNavbar.css";
import { useState , useContext } from "react";
import { useNavigate } from "react-router-dom";
const PagesNavbar = ({setSearchText}) => {
    const [searchChange , setSearchChange] = useState("");
    let navigate = useNavigate();
    return (
        <div className="nav--bar">
            <img
                className="udemy-icom"
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                alt="udemy icom"
                onClick={() => {navigate('/')}}
            />
            <a className="op">Catagories</a>
            <form className="search">
                <button className="search_btn" 
                onClick={(event) => {
                    event.preventDefault();
                    setSearchText(searchChange);                   
                }}
                >
                <i className="fa fa-search"> </i>
                </button>
                <input
                type="text"
                placeholder="Search for any thing"
                name="search"
                className="search_txt"
                onChange={(event) => {
                    setSearchChange(event.target.value);
                }}
            />
            </form>
            <a className="op">Udemy Business</a>
            <a className="op">Teck on Udemy</a>
            <button className="cart">
                <i className="fa fa-shopping-cart"></i>
            </button>
            <a className="__log-in"><strong>Log in</strong></a>
            <a className="__sign-up"><strong>Sign up</strong> </a>
            <button className="lang">
                <i className="fa fa-globe"></i>
            </button>
            <i id="search-icon" className="fa fa-search"> </i>
            <i id="menue-icon" className="fa fa-bars"></i>
        </div>
    );
}
export default PagesNavbar;

