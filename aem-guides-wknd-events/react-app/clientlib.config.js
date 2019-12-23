module.exports = {
  // default working directory (can be changed per 'cwd' in every asset option)
  context: __dirname,

  // path to the clientlib root folder (output)
  clientLibRoot:
    "./../ui.apps/src/main/content/jcr_root/apps/wknd-events/clientlibs",

  libs: {
    name: "react-app",
    allowProxy: true,
    categories: ["wknd-events.react"],
    jsProcessor: ["min:gcc"],
    serializationFormat: "xml",
    assets: {
      js: [
        "build/static/**/*.js"
      ],
      css: [
        "build/static/**/*.css"
      ]
    }
  }
};
