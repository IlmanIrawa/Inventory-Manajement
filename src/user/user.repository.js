const prisma = require("../db");
// create user
async function insertUser(userData) {
  const newUser = await prisma.user.create({
    data: {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      role: userData.role,
    },
  });

  return newUser;
}
// menampilkan data semua user
async function findUsers() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
      },
    });
    return users;
  }
  // menampilkan data user berdasarkan id
  async function findUserById(id) {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
    return user;
  }
// update user
async function editUser(id, userData) {
    const updatedUser = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        username: userData.username,
        email: userData.email,
        password: userData.password,
        role: userData.role,
      },
    });
  
    return updatedUser;
  }
// delete user
async function deleteUser(id){
    await prisma.user.delete({
        where: {
            id: parseInt(id)
        }
    })
}
  module.exports = {
    insertUser,
    findUsers,
    findUserById,
    editUser,
    deleteUser
  };
  
  


