const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    );
    setTimeout(() => {
      resolve({ updatedUsers, userName });
    });
  });
};

const logger1 = (updatedUsers) => console.log(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState(users, "Mango", logger1);
// toggleUserState(users, "Lux", logger1);

/*
 * Должно работать так
 */
toggleUserState(users, "Mango").then(logger1);
toggleUserState(users, "Lux").then(logger1);
