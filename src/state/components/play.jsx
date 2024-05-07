import { useDispatch, useSelector } from "react-redux"
import data from "../../data/db.json"
import { useEffect, useRef, useState } from "react"
import { setValue, unsetValue } from "../questionSlice"
import { useNavigate } from "react-router-dom"


const Play = () => {

const index = useSelector(state => state.question.value)
const points = useSelector(state => state.question.points)
const playerName = useSelector(state=> {
    const players = state.players.players
    return players.length > 0 ? players[players.length - 1].name : ""
})

const answerField = useRef()
const dispatch = useDispatch()
const navigate = useNavigate()

const [ifQuestion, setIfQuestion] = useState(true)

useEffect(() => {
    if (index >= data.length) {
        setIfQuestion(false);
        }
    }, [index])



const handleSubmit = (e) => {
    e.preventDefault()
    if(answerField.current.value === data[index].answer){
        alert(`Respuesta correcta, sumas 25 puntos!`)
        dispatch(setValue(25))
    } else if (answerField.current.value === ""){
        alert(`Respuesta vacia`)
    } else {
        alert(`Respuesta incorrecta! idiota`)
        dispatch(setValue(0))
    }

    answerField.current.value = ""
}

const goHome = () => {
    dispatch(unsetValue())
    navigate("/")
}
console.log("index", index);
console.log("points", points);
console.log("playerName", playerName);

return (
    <div className="container d-flex justify-content-center" style={{height:"350px"}}>
        {ifQuestion === true && data[index] ? (
            <form className="form d-flex flex-column align-items-center justify-content-between p-2" onSubmit={handleSubmit}>
                <label className="p-2 formLabel">Pregunta:</label>
                {data[index] && <label className="p-20 formLabel">{data[index].question}</label>}
                
                <select className="m-10 formInput" type="number" ref={answerField}>
                    {data[index].probableAnswers.map((answer, i) => (
                        <option key={i} value={answer}>{answer}</option>
                    ))}
                    {/* <option value={data[index].probableAnswers[0]}>{data[index].probableAnswers[0]}</option>
                    <option value={data[index].probableAnswers[1]}>{data[index].probableAnswers[1]}</option>
                    <option value={data[index].probableAnswers[2]}>{data[index].probableAnswers[2]}</option> */}
                </select>
                <button className="m-10 button" type="submit">Send</button>
                <label className="formLabel">Points: {points}</label>
            </form>
        ) : (
            <div className="container d-flex flex-column align-items-center" style={{backgroundColor: "white", width:"350px", borderRadius: "25px", boxShadow: "4px 4px 4px yellow", border: "2px solid black"}}>
                <label className="formLabel" style={{fontSize:"40px", textAlign: "center"}}>Se terminó el juego!</label>
                
                <label className="formLabel" style={{fontSize:"40px", textAlign: "center"}}>{playerName.toUpperCase()}, sumaste {points} puntos!</label>
                <hr></hr>
                <button className="m-10 button" onClick={goHome}>Play again</button>
            </div>
        )}
    </div>
);

}

export default Play;