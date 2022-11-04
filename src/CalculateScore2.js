import React from 'react'                

const Student1Score =  [85, 90, 82];
const Student2Score =  [73, 75, 74];
const Student3Score =  [84, 70, 69];

function CalculateScore() {

        let StudAve1 = (Student1Score[0] + Student1Score[1] + Student1Score[2]) / Student1Score.length;
        let StudAve2 = (Student2Score[0] + Student2Score[1] + Student2Score[2]) / Student2Score.length;
        let StudAve3 = (Student3Score[0] + Student3Score[1] + Student3Score[2]) / Student3Score.length;
        let passedOrFailed1 = "";
        let passedOrFailed2 = "";
        let passedOrFailed3 = "";
         
        if (StudAve1 >= 75) {
            passedOrFailed1 = "Passed";
        } else {
            passedOrFailed1 = "Failed";
        };

        if (StudAve2 >= 75) {
            passedOrFailed2 = "Passed";
        } else {
            passedOrFailed2 = "Failed";
        };

        if (StudAve3 >= 75) {
            passedOrFailed3 = "Passed";
        } else {
            passedOrFailed3 = "Failed";
        };
        
        return (
            <div className="container">
                
                <div>
                <h1>CALCULATE SCORE</h1>
                </div>
                <table className='table'>
                <thead>
                    <tr>
                    <th>Student Name</th>
                    <th>Quiz 1</th>
                    <th>Quiz 2</th>
                    <th>Quiz 3</th>
                    <th>Average</th>
                    <th>Result</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Student A</td>
                        <td>{Student1Score[0]}</td>
                        <td>{Student1Score[1]}</td>
                        <td>{Student1Score[2]}</td>
                        <td>{StudAve1.toFixed(2).padEnd(4)}</td>
                        <td>{passedOrFailed1}</td>
                    </tr>
                    <tr>
                        <td>Student B</td>
                        <td>{Student2Score[0]}</td>
                        <td>{Student2Score[1]}</td>
                        <td>{Student2Score[2]}</td>
                        <td>{StudAve2.toFixed(2).padEnd(4)}</td>
                        <td>{passedOrFailed2}</td>
                    </tr>
                    <tr>
                        <td>Student C</td>
                        <td>{Student3Score[0]}</td>
                        <td>{Student3Score[1]}</td>
                        <td>{Student3Score[2]}</td>
                        <td>{StudAve3.toFixed(2).padEnd(4)}</td>
                        <td>{passedOrFailed3}</td>
                    </tr>
                </tbody>
                </table>
            </div>
        ); 
        
}

export default CalculateScore