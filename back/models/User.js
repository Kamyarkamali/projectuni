const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});


userSchema.pre("save", function (next) {
  let user = this;

  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);

    user.password = hash;
    next();
  });
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
