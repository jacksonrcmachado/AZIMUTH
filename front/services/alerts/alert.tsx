// toastService.ts
import Toast from "react-native-toast-message";

const ToastService = {
  success: (text1: string, text2?: string, options = {}) => {
    Toast.show({
      type: "success",
      text1,
      text2,
      position: "top",
      visibilityTime: 3000,
      ...options,
    });
  },

  error: (text1: string, text2?: string, options = {}) => {
    Toast.show({
      type: "error",
      text1,
      text2,
      position: "top",
      visibilityTime: 3000,
      ...options,
    });
  },

  info: (text1: string, text2?: string, options = {}) => {
    Toast.show({
      type: "info",
      text1,
      text2,
      position: "top",
      visibilityTime: 3000,
      ...options,
    });
  },
};

export default ToastService;
