
export const placeholderText = (language) => {
  switch (language) {
    case "en":
      return "Enter todo title";
    case "uk":
      return "Введіть заголовок справи";
    default:
      return "Enter todo title";
  }
};
