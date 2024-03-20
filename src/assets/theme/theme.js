const commonTheme = {
  white: "#fff",
  grey: "#F2F4F7",
  red: "#E44848",
  orange: "#FFC531",
  backdrop: "rgba(16, 16, 16, 0.7)",
  borderColor: "rgba(16, 24, 40, 0.2)",
};

export const lightTheme = Object.freeze({
  background: "#F2F4F7",
  text: "#101828",
  lightText: "#475467",
  ...commonTheme,
});

export const darkTheme = Object.freeze({
  background: "#101828",
  text: "#F2F4F7",
  lightText: "#F7F7F7",
  ...commonTheme,
});
