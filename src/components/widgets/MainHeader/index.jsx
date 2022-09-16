import "../../../styles/MainHeader.css";
const MainHeader = () => {
    return (
        <div className="header-container">
        <div className="header-text">
          <h1>New to Udemy? Lucky you.</h1>
          <p>
            Courses start at E€169.99. Get your new-student offer before it
            expires.
          </p>
        </div>
        <img className="alarm" src="https://i.ibb.co/Fb9h3kj/alarm.png" alt="alarm image" />
      </div>
    );
}
export default MainHeader;