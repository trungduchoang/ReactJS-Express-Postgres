const user = (database, DataTypes) => {
  const User = database.define("user", {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  // Associate User <-> ManyMessage
  User.associate = (models) => {
    User.hasMany(models.Message, { onDelete: "CASCADE" });
  };

  // findByLogin???
  User.findByLogin = async (login) => {
    let user = await User.findOne({
      where: { username: login },
    });
    if (!user) {
      user = await User.findOne({
        where: { email: login },
      });
    }
    return user;
  };

  return User;
};

export default user;