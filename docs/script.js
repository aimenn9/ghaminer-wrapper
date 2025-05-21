import { loadPyodide } from "./pyodide/pyodide.mjs";
let pyodide = await loadPyodide({
  indexURL: "./pyodide/"
});

document.getElementById("run-btn").addEventListener("click", async () => {
  const output = document.getElementById("output");

  try {
    const response = await fetch("main.py");
    const code = await response.text();

    const result = await pyodide.runPythonAsync(code);
    output.textContent = result;
  } catch (err) {
    output.textContent = "Error: " + err;
  }
});

const btn = document.getElementById("btn-test");

btn.addEventListener("click", () =>{
  console.log("button is working")
})
