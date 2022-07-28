const { createGlobalStyle } = require("styled-components");
const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  background: #0c1216;
}

.sidebar {
overflow-y: scroll;
&::-webkit-scrollbar {
  width: 0.5rem;
}

&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
}
&::-webkit-scrollbar-thumb {
  background: rgb(28, 37, 54);
  background: linear-gradient(
    180deg,
    rgba(28, 37, 54, 1) 0%,
    rgba(61, 41, 65, 1) 100%
  );
}

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.content {
  content: "";
}

body::-webkit-scrollbar {
  width: 0.5rem;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background: rgb(28, 37, 54);
  background: linear-gradient(
    180deg,
    rgba(28, 37, 54, 1) 0%,
    rgba(61, 41, 65, 1) 100%
  );
}



`;

export default GlobalStyle;
