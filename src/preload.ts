// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerText = text;
    }
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type as keyof NodeJS.ProcessVersions] || "");
  }


  const template = document.createElement('template');
  template.innerHTML = `<div style="position: fixed;color: white;">
  <p>TITLE!!!!!!!!!!!!!!!!!!!!!!!!</p>
</div>`;
  if( template.content.firstChild)
    document.body.prepend(template.content.firstChild);
});
