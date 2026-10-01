const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt'); 
 
mongoose.connect('mongodb://localhost:27017/instagram-clone'); 
 
const userSchema = new mongoose.Schema({ 
  username: String, 
  name: { type: String, default: "" }, 
  email: { type: String, unique: true }, 
  password: String, 
  profilePic: { type: String, default: "" }, 
  website: { type: String, default: "" }, 
  bio: { type: String, default: "" }, 
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
  role: { type: String, default: 'user' } 
}); 
const User = mongoose.model('User', userSchema); 
 
async function seed() { 
  const users = [ 
    { username: 'john_doe', email: 'john_doe@test.com' }, 
    { username: 'emma_watson', email: 'emma_watson@test.com' }, 
    { username: 'alex_smith', email: 'alex_smith@test.com' }, 
    { username: 'sophia_lee', email: 'sophia_lee@test.com' }, 
    { username: 'michael_brown', email: 'michael_brown@test.com' }, 
    { username: 'olivia_davis', email: 'olivia_davis@test.com' }, 
    { username: 'daniel_wilson', email: 'daniel_wilson@test.com' }, 
    { username: 'ava_martinez', email: 'ava_martinez@test.com' }, 
    { username: 'liam_anderson', email: 'liam_anderson@test.com' }, 
    { username: 'mia_thomas', email: 'mia_thomas@test.com' } 
  ]; 
 
  for (const u of users) { 
    const exists = await User.findOne({ email: u.email }); 
    if (!exists) { 
      const hashed = await bcrypt.hash('password123', 10); 
      await User.create({ username: u.username, email: u.email, password: hashed }); 
      console.log(`Created ${u.username}`); 
    } else { 
      console.log(`${u.username} already exists`); 
    } 
  } 
  mongoose.disconnect(); 
} 
 
seed();