import { useState } from "react"
import "../../styles/create-user.css"
import axios from "axios"

const CreateUser = () => {
    const BE_URL = process.env.REACT_APP_BE_URL
    const [username, setUsername] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post(`${BE_URL}/users`, {
                username: username
            })
            .then((res) => console.log(res.data))
    }
    return (
        <div className='create-user-form-container'>
            <h3>Create New user</h3>
            <form onSubmit={() => handleSubmit()}>
                <div className='form-group mb-4'>
                    <label>Username: </label>
                    <input
                        type='text'
                        className='form-control'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <button
                        type='submit'
                        value='Create User'
                        onClick={(e) => handleSubmit(e)}
                        className='btn btn-primary'
                    >
                        Create User
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateUser
