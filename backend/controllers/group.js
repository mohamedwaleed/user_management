'use strict';

var express = require('express');
var router = express.Router();
const groupService = require('../services/group-service');

router.post('/', async (req, res, next) => {
  try {
    var group = {
      name: req.body.name,
      categoryId: req.body.categoryId
    };
    var groupDto = await groupService.createNewGroup(group);
    var response = {
      data: groupDto
    };
    res.send(response);
  } catch (ex) {
    console.log(ex);
    res.status(500).send({error: {
      code: 500,
      message: ex.message
    }});
  }
});


router.get('/count', async (req, res, next) => {
  try {
    var groupDtoCount = await groupService.getGroupsCount();
    var response = {
      data: groupDtoCount
    };
    res.send(response);
  } catch (ex) {
    console.log(ex);
    res.status(500).send({error: {
      code: 500,
      message: ex.message
    }});
  }
});

router.get('/', async (req, res, next) => {
  try {
    var offset = req.query.offset;
    var limit = req.query.limit;
    var groupsDtos = await groupService.getAllGroups(offset, limit);
    var response = {
      data: groupsDtos
    };
    res.send(response);
  } catch (ex) {
    res.status(500).send({error: {
      code: 500,
      message: ex.message
    }});
  }
});


router.delete('/:groupId', async (req, res, next) => {
  try {
    var groupId = req.params.groupId;
    var result = await groupService.deleteGroup(groupId);
    var response = {
      data: result
    };
    res.send(response);
  } catch (ex) {
    console.log(ex);
    res.status(500).send({error: {
      code: 500,
      message: ex.message
    }});
  }
});

router.get('/:groupId', async (req, res, next) => {
  try {
    var groupId = req.params.groupId;
    var groupDto = await groupService.getGroup(groupId);
    var response = {
      data: groupDto
    };
    res.send(response);
  } catch (ex) {
    console.log(ex);
    res.status(500).send({error: {
      code: 500,
      message: ex.message
    }});
  }
});

module.exports = router;
