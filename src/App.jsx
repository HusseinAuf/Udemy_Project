import React, {useEffect , useState} from 'react';
import { Route , Routes} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/pages/HomePage';
import CoursePage from './components/pages/CoursePage';
import PagesNavbar from './components/widgets/PagesNavbar/index';
import Footer from './components/widgets/Footer';
const App = () => {
  const [data , setdata] = useState([]);
  const [searchText , setSearchText] = useState("");
  const url = 'http://localhost:3001/courses';
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(json => {
          setdata(json);
        });
    },[url])
  if(data.length === 0){
    return (
      <div className="spinner">
        <Spinner animation="border"/>
      </div>
    )
  }
  return (
    <div className='app'>
      <PagesNavbar setSearchText = {setSearchText}/>
      <Routes>
        <Route path='/' element={< HomePage data={data} searchText = {searchText}/>}/>
        <Route path='/courses/:courseId' element={< CoursePage data={data}/>}/>
      </Routes>
    </div>
  );
}

export default App;
