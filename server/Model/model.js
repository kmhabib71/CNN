const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const hasLowercase = /[a-z]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSymbol = /[@$!%*?&]/.test(password);
        const isLengthValid = password.length >= 8;

        return {
          hasLowercase,
          hasUppercase,
          hasDigit,
          hasSymbol,
          isLengthValid,
        };
      },
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character and be at least 8 characters long",
    },
  },
  role: {
    type: String,
  },
  bio: {
    type: String,
  },
  profilePhoto: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User: User,
};
