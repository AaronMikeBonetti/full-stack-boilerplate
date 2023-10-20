import Router from "express";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.send("Users Data!");
});

usersRouter.route("/:userId")
  .get((req, res) => {
    res.send(`Get user with id: ${req.params.userId}`);
    // res.status(200).json({
    //   user: req.params.userId,
    // });
  })
  .put((req, res) => {
    res.send(`Update user with id: ${req.params.userId}`);
    // res.status(200).json({
    //   user: req.params.userId,
    // });
  })
  .delete((req, res) => {
    res.send(`Delete user with id: ${req.params.userId}`);
    // res.status(200).json({
    //   user: req.params.userId,
    // });
  })

  usersRouter.param("userId", (req, res, next, userId) =>{
    console.log(userId)
    next()
  })

export default usersRouter;
