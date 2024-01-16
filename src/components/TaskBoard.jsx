import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import NotTaskFound from "./NotTaskFound";
import SearchTask from "./tasks/SearchTask";
import TaskActions from "./tasks/TaskActions";
import TaskLists from "./tasks/TaskLists";
const taskInitialize = {
  id: crypto.randomUUID(),
  title: "Learn React",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquam dolore facere.",
  tags: ["react", "javascript", "html"],
  priority: "High",
  isFavorite: true,
};

export default function TaskBoard() {
  const [tasks, setTasks] = useState([taskInitialize]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [updateTask, setUpdateTask] = useState(null);
  const handleOpenAddTaskModal = () => {
    setUpdateTask(null);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
      setShowModal(false);
    } else {
      const editTask = tasks.map((task) => {
        if (task.id === newTask.id) {
          return newTask;
        } else {
          return task;
        }
      });
      setTasks(editTask);
      setUpdateTask(null);
      setShowModal(false);
    }
  };
  const handleEdit = (task) => {
    setUpdateTask(task);
    setShowModal(true);
  };
  const handleDeleteAllTask = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };
  const handleFavorite = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    tasks[taskIndex].isFavorite = !tasks[taskIndex].isFavorite;
    setTasks([...tasks]);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {showModal && (
          <AddTaskModal
            onCloseModal={handleCloseModal}
            onSave={handleAddEditTask}
            editTask={updateTask}
          />
        )}
        <div className="p-2 flex justify-end">
          <SearchTask
            onSearch={(searchTerm) => {
              setSearchTerm(searchTerm);
            }}
          />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onAddTaskModal={handleOpenAddTaskModal}
            onDeleteAllTask={handleDeleteAllTask}
          />
          <div className="overflow-auto">
            {tasks.length > 0 ? (
              <TaskLists
                searchTerm={searchTerm}
                tasks={tasks}
                onFavorite={handleFavorite}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ) : (
              <NotTaskFound />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
