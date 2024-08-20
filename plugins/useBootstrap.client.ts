import { Modal, Toast } from "bootstrap";

export default defineNuxtPlugin(() => ({
  provide: {
    bootstrap: {
      Modal,
      Toast,
    },
  },
}));