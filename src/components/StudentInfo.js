import React, { useEffect, useState } from 'react';
import  { getStudentInfo }  from '../api';
import "../style/StudentInfo.css";



const StudentInfo = (props) => {
    const {studentsInfo, setStudentsInfo} = props;

    useEffect(() => {
        (async () => {
            const students = await getStudentInfo();
            console.log("students", students);
            setStudentsInfo(students.students);
        })();
    }, []);
    return (
       <div>
        <div>
           {
               studentsInfo.map(student => 
                    <div key = {student.id}>
                        
                        <img className='student__image' src = {student.pic}></img>
                        <h2 className='student__profile'>{student.firstName.toUpperCase() + " " + student.lastName.toUpperCase()}</h2>
                        <p className = "student__profile">Email : {student.email}</p>
                        <p className = "student__profile">Company : {student.company}</p>
                        <p className = "student__profile">Skill : {student.skill}</p>
                        <p className = "student__profile">Average : {student.grades.reduce((sum, curr) => Number(sum) + Number(curr), 0) /
                                        student.grades.length}%</p>
                    </div>
                )
           }
        </div>
        </div>
       
    );
};

export default StudentInfo;