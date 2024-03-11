import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";
function Assignment4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <div>
      <h1>Assignment 4</h1>
      <ReduxExamples />
      <PassingFunctions theFunction={sayHello} />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <BooleanStateVariables />
      <ClickEvent />
      <Counter />
      <DateStateVariable />
      <EventObject />
      <ParentStateComponent />
      <PassingDataOnEvent />
      <StringStateVariables />
      ...
    </div>
  );
}
export default Assignment4;
