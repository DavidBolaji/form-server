// import { UserModel } from "../model/userModel.js";
// req.originalUrl === "/api/v1/users" &&
module.exports = (req, res) => {
  if (req.method == "GET") {
    res.json({ message: "welcome" });
    //     try {
    //       const users = await UserModel.find({});
    //       res.status(200).send({ message: "user fetch succesfully", data: users });
    //     } catch (error) {
    //       res.status(500).send({ message: "Server Error", data: [] });
    //     }
  } else {
    // try {
    //   const user = new UserModel({ ...req.body });
    //   await user.save();
    //   res.status(201).send({ message: "user created succesfully", data: user });
    // } catch (error) {
    //   res.status(500).send({ message: "Server Error", data: [] });
    // }
  }
};
