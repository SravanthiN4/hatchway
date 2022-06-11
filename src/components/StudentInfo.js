import React, { useEffect, useState } from 'react';
import  { getStudentInfo }  from '../api';



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
                        <p>Email : {student.email}</p>
                        <p>Company : {student.company}</p>
                        <p>Skill : {student.skill}</p>
                        <p>Average : {student.grades.reduce((sum, curr) => sum + curr, 0) /
                                        student.grades.length}</p>
                    </div>
                )
           }
        </div>
        </div>
       
    );
};

export default StudentInfo;