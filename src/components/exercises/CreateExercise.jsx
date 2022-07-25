import { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "../../styles/create-exercise.css"
import axios from "axios"

const CreateExercises = (props) => {
    const BE_URL = process.env.REACT_APP_BE_URL
    const [username, setUsername] = useState("")

    const [description, setDescription] = useState("")

    const [duration, setDuration] = useState("")

    const [date, setDate] = useState(Date.now())

    const [users, setUsers] = useState([])

    const handleSubmit = (e) => {
        try {
            e.preventDefault()
            const exercise = {
                username: username,
                description: description,
                duration: duration,
                date: date
            }
            axios.post(`${BE_URL}/exercises`, exercise).then((res) => console.log(res))

            console.log(exercise)

            window.location = "/" // Redirect to homepage
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        axios.get(`${BE_URL}/users`).then((res) => {
            if (res.data.length > 0) {
                setUsers(res.data.map((user) => user.username))
                setUsername(res.data[0].username)
            }
        })
    }, [])

    return (
        <div className='create-exercise-container'>
            <h3>Create New exercise Log</h3>

            <form onSubmit={handleSubmit}>
                <div className='form-group create-exercise-field'>
                    <label htmlFor='username'>Username</label>
                    <select
                        className='form-control'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    >
                        {users.map((user) => {
                            return (
                                <option key={user} value={user}>
                                    {user}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className='form-group create-exercise-field'>
                    <label>Description:</label>
                    <input
                        type='text'
                        value={description}
                        className='form-control'
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></input>
                </div>
                <div className='form-group create-exercise-field'>
                    <label>Duration(In minutes)</label>
                    <input
                        type='text'
                        className='form-control'
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                </div>
                <div className='form-group create-exercise-field'>
                    <label htmlFor='date'>Date: </label>
                    <div>
                        <DatePicker
                            className='create-exercise-datepicker'
                            id='date'
                            selected={date}
                            placeholder='Select a date'
                            onChange={(date) => setDate(date)}
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <input
                        type='submit'
                        value='Create Exercise Log'
                        placeholder='Select a date'
                        className='btn btn-primary'
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateExercises
