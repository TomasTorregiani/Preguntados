import { useDispatch, useSelector } from "react-redux"
import { setPlayers } from "../playerSlice"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"


const Home = () => {

    const dispatch = useDispatch()
    const nameField = useRef(null)
    const lastnameField = useRef(null)
    const navigate = useNavigate()

    const playersArray = useSelector(state => state.players.players)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setPlayers({
            name: nameField.current.value,
            lastname: lastnameField.current.value
        }))
        nameField.current.value = ""
        lastnameField.current.value = ""    
        navigate("/play")
    }
    console.log("array", playersArray);

    return (
        <>
            <h1 style={{textAlign:"center", backgroundColor: "white", fontSize:"50px", marginBottom: "100px"}}>PREGUNTADOS</h1>
            <div className="container d-flex justify-content-center" style={{height:"250px"}}>
            
            <form className="form d-flex flex-column align-items-center justify-content-between p-2" onSubmit={handleSubmit}>
                <label className="formLabel">Name</label>
                <input className="formInput" type="text" ref={nameField}></input>
                <label className="formLabel">Last Name</label>
                <input className="formInput" type="text" ref={lastnameField}></input>
                <button className="button" type="submit">Play</button>
            </form>
        
        </div>
        </>
    )
}

export default Home;