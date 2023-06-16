const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const mongoosePaginate=require("mongoose-paginate-v2");
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, default: Date.now },
});
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

userSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("user", userSchema);
