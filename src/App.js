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
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import LifeCycleA from "./components/LifeCycleA";
import PureComp from "./components/PureComp";
import RegComp from "./components/RegComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import User from "./components/User";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import NewCounter from "./components/NewCounter";
import ComponentC from "./components/ComponentC";

function App() {
  return (
    <div className="App">
      <ComponentC />
      {/* <NewCounter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <NewCounter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "Prithvi" : "Guest")} /> */}
      {/* <ClickCounter name="Prithvi" /> */}
      {/* <HoverCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComp /> */}
      {/* <RegComp /> */}
      {/* <LifeCycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
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
      {/* <Form /> */}
    </div>
  );
}

export default App;
