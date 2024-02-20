import TodoListModel from "../models/Todolist.js";

const TodoListController = {
  taskCreation: async (req, res) => {
    try {
      const { task } = req.body;
      await TodoListModel.create({
        userId: req.session.user.id,
        task,
      });
      res.status(200).json({ Message: "Task created." });
    } catch (error) {
      res
        .status(404)
        .json({ Message: "Something bad happened in task creation." + error });
    }
  },
  updateTask: async (req, res) => {
    try {
      const { id } = req.params;
      const { task } = req.body;
      const TodoTask = await TodoListModel.findOne({
        where: { id },
      });
      if (TodoTask) {
        TodoTask.task = task;
        TodoTask.save(res.json({ message: "Task updated successfully." }));
      } else {
        res.status(400).json({ message: "Task not found for updation" });
      }
    } catch (error) {
      res
        .status(404)
        .json({ message: "Something bad happend in task updation." });
    }
  },
  deleteTask: async (req, res) => {
    try {
      const { id } = req.params;
      const TodoTask = await TodoListModel.findOne({
        where: { id },
      });
      if (TodoTask) {
        TodoTask.destroy(res.json({ message: "Task deleted successfully." }));
      } else {
        res.status(400).json({ message: "Task not found for deletion" });
      }
    } catch (error) {
      res
        .status(404)
        .json({ message: "Something bad happened in task deletion" });
    }
  },
  getAll: async (req, res) => {
    try {
      const TodoTask = await TodoListModel.findAll({});
      res.status(200).json({ message: "Task Found", TodoTask });
    } catch (error) {
      res
        .status(404)
        .json({ message: "Something bad happened in fetching Tasks.", error });
    }
  },
};

export default TodoListController;
