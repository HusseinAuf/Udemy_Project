import React, {useEffect , useState} from 'react';
import axios from 'axios';
const DataFetching = () => {
    const [posts , setposts] = useState([]);
    useEffec(() => {
        axios.get('http://localhost:3009/courses')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
         <div>

        </div>
    );
}

export default DataFetching;
