import { createEvent, createStore } from "effector";

export const openModal = createEvent<string>("toggle modal");
export const reset = createEvent();

export const $modalState = createStore<string>(null)
  .on(openModal, (_, modalType) => modalType)
  .reset(reset);
