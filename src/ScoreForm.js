import { useState } from 'react'

function ScoreForm () {

    const [inputs, setInputs] = useState({
        id: 0
    });

    const [result, setResult] = useState({});

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value; 
        setInputs(values=>({...values, [fieldName]: fieldValue}))
        console.log(inputs)

            if (fieldValue >= 75) {
            setResult(values=>({...values, quiz1_score: "Passed"}));
            } else  {
            setResult(values=>({...values, quiz1_score: "Failed"}));
            }
        }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        
    }


    return (
        <div className='container'>
            <form className='form text-input-form' onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col'>
                        <label>Student Name</label>
                        <input type="text" name="name" className='form-control' value={(inputs.name)} onChange={handleChange}></input>
                    </div> 
                    <div className='col'>
                        <label>Quiz #1</label>
                        <input type="number" name="quiz1_score" className='form-control' value={(inputs.quiz1_score)} onChange={handleChange}></input>
                    </div>
                    <div className='col'>
                        <label>Quiz #2</label>
                        <input type="number" name="quiz2_score" className='form-control' value={(inputs.quiz2_score)} onChange={handleChange}></input>
                        <div></div>
                    </div>
                    <div className='col'>
                        <label>Quiz #3</label>
                        <input type="number" name="quiz3_score" className='form-control' value={(inputs.quiz3_score)} onChange={handleChange}></input>
                        <div></div>
                    </div>
                    <div className='col'>
                        <label>Average</label>
                        <div name="quiz3_score" className='form-control' value={(inputs.average)} onChange={handleChange}></div                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      >
                        <div></div>
                    </div>
                    <div>
                    <div></div>
                    <div>Quiz 1: {result.quiz1_score}</div>
                    <div>Quiz 2: {result.quiz2_score}</div>
                    <div>Quiz 3: {result.quiz3_score}</div>
                    
                    
                    </div>
                </div>
                <input type="submit"/>
            </form>
    
        </div>
    )
}


export default ScoreForm;