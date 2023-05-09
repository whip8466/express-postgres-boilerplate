module.exports = {
  up: async (queryInterface, Sequelize) => {
    const roles = await queryInterface.bulkInsert(
      "Roles",
      [
        {
          roleName: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roleName: "customer",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],

      { returning: true }
    );

    const users = await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin",
          email: "admin@admin.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      { returning: true }
    );

    const rolesRows = roles[0];
    const usersRows = users[0];

    await queryInterface.bulkInsert(
      "UserRoles",
      [
        {
          RoleId: rolesRows.id,
          UserId: usersRows.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("UserRoles", null, {});
    await queryInterface.bulkDelete("Roles", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  }
};
