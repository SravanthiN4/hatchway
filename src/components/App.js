import React, {useState, useEffect} from 'react';
import { hot } from 'react-hot-loader/root';
import StudentInfo from './StudentInfo';

const App = (props) => {
	
	const [studentsInfo, setStudentsInfo] = useState([]);
   
   

    return (
        <div>
        <StudentInfo/>
        </div>
        );
};
//newItem
export default hot(App);