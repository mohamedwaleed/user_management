'use strict';

const db = require('../models');

class UserService {

  async getAllUsers(offset, limit) {
    var users = [];
    if(offset && limit && !isNaN(offset) && !isNaN(offset)) {
      users = await db.user.findAll({offset: parseInt(offset),limit:parseInt(limit)});
    }
    else {
      users = await db.user.findAll();
    }
    var usersDtos = users.map(user => {
      return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        gender: user.gender
      };
    });
    return usersDtos;
  }

  validateUserObject(user) {
    if(typeof user !== 'object'){
      throw new Error("User must be an object");
    }
    if(!user.firstName){
      throw new Error("User must have a username");
    }
    if(!user.lastName){
      throw new Error("User must have a lastName");
    }
    if(!user.email){
      throw new Error("User must have an email");
    }
    if(!user.gender){
      throw new Error("User must have a gender");
    }
    if(user.gender !== 'male' && user.gender !== 'female'){
      throw new Error("gender must be male or female only");
    }
  }

  async getUsersCount() {
    var userCount = await db.user.count();
    return userCount;
  };
  async createNewUser(user, groupId) {
    this.validateUserObject(user);
    if(user ){
      if(!groupId || isNaN(groupId)) {
        throw new Error("Invalid group id");
      }
      var group = await db.group.findOne({where:{id: groupId}});
      if(group === null){
        throw new Error("Group is not exist");
      }else {
        var savedUser = await db.user.findOne({where:{email: user.email}});
        if(savedUser !== null) {
          throw new Error("The user is already exist");
        }
        savedUser = await db.user.create({
          first_name: user.firstName,
          last_name: user.lastName,
          email: user.email,
          gender: user.gender
        });
        savedUser.setGroups([group]);
        return savedUser;
      }
    }
    throw new Error("Invalid user object");
  }

  async joinGroup(userId, groupId) {
    if(!userId || isNaN(userId)) {
      throw new Error("Invalid user id");
    }
    if(!groupId || isNaN(groupId)) {
      throw new Error("Invalid group id");
    }
    var group = await db.group.findOne({where:{id: groupId}});
    if(group === null) {
      throw new Error("Group is not exists");
    }
    var user = await db.user.findOne({where:{id: userId}});
    if(user === null) {
      throw new Error("User is not exist");
    }
    var groupUser = await db.group_user.findOne({
      where: {
        group_id: groupId,
        user_id: userId
      }
    });
    if(groupUser !== null){
      throw new Error("User already joind this group");
    }
    await user.addGroup([group]);
    return true;
  }

  async removeUserFromGroup(userId, groupId) {
    if(!userId || isNaN(userId)) {
      throw new Error("Invalid user id");
    }
    if(!groupId || isNaN(groupId)) {
      throw new Error("Invalid group id");
    }
    var group = await db.group.findOne({where:{id: groupId}});
    if(group === null) {
      throw new Error("Group is not exists");
    }
    var user = await db.user.findOne({where:{id: userId}});
    if(user === null) {
      throw new Error("User is not exist");
    }
    var affectedRows = await db.group_user.destroy({
      where: {
        group_id: groupId,
        user_id: userId
      }
    });
    if(!affectedRows){
      throw new Error("This user does not exist in this group");
    }
    return true;
  }

  async deleteUser(userId) {
    if(!userId || isNaN(userId)) {
      throw new Error("Invalid user id");
    }
    var user = await db.user.findOne({where:{id: userId}});
    if(user === null) {
      throw new Error("User is not exist");
    }
    await user.destroy();
    return true;
  }

  async getUser(userId) {
    if(!userId || isNaN(userId)) {
      throw new Error("Invalid user id");
    }
    var user = await db.user.findOne({where:{id: userId}, include:[{model: db.group}]});
    if(user === null) {
      throw new Error("User is not exist");
    }
    var groupsDtos = user.groups.map(group => {
      return {
        id: group.id,
        name: group.name,
        categoryId: group.category_id
      };
    });
    var userDto = {
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      gender: user.gender,
      groups: groupsDtos
    };
    return userDto;
  }
}

module.exports = new UserService();
