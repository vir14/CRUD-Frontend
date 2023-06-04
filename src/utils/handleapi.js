import axios from 'axios'
const baseUrl="http://localhost:5000"
const getAllTodo=(setTodo)=>{
    axios.get(baseUrl)
    .then(({data})=>{
        console.log('data --->, data');
        setTodo(data)
    })
}
const addToDo = (text, setText, setToDo) => {

    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllTodo(setToDo)
        })
        .catch((err) => console.log(err))

}
const updateToDo = (toDoId, text, setToDo, setText, setUpdating) => {

    axios
        .post(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setUpdating(false)
            getAllTodo(setToDo)
        })
        .catch((err) => console.log(err))

}
const deleteToDo = (_id, setToDo) => {

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllTodo(setToDo)
        })
        .catch((err) => console.log(err))

}
export {getAllTodo,addToDo,updateToDo,deleteToDo}