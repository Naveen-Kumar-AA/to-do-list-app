import './App.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = ({ index, todoItem, remFun }) => {

  return (
    <div>
      <li>{todoItem}
      <IconButton aria-label="delete" size="large" onClick={() => remFun(index)}>
      <DeleteIcon />
      </IconButton></li>
    </div>
  )
}

export default Todo;

// <Avatar sx={{ bgcolor: green[500] }}>
// <AssignmentIcon />
// </Avatar>
// import Avatar from '@mui/material/Avatar';
// import AssignmentIcon from '@mui/icons-material/Assignment';