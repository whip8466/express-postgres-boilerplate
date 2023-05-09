const httpStatus = require("http-status");
// const { User } = require('../models');
const ApiError = require("../utils/ApiError");
const models = require("../database/models");

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  try {
    if (await await models.User.isEmailTaken(userBody.email)) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
    }

    const user = await models.User.create(userBody);
    return user;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, error.message);
    // return res.status(500).json({ error: error.message });
  }
};

/**
 * Return users
 * @returns {Promise<User[]>}
 */
const getUsers = async () => {
  try {
    const users = models.User.findAll({
      where: { id: 1 },
      include: [
        {
          model: models.Role,
          attributes: ["roleName"],
          through: { attributes: [] }
        }
      ]
    });

    return users;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, error.message);
  }
};

module.exports = {
  createUser,
  getUsers
};
