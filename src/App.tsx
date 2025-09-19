import "./App.css";
import Profile from "./components/profile";

function App() {
  return (
    <main>
      <ul>
        <li> !!!! html tages !!!!</li>
        <li> css propeties</li>
        <li>
          {" "}
          type of html tags[ semantic & non-semantic ][block elelment, inline,
          inline block]
        </li>
        <li> jsx </li>
        <li> funcational components </li>
        <li>funcation name should be start with capital latters </li>
        <li> must return single jsx element [wapped by a single tag ] </li>
        <li> props</li>
        <li> condition rendering </li>
        <li> SPA & MPA </li>
        <li>DOM </li>
        <li> Virtual Dom </li>

        <ol>start with use</ol>
        <p>eg</p>
        <ol>
          <li> usestate()</li>
          <li> useeffect()</li>
          <li> useref()</li>
          <li> usememo()</li>
          <li> usecallback()</li>
        </ol>
      </ul>
      <Profile />
    </main>
  );
}

export default App;
