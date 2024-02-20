import TodoListModel from "../models/Todolist.js";

const TodoListController = {
  taskCreation: async (req, res) => {
    try {
      const { task } = req.body;
      await TodoListModel.create({
        task,
      });
      res.status(200).json({ Message: "Task created." });
    } catch (error) {
      res
        .status(404)
        .json({ Message: "Something bad happened in task creation."+error });
    }
  },
  updateTask:async(req,res)=>{

  }
};

export default TodoListController;
