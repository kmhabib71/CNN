const { User } = require("../Model/model");
const bcrypt = require("bcrypt");

exports.isAuth = async (req, res) => {
  // console.log("Middleware is running");
  // console.log("Session is", req.session);
  // console.log("User userrole:", req.session.userrole);
  // console.log("Middleware is running");
  // console.log("Session is", req.session);
  // console.log("User userrole:", req.session.userrole);
  // Later change userRole and userId for dinamic get
  const userRole = req.session.userRole;
  // const userRole = "Admin";
  const userid = req.session.userid;
  // const userid = "659a832725988cb6842f2b8a";

  // check if the user role is equal to Admin, Editor or Writer
  if (userRole === "Admin") {
    // do something for Admin users
    res.status(200).json({ Role: userRole, userid: userid });
  } else if (userRole === "Editor") {
    // do something for Editor users
    res.status(200).json({ Role: userRole, userid: userid });
  } else if (userRole === "Writer") {
    // do something for Writer users
    res.status(200).json({ Role: userRole, userid: userid });
  } else {
    // do something for other users
    res.status(200).json({ Role: false });
  }

  // Send userRole as part of the response
};

exports.login = async function (req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid Credential" });
    }

    req.session.userid = user._id;
    if (user.role) {
      req.session.userRole = user.role;
    }
    req.session.save();

    console.log("req.session :", req.session);
    res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.register = async function (req, res) {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@$!%#*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special  character, and be at least 8 character long",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = {};
      for (const field in error.errors) {
        validationErrors[field] = error.errors[field].message;
      }
      return res.status(400).json({ validationErrors });
    }
    console.log(error);
  }
  console.log("Its a post request to register a user.");
  console.log("req is: ", req.body);
};
