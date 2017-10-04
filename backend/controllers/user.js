'use strict';

var express = require('express');
var router = express.Router();
const userService = require('../services/user-service');

router.get('/', async (req, res, next) => {
  try {
    var offset = req.query.offset;
    var limit = req.query.limit;
    var usersDtos = await userService.getAllUsers(offset, limit);
    var response = {
      data: usersDtos
    };
    res.send(response);
  } catch (ex) {
    res.status(500).send({error: {
      code: 500,
      message: ex.message
    }});
  }
});

router.get('/count', async (req, res, next) => {
  try {
    var userDtoCount = await userService.getUsersCount();
    var response = {
      data: userDtoCount
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

router.post('/', async (req, res, next) => {
  try {
    var groupId = req.body.groupId;
    var user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      gender: req.body.gender
    };
    var userDto = await userService.createNewUser(user, groupId);
    var response = {
      data: userDto
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

router.delete('/:userId', async (req, res, next) => {
  try {
    var userId = req.params.userId;
    var result = await userService.deleteUser(userId);
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

router.get('/:userId', async (req, res, next) => {
  try {
    var userId = req.params.userId;
    var userDto = await userService.getUser(userId);
    var response = {
      data: userDto
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

router.post('/:userId/group/:groupId', async (req, res, next) => {
  try {
    var groupId = req.params.groupId;
    var userId = req.params.userId;
    var result = await userService.joinGroup(userId, groupId);
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


router.delete('/:userId/group/:groupId', async (req, res, next) => {
  try {
    var groupId = req.params.groupId;
    var userId = req.params.userId;
    var result = await userService.removeUserFromGroup(userId, groupId);
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


module.exports = router;
