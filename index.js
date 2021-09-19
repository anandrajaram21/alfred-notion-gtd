import alfy from "alfy";

const input = alfy.input;

alfy.output([
  {
    title: `Add Task "${input}" to your Tasks Database`,
    subtitle: "Add Now",
    arg: input,
  },
]);
