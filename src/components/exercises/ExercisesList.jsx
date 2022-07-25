import { Link } from "react-router-dom"
import { useCallback, useState, useEffect } from "react"
import axios from "axios"

const Exercise = (props) => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>{" "}
        {/* substring removes parts of the string, syntax substring(startIndex,endIndex)*/}
        <td>
            <Link to={`/edit/${props.exercise._id}`}>edit</Link> |{" "}
            <a href='#' onClick={() => props.deleteExercise(props.exercise._id)}>
                delete
            </a>
        </td>
    </tr>
)

const CreateExercise = () => {
    const BE_URL = process.env.REACT_APP_BE_URL
    const [exercises, setExercises] = useState([])

    const handleDeleteExercise = (id) => {
        setExercises(exercises.filter((el) => el._id !== id))
        axios.delete(`${BE_URL}/exercises/${id}`).then((res) => console.log(res.data))
    }

    const exerciseList = () => {
        return exercises.map((currentexercise) => {
            return (
                <Exercise
                    exercise={currentexercise}
                    deleteExercise={(id) => handleDeleteExercise(id)}
                    key={currentexercise._id}
                />
            )
        })
    }

    useEffect(() => {
        axios
            .get(`${BE_URL}/exercises`)
            .then((res) => {
                setExercises(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [BE_URL])
    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className='table'>
                <thead className='thead-light'>
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{exerciseList()}</tbody>
            </table>
        </div>
    )
}

export default CreateExercise
