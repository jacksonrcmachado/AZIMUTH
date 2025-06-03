export type LoginResponse = {
  login: {
    token: string;
    user: {
      _id: string;
      name: string;
      email: string;
    };
  } | null;
};