import compose from "ramda/es/compose";
import __ from "ramda/es/__";
import uncurryN from "ramda/es/uncurryN";
import curry from "ramda/es/curry";

const lastFn = curry((firstArg, secondArg) => {
  console.log("lastFn-firstArg", firstArg);
  if (!firstArg) {
    console.error("missing argument");
  }
  console.log("lastFn-secondArg", secondArg);
  return "finish";
});

const firstFn = firstArg => {
  console.log("firstFn-firstArg", firstArg);
  if (!firstArg) {
    console.error("missing argument");
  }
  return firstArg;
};
const incorrectBehaviour = uncurryN(2, compose(lastFn, firstFn));

const correctBehaviour = (firstArg, secondArg) =>
  compose(lastFn(__, secondArg), firstFn)(firstArg);

console.log("--- this is correct for unmifified and minified ---");
correctBehaviour(1, 2);
console.log("--- this is incorrect when minified ---");
incorrectBehaviour(1, 2);
