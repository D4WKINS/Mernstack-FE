import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import Index from "./components/home/Index.jsx"

import NavigationBar from "./components/nav/NavigationBar.jsx"

import CreateExercise from "./components/exercises/CreateExercise.jsx"

import EditExercise from "./components/exercises/EditExercise.jsx"

import ExercisesList from "./components/exercises/ExercisesList.jsx"

import CreateUser from "./components/user/CreateUser.jsx"

function App() {
    return (
        <div className='App'>
            <Router>
                {" "}
                {/* This is the router */}
                <div className='container'> </div>
                <NavigationBar />
                <Routes>
                    {" "}
                    {/* This is where we define our routes */}
                    <Route path='/' element={<ExercisesList />} />
                    <Route path='/edit/:id' element={<EditExercise />} />
                    <Route path='/create' element={<CreateExercise />} />
                    <Route path='/user' element={<CreateUser />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
