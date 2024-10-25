const mongoose = require("mongoose");
const { number, string } = require("zod");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  Username: String,
  phone: String,
  email: {type:String,unique:true},
  password: String
});
const Admin = new Schema({
  Username: String,
  phone: String,
  email: {type:String,unique:true},
  password: String
});

const Course = new Schema({
    creatorId: ObjectId,
    title: String,
    decsription: String,
    price:Number,
    imageUrl: String,
});
const Purchase = new Schema({
    userId: ObjectId,
    courseId: String,
    note:String
});

const UserModel = mongoose.model('users', User);
const AdminModel = mongoose.model('admin', Admin);
const CourseModel = mongoose.model('course', Course);
const PurchaseModel = mongoose.model('purchase', Purchase);

module.exports = {
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}