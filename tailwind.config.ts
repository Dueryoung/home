import { addDynamicIconSelectors } from "@iconify/tailwind";
import skillIcons from "@iconify-json/skill-icons";
import antDesign from "@iconify-json/ant-design";
import streamlineFreehandColor from "@iconify-json/streamline-freehand-color"

export default {
  content: ["./app/*.vue"],
  plugins: [
    skillIcons,
    antDesign,
    streamlineFreehandColor,
    addDynamicIconSelectors(),
  ]
};