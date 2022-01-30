import { useState } from 'react';
import './App.css';
import Todo from './Todo';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const [taskName, setTaskName] = useState('');

  const removeTodo = (index) => {
    setTodoList(todoList.filter((element, currentIndex) => currentIndex !== index))
  }
  //<Icon color="primary">add_circle</Icon>
  return (
    <div>
      <div >
        <div className="position-absolute top-50 start-50 translate-middle ">
          <div className='AddInput'>
          <TextField id="filled-basic" label="Enter new task" variant="filled" onChange={event => setTaskName(event.target.value)}></TextField>
          </div>

          {taskName !== '' ? <div className='AddButton'> <Fab size="small" color="primary" aria-label="add" onClick={() => setTodoList([...todoList, taskName])}>
        <AddIcon />
      </Fab></div> : <div className='AddButton'><Fab size="small" color="primary" aria-label="add" disabled onClick={() => setTodoList([...todoList, taskName])}>
        <AddIcon />
      </Fab></div>}

          <ul>
            {todoList.map((item, index) => <Todo key={index} index={index} todoItem={item} remFun={removeTodo}></Todo>)}
          </ul>
        </div>
      </div>
    </div>
  )

};

export default App;
