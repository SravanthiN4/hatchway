import {useEffect, useState} from 'react';
//import './App.css';
import {getStudentInfo} from './api'
import StudentInfo from './components/StudentInfo';



function App() {
  const [studentsInfo, setStudentsInfo] = useState([]);

  return (
    <div>
      
      <StudentInfo studentsInfo = {studentsInfo} setStudentsInfo = {setStudentsInfo}/>
    </div>
  );
}

export default App;
