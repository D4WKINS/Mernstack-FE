import { useState, useEffect } from "react"

const EditExercises = (props) => {
    const [username, setUsername] = useState("")

    const [description, setDescription] = useState("")

    const [duration, setDuration] = useState("")

    const [date, setDate] = useState("")

    const [users, setUsers] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }
        console.log(exercise)

        window.location = "/" // Redirect to homepage
    }

    useEffect(() => {
        setUsers({
            users: ["test user"],
            username: "test user"
        })
    })

    return <div>//Enter form code here</div>
}

export default EditExercises
