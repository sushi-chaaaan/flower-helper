import type { ResultAsync } from "neverthrow";
import type { User } from "./user";

type ProjectBase = {
  author: User;
  id: string;
};

type DraftProjectInput = {
  name: string;
  description: string;
  publishAfterCreation: boolean;
};

export type DraftedProject = ProjectBase & {
  status: "drafted";
  isJoinable: false;
};

export type PublishedProject = ProjectBase & {
  status: "published";
  isJoinable: true;

  participants: User[];
};

export type ClosedProject = ProjectBase & {
  status: "closed";
  isJoinable: false;

  participants: User[];
};

export type CompletedProject = ProjectBase & {
  status: "completed";
  isJoinable: false;

  participants: User[];
};

export type CreateProject = (input: DraftProjectInput) => ResultAsync<DraftedProject | PublishedProject, Error>;

export type PublishDraftProject = (project: DraftedProject) => ResultAsync<PublishedProject, Error>;

export type ClosePublishedProject = (project: PublishedProject) => ResultAsync<ClosedProject, Error>;

export type CompleteClosedProject = (project: ClosedProject) => ResultAsync<CompletedProject, Error>;
