// Create a function that takes an input (e.g. "5 + 4") and returns true if it's a mathematical expression or false if not.

const mathExpr = (mathExp = "") => {
  return mathExp.match(/([0-9])*[-+/*]([0-9])*/g) == mathExp ? true : false;
};
