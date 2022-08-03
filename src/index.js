//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const faculty = [
  { name: "Arjun", dept: "cse" },
  { name: "khush", dept: "cse" }
];

root.render(
  <>
    <table>
      <tr>
        {faculty.map((fac) => {
          return (
            <td>
              {fac.name}
              <br />
              {fac.dept}
            </td>
          );
        })}
      </tr>
    </table>
  </>
);
