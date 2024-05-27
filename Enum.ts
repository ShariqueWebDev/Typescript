enum Roles {
  user = "user",
  admin = "admin",
}

type User = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const user: User = {
  name: "sharique",
  email: "shariques966@gmail.com",
  password: "123456",
  role: Roles.admin,
};

const user1:User = {
    name:'tarique',
    email:"tariquesk@gmail.com",
    password:'654789',
    role:Roles.user
}

function isAdmin(user: User): string {
  return user.role === "admin"? ` ${user.name} he can access dashboard`: `${user.name} he can not access dashboard`;
}

console.log(isAdmin(user));
console.log(isAdmin(user1));
