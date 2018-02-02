import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "index.js",
  output: {
    file: "bundleR.js",
    format: "cjs"
  },
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: "node_modules"
      }
    }),
    babel({
      plugins: [ 'minify-dead-code-elimination' ]
    })
  ]
};
