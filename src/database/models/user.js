module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {}
  );
  User.associate = function (models) {
    User.belongsToMany(models.Role, { through: "UserRoles" });
  };

  User.isEmailTaken = async function (email) {
    const user = await this.findOne({
      where: { email }
    });
    return !!user;
  };

  return User;
};
