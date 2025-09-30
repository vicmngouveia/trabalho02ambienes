// Versão base 0.1.0
const elCount = document.getElementById("count");
const elIncrement = document.getElementById("btn-increment");
const elDecrement = document.getElementById("btn-decrement");
const elToggleTheme = document.getElementById("btn-toggle-theme");
const elTitle = document.getElementById("title");

function updateCount(newValue) {
  elCount.textContent = String(newValue);
}

let state = { count: 0, dark: false };

elIncrement.addEventListener("click", () => {
  state.count += 2;
  updateCount(state.count);
});

elDecrement.addEventListener("click", () => {
  state.count -= 2;
  updateCount(state.count);
});

elToggleTheme.addEventListener("click", () => {
  state.dark = !state.dark;
  document.documentElement.style.setProperty("--bg", state.dark ? "#0b1220" : "#f8fafc");
  document.documentElement.style.setProperty("--text", state.dark ? "#55c496ff" : "#0f172a");
  elTitle.textContent = state.dark ? "Mini App – Modo Escuro" : "Mini App –  SIMULANDO BUG";
  elToggleTheme.setAttribute("aria-pressed", String(state.dark));
});