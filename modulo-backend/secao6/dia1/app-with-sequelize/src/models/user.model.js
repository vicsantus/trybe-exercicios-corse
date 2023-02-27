const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });
  (async () => {
    await sequelize.sync({ force: true });
    const sara = await User.build({
      fullName: 'Sara Silva Santos',
      email: 'sara.ss@trybe.com',
    });

    console.log(sara instanceof User); // true
    console.log(sara.fullName); // "Sara Silva Santos"

    sara.fullName = "Jane Doe";
    // O nome ainda está "Sara Silva Santos" no banco de dados!

    await sara.save();
    // Agora o nome foi atualizado para "Jane Doe" no banco de dados!
  })();
  return User;
};

module.exports = UserModel;
