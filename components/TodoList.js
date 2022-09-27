import Navbar from './Navbar';
import { IoMdAddCircle, IoMdBrush } from 'react-icons/io';
import Task from './Task';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoList = ({ tasks }) => {
  //estado de las tareas renderizadas
  const [tasksInList, setTasksInList] = useState(tasks);

  //capturar el valor del formulario
  const [newTaskText, setNewTaskText] = useState('');

  const handleInputChange = (e) => {
    setNewTaskText(e.target.value);
  };

  //que pasara cuando se le de click al boton de agregar
  const handleSubmit = (e) => {
    e.preventDefault();
    //aqui es el obejot que esta renderizando  las tareas  le agregas un objeto nuevo con un id creado por uuid
    const newTaskObject = [
      ...tasksInList,
      { id: uuidv4(), taskText: newTaskText },
    ];
    setTasksInList(newTaskObject);
    setNewTaskText('');
  };

  const deleteTask = (taskid) => {
    //del array de tasksInList has un filtro donde haces una copia del array pero dejando todas las id diferentes
    //el task id es el de cada tarea que se toma como propiedad del componente <Task/>
    const tasksfilter = tasksInList.filter((item) => item.id !== taskid);
    console.log(taskid);
    setTasksInList(tasksfilter);
  };
  //fucnion para cambiar el tasktext
  const updateTask = (taskid, text) => {
    const tasksFilter = (taskid) => {
      return tasksInList.filter((item) => item.id == taskid);
    };
    console.log((tasksFilter(taskid)[0].taskText = text));
    //modificas el estado seleccionando el id y el text es el valor del form
    //el [0] es para agarrar el primer elemento del array filtrado
    tasksFilter(taskid)[0].taskText = text;
  };
  console.log(tasksInList);

  return (
    <div className="w-[70%] bg-[#354ea3] py-4 px-9 rounded-[30px] overflow-y-scroll">
      <Navbar />
      <h2 className="text-4xl bolder text-white pb-8">
        What&apos;s up, Kevin!
      </h2>
      <div className="py-3 text-[#7d99e9]">TODAY&apos;S TASKS</div>
      <form
        className="flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-[10px] w-full p-[10px] border-none outline-none bg-[#031956] text-white mb-[10px]"
          placeholder="Add a task for today..."
          onChange={handleInputChange}
          value={newTaskText}
          // take input from the form here
        />
        <div>
          <button type="submit">
            <IoMdAddCircle
              // Add an onClick method
              className="text-[#ea0aff] text-[50px] cursor-pointer ml-[20px] mb-[10px]"
            />
          </button>
        </div>
      </form>
      <ul>
        {/* Loop through all tasks here using the Task component */}
        {tasksInList.map((item) => (
          <Task
            key={item.id}
            id={item.id}
            taskText={item.taskText}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
