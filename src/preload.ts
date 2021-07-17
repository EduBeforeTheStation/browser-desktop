// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
import { ipcRenderer } from "electron";
import fs from "fs";

document.addEventListener('fullscreenchange', () => {
  const title = document.getElementById("title-bar");
  console.log(document.fullscreenElement);
});

window.addEventListener("DOMContentLoaded", () => {
  const headLoad = new Promise((resolve, reject) => {
    fs.readFile("./public/head.html", (err, data) => {
      if (err) return reject(err);
      const template = document.createElement("template");
      template.innerHTML = data.toString();
      template.content.childNodes.forEach((value, key, parent) => {
        document.head.append(value);
      });
      resolve("");
    });
  });

  const bodyLoad = new Promise((resolve, reject) => {
    fs.readFile("./public/body.html", (err, data) => {
      if (err) return reject(err);
      const inner = document.body.innerHTML;
      const wrapper = document.createElement("div");
      wrapper.setAttribute('id', 'root');
      wrapper.innerHTML = inner;
      document.body.innerHTML = "";
      document.body.appendChild(wrapper);

      const template = document.createElement("template");
      template.innerHTML = data.toString();
      template.content.childNodes.forEach((value, key, parent) => {
        document.body.prepend(value);
      });
      resolve("");
    });
  });

  function afterLoadProcess() {
    const site_wrapper = document.querySelector('.site-wrapper');
    const close_btn = document.querySelector("#close-btn");
    close_btn?.addEventListener("click", () => {
      alert('❌ 앱을 종료하시겠습니까?');
      ipcRenderer.send('quit');
    });
    

    
  }

  function exceptionProcess(err: Error) {
    console.log(err);
  }

  Promise
    .all([headLoad])
    .then(afterLoadProcess)
    .catch(exceptionProcess);
});
