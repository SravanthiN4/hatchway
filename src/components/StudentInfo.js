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
                        <h2>{student.firstName}</h2>
                        <img className='student__image' src = {student.pic}></img>
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