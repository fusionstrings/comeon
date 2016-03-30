SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "comeon": {
      "format": "esm",
      "main": "index.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "css": "github:systemjs/plugin-css@0.1.20",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.8"
  },
  packages: {}
});
