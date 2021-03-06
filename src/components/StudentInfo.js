import React, { useEffect, useState } from 'react';
import  { getStudentInfo }  from '../api';
import "../style/StudentInfo.css";





const StudentInfo = (props) => {
    
    const {studentsInfo, setStudentsInfo} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const [gradesOpen, setGradesOpen] = useState(false);

    useEffect(() => {
        (async () => {
            const students = await getStudentInfo();
               console.log("students", students);
            setStudentsInfo(students.students);
        })();
    }, []);


    return (
       <div>
        <div> <input type="text" placeholder='Search..' 
        onChange={event => {setSearchTerm(event.target.value)}}>
            </input></div>
        
           {
               studentsInfo.filter((val) => {
                   if(searchTerm === "") {
                       return val
                   } else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ) {
                       return val
                   }
               }).map(student => 
                    <div key = {student.id}>
                        <img className='student__image' src = {student.pic}></img>
                        <h2 className='student__profile'>{student.firstName.toUpperCase() + " " + student.lastName.toUpperCase()}</h2>
                        <p className = "student__profile">Email : {student.email}</p>
                        <p className = "student__profile">Company : {student.company}</p>
                        <p className = "student__profile">Skill : {student.skill}</p>
                        <p className = "student__profile">Average : {student.grades.reduce((sum, curr) => Number(sum) + Number(curr), 0) /
                                        student.grades.length}%</p>

                {<button key={student.id} onClick={() => { setGradesOpen({ open: !gradesOpen, id: student.id }) }} gradesOpen={gradesOpen}> Display Grades</button>}
                        {gradesOpen.open || gradesOpen.id === student.id?
                          <> Grades: {student.grades.map((grade,index) => <p key={index}>{grade}%</p>)}
                          </> : null}

                
                    </div>
                )
           }
        
        </div>
       
    );
};

export default StudentInfo;