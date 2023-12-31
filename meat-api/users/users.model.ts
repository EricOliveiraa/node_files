const users = [
  { id: 1, name: "antonio", email: "tal@tal.com" },
  { id: 2, name: "maria", email: "maria@tal.com" },
];

export class User {
  static findAll(): Promise<any[]> {
    return Promise.resolve(users);
  }
  static findById(id: any): Promise<any> {
    return new Promise((resolve) => {
      const filtered = users.filter((user) => user.id === id);
      let user = undefined;

      if (filtered.length > 0) {
        user = filtered[0];
      }
      resolve(user);
    });
  }
}
