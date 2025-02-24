// using Zustand for state management
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initialTicketValue = {
  user_name: "",
  user_email: "",
  user_github: "",
  user_avatar: "",
};

export const useTicketFormStore = create<typeof initialTicketValue>()(
  devtools(() => initialTicketValue, { name: "ticket-store" })
);

export const setFullName = (newName: string) => {
  useTicketFormStore.setState(() => ({
    user_name: newName,
  }));
};

export const setEmail = (newEmail: string) => {
  useTicketFormStore.setState(() => ({
    user_email: newEmail,
  }));
};

export const setGithub = (newGithub: string) => {
  useTicketFormStore.setState(() => ({
    user_github: newGithub,
  }));
};
