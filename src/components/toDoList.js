import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ToDoList() {
    const [counter, setCounter] = React.useState(1);
    const [tasks, setTasks] = React.useState([]);
    const [textTask, setTextTask] = React.useState('');

    const updateCounter = () => {
        setCounter(counter + 1);
    }

    const addTask = () => {
        setTasks([...tasks, {id:counter, text: textTask}]);
        updateCounter();
        const textField = document.querySelector('#input-task');
        textField.value = '';
    }

    const deleteTask = (e) => {
      const idToDelete = e.target.closest('.item-task').id
      
      tasks.map((task) => {
            
            if (Number(task.id) == idToDelete) {
                tasks.splice(tasks.indexOf(task), 1);
            }
        })
      setTasks([...tasks]);
      
        
    }

    //Из material UI
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };
    return (
        <div>
            <div className='add-task'>
            <TextField id="input-task" label="Задача" variant="filled" onChange={(e) => {setTextTask(e.target.value);
    }}/> 
            <Button variant="contained" color="success" onClick={addTask}>
            Добавить
            </Button>
            </div>
            
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {tasks.map((value) => {
        const labelId = `checkbox-list-label-${value.id}`;

        return (
          <ListItem className='item-task' id={value.id}
            key={value.id}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={deleteTask}>
                  <DeleteIcon />
                </IconButton>
              }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value.text}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
        </div>
        
     );
}

export default ToDoList;