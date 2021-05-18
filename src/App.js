import "./styles.css";
import { Welcome } from "./Welcome";
import WelcomeClass from "./WelcomeClass";
import Message from "./Message";
import Counter from "./Counter";
import FunctionOnClick from "./FunctionalOnClick";
import ClassOnClick from "./ClassOnClick";
import ParentClass from "./ParentClass";
import ConditionalGreeting from "./ConditionalGreeting";
import NameList from "./NameList";
import { StyleSheet } from "./StyleSheet";
import Inline from "./Inline";
import "./appstyles.css";
import Styles from "./appStyles.module.css";
import Form from "./Form";
import LifeCycleA from "./LifeCycleA";

export default function App() {
  return (
    <div className="App">
      <LifeCycleA />
      {/* <Form />
      <h1 className="primary">Error</h1>
      <h1 className={Styles.success}>Success</h1>
      <Inline />
      <StyleSheet useStyle={true}></StyleSheet>
      <NameList />
      <ConditionalGreeting />
      <ParentClass />
      <ClassOnClick />
      <FunctionOnClick />
      <Counter />
      <Message />
      <Welcome name="Prabhat">this is prabhat </Welcome>
      <Welcome name="Ravi">
        <button>Access me</button>
      </Welcome>
      <WelcomeClass name="Satyender">this is prabhat </WelcomeClass>
      <WelcomeClass name="Prabhat">this is prabhat </WelcomeClass>
      <WelcomeClass name="Ravi">
        <button>Access me</button>
      </WelcomeClass>
      <WelcomeClass name="Satyender">this is prabhat </WelcomeClass>
    */}
    </div>
  );
}
