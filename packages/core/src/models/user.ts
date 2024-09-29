import type { ResultAsync } from "neverthrow";

type UserBase = {
  id: string;
};

type TemporaryUser = UserBase & {
  isTemporary: true;
};

type PermanentUser = UserBase & {
  isTemporary: false;
};

export type User = TemporaryUser | PermanentUser;

type CreateUserInput = {
  isTemporary: boolean;
};

export type CreateUser = (input: CreateUserInput) => ResultAsync<User, Error>;
