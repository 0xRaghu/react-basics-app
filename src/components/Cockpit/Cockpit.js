import React from "react";
import classmod from "./Cockpit.module.css";

const cockpit = props => {
  let classes = [];
  let ButtonCls = classmod.Button;
  if (props.showPersons) {
    ButtonCls = classmod.Red;
  }
  if (props.persons.length <= 2) {
    classes.push(classmod.red, classmod.bold);
  }
  return (
    <div className={classmod.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>Showing the list of Persons</p>
      <button className={ButtonCls} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
