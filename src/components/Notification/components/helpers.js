export const getBackgroundColor = (type) => {
  switch (type) {
    case "success":
      return "notification__success";
    case "error":
      return "notification__error";
    case "warning":
      return "notification__warning";
    default:
      return "notification__info";
  }
};
