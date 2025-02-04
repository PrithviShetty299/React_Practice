import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
import NameList from "./components/NameList";
import Form from "./components/Form";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import UserGreeting from "./components/UserGreeting";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name="Clark" heroName="Superman" >
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Diana" heroName="Wonder Woman" /> */}
      {/* <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <Inline /> */}
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      <Form />
    </div>
  );
}

export default App;
