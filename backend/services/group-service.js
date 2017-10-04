'use strict';

const db = require('../models');

class GroupService {

  validateInput(group) {
      if(typeof group !== 'object') {
        throw new Error("Group must be an object");
      }
      if(!group.name){
        throw new Error("Group must have a name");
      }
      if(!group.categoryId) {
        throw new Error("Group must have a category id");
      }
      if(isNaN(group.categoryId)) {
        throw new Error("Group must be a number");
      }
  }

  async createNewGroup(group) {
    this.validateInput(group);
    var category = await db.category.findOne({where:{id: group.categoryId}});
    if(category === null ){
      throw new Error("Category is not exist");
    }
    var createdGroup = await db.group.create({
      name: group.name,
      category_id: group.categoryId
    });
    if(createdGroup === null) {
      throw new Error("An error occured while creating new group");
    }
    var groupDto = {
      id: createdGroup.id,
      name: createdGroup.name,
      categoryId: createdGroup.category_id
    };
    return groupDto;
  }

  async getGroupsCount() {
    var numberOfGroups = await db.group.count();
    return numberOfGroups;
  }

  async getAllGroups(offset, limit) {
    var groups = [];
    if(offset && limit && !isNaN(offset) && !isNaN(offset)) {
      groups = await db.group.findAll({offset: parseInt(offset),limit:parseInt(limit),include: [{model: db.category}]});
    }
    else {
      groups = await db.group.findAll({include: [{model: db.category}]});
    }
    var groupsDtos = groups.map(group => {
      return {
        id: group.id,
        name: group.name,
        categoryId: group.category_id,
        category: group.category.name
      };
    });
    return groupsDtos;
  }

  async deleteGroup(groupId) {
    if(!groupId || isNaN(groupId)) {
      throw new Error("Invalid group id");
    }
    var group = await db.group.findOne({where:{id: groupId}});
    if(group === null) {
      throw new Error("Group is not exist");
    }
    var users = await group.getUsers();
    if(users.length > 0) {
      throw new Error("Can not delete group (group has members)");
    }
    await group.destroy();
    return true;
  }


  async getGroup(groupId) {
    if(!groupId || isNaN(groupId)) {
      throw new Error("Invalid group id");
    }
    var group = await db.group.findOne({where:{id: groupId},include: [{model: db.user},{model: db.category}]});
    if(group === null) {
      throw new Error("Group is not exist");
    }

    var usersDtos = group.users.map(user => {
      return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        gender: user.gender
      };
    });

    var groupDto = {
      id: group.id,
      name: group.name,
      categoryId: group.category_id,
      users: usersDtos,
      category: group.category.name
    };
    return groupDto;
  }

}

module.exports = new GroupService();
