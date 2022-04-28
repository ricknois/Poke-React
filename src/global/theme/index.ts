import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    pokeType: {
      rock: "#B69E31",
      ghost: "#70559B",
      steel: "#B7B9D0",
      water: "#6493EB",
      grass: "#74CB48",
      psychic: "#FB5584",
      normal: "#AAA67F",
      Fighting: "#C12239",
      Flying: "#A891EC",
      Poison: "#A43E9E",
      Ground: "#DEC16B",
      Bug: "#A7B723",
      ice: "#9AD6DF",
      dark: "#75574C",
      fairy: "#E69EAC",
      fire: "#F57D31",
      eletric: "#F9CF30",
      dragon: "#7037FF",
    },
    grayScale: {
      dgray: "#212121",
      mgray: "#666666",
      lgray: "#E0E0E0",
      background: "#F7F7F7",
      white: "#FFFFFF",
    },
    fonts: {
      textRegular: "Poppins Regular",
      textBold: "Poppins Bold",
    },
  },
  fontSizes: [8, 10, 12, 14, 24],
});
