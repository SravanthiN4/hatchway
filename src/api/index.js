const baseUrl = 'https://api.hatchways.io/assessment/students';

export const getStudentInfo = async () => {
            
    let response;
    try {
        response = await fetch(`${baseUrl}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const studentsInfo = await response.json();
        console.log("api",studentsInfo);
        return studentsInfo;
    } catch (error) {
        console.log("error in getStudentInfo!")
        throw error;
    }
}