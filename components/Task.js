import { BsFillTrashFill } from 'react-icons/bs';
import { IoMdBrush } from 'react-icons/io';
import { useState } from 'react';
const Task = ({ id, taskText, deleteTask, updateTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [updateFormText, setUpdateForm] = useState('');

  const clickBrush = (id) => {
    setIsEdit(!isEdit);
    setSelectedId(id);
  };

  const updateFormSubmission = (e, id, text) => {
    e.preventDefault();
    updateTask(id, text);
    setIsEdit(false);
  };
  return (
    <div className="flex items-center text-white" key={id}>
      {isEdit ? (
        <form
          onSubmit={(e) => updateFormSubmission(e, id, updateFormText)}
          className="bg-[#031956] text-[#b6c7db] flex w-[70%] rounded-[15px] mb-[10px] flex-1"
        >
          <input
            type="text"
            className="flex items-center justify-between w-full p-[20px] text-xl bg-transparent"
            value={updateFormText}
            onChange={(e) => setUpdateForm(e.target.value)}
          />
        </form>
      ) : (
        <div className=" bg-[#031956] text-[#b6c7db] flex w-[70%] rounded-[15px] mb-[10px] flex-1">
          <div className="flex items-center justify-between w-full p-[20px] text-xl">
            {taskText}
          </div>
        </div>
      )}
      <div className="flex">
        <IoMdBrush
          className="text-2xl cursor-pointer ml-10"
          onClick={() => clickBrush(id)}
        />
        <BsFillTrashFill
          className="text-2xl cursor-pointer ml-10"
          onClick={() => deleteTask(id)}
        />
      </div>
    </div>
  );
};

export default Task;
