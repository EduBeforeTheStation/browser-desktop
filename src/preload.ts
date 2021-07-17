// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
import fs from "fs";

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerText = text;
    }
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(
      `${type}-version`,
      process.versions[type as keyof NodeJS.ProcessVersions] || ""
    );
  }

  fs.readFile("./public/body.html", (err, data) => {
    const template = document.createElement("template");
    template.innerHTML = data.toString();
    template.content.childNodes.forEach((value, key, parent) => {
      document.body.prepend(value);
    });
  });

  fs.readFile("./public/head.html", (err, data) => {
    const template = document.createElement("template");
    template.innerHTML = data.toString();
    template.content.childNodes.forEach((value, key, parent) => {
      document.head.append(value);
    });
  });
});
