export const placeholderText = (language) => {
  switch (language) {
    case "en":
      return "Enter todo description";
    case "uk":
      return "Введіть опис справи";
    default:
      return "Enter todo description";
  }
};
