import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
);

function Header() {
  return <header>Header</header>;
}

function Footer() {
  return <footer>Footer</footer>;
}

function Question(props) {
  return (
    <div>
      <h3>{props.q}</h3>
      <label>
        <input type="radio" name={props.q} value=""></input>
        {props.opt1}
      </label>
      <br></br>
      <label>
        <input type="radio" name={props.q} value=""></input>
        {props.opt2}
      </label>
      <br></br>
      <label>
        <input type="radio" name={props.q} value=""></input>
        {props.opt3}
      </label>
      <br></br>
      <label>
        <input type="radio" name={props.q} value=""></input>
        {props.opt4}
      </label>
    </div>
  );
}

function Content() {
  return (
    <form>
      <div>
        <Question
          q="1. What is Java?"
          opt1="Java is a sequence-dependent programming language"
          opt2="Java is a code dependent programming language"
          opt3="Java is a platform-dependent programming language"
          opt4="Java is a platform-independent programming language"
          name="q"
        />
        <Question
          q="2. What does SQL stand for?"
          opt1="SQL stands for Sample Query Language"
          opt2="SQL stands for Structured Query List"
          opt3="SQL stands for Structured Query Language"
          opt4="SQL stands for Sample Query List"
          name="q"
        />
        <Question
          q="3. Which is not a feature of OOP in general definitions?"
          opt1="Efficient Code"
          opt2="Code reusability"
          opt3="Modularity"
          opt4="Duplicate/Redundant data"
          name="q"
        />
        <Question
          q="4. What is HTML?"
          opt1="HTML describes the structure of a webpage"
          opt2="HTML is the standard markup language mainly used to create web pages"
          opt3="HTML consists of a set of elements that helps the browser how to view the content"
          opt4="All of the mentioned"
          name="q"
        />
        <Question
          q="5. What is CSS stands for?"
          opt1="Cascading Style Sheets"
          opt2="Cascade Style Sheet"
          opt3="Color Style Sheets"
          opt4="Color Style Sheet"
          name="q"
        />
        <Question
          q="6. Which type of Programming does Python support?"
          opt1="object-oriented programming"
          opt2="structured programming"
          opt3="functional programming"
          opt4="all of the mentioned"
          name="q"
        />
        <Question
          q="7. What is PHP?"
          opt1=" PHP is an open-source programming language"
          opt2=" PHP is used to develop dynamic and interactive websites"
          opt3="PHP is a server-side scripting language"
          opt4="None of the mentioned"
          name="q"
        />
        <Question
          q="8. What is JavaScript?"
          opt1="JavaScript is a scripting language used to make the website interactive"
          opt2="JavaScript is an assembly language used to make the website interactive"
          opt3="JavaScript is a compiled language used to make the website interactive"
          opt4="All of the mentioned"
          name="q"
        />
        <Question
          q="9. What is Node.js?"
          opt1="A front-end framework"
          opt2="A back-end framework"
          opt3="A JavaScript runtime built on Chrome's V8 JavaScript engine"
          opt4="A type of database"
          name="q"
        />
        <Question
          q="10. What is React.js?"
          opt1="Open-source JavaScript back-end library"
          opt2="JavaScript front-end library to create a database"
          opt3="Free and open-source JavaScript front-end library"
          opt4="None of the mentioned"
          name="q"
        />
      </div>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <input
          type="submit"
          value="Submit the Quiz"
          style={{
            color: "white",
            background: "#3071a9",
            padding: "10px 20px",
          }}
        ></input>
      </div>
      <br></br>
    </form>
  );
}
