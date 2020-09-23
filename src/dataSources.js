import models from "./models";

const reinitializeDBOnServerStart = true;
const createUsersWithMessages = async () => {
  // Create 1 User with 1 Message
  await models.User.create(
    {
      username: "rwieruch",
      messages: [
        {
          text: "Published the Road to learn React",
        },
      ],
    },
    {
      include: [models.Message],
    }
  );

  // Create 1 User with 2 message
  await models.User.create(
    {
      username: "ddavids",
      messages: [
        {
          text: "Happy to release ...",
        },
        {
          text: "Published a complete ...",
        },
      ],
    },
    {
      include: [models.Message],
    }
  );
};

export { reinitializeDBOnServerStart, createUsersWithMessages };
