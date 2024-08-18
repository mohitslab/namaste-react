import React from "react";
import ReactDOM from "react-dom/client";

// <h2> Heading Tag </h2>
const jsxHeading = <h1>I am a Heading Tag.</h1>;

// <p> Paragraph Tag </p>
const jsxParagraph = <p>I am a Paragraph Tag.</p>;


// <b> Bold Tag </b>
const jsxBold = <b>I am a Bold Tag.</b>

// <i> Italic Tag </i>
const jsxItalics = <i>I am an italics tag.</i>


// <u> Underline Tag </u>
const jsxUnderline = <u>I am an Underline Tag.</u>


// <a> anchor Tag </a>
const jsxLink = <a href="https://google.com">I am a link to Google.</a>

// <img> image </img>
const jsxImage = <img src="https://m.media-amazon.com/images/M/MV5BYjIzMzU4NWEtMzcwNy00N2E4LWExZmEtZDM1YTk0YzlkMDhmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg" />;

// <ul> and <li>
const jsxUnorderedList = (<ul>
    <li>C++</li>
    <li>DSA</li>
    <li>Python</li>
    <li>Javascript</li>
    <li>React</li>
</ul>);

// <ol> and <li>
const jsxOrderedList = (<ol>
    <li>C++</li>
    <li>DSA</li>
    <li>Python</li>
    <li>Javascript</li>
    <li>React</li>
</ol>);


// <div>
const jsxDiv = <div>I am a DIV Tag.</div>;

// <span>
const jsxSpan = <span>I am a span Tag.</span>;

// <br>
const jsxLineBreak = <p>I am a line <br/>BREAK!</p>;

// <hr>
const jsxHorizontalLine = <hr/>;


// <strong> and <em>
const jsxBoldItalics = <p>: Emphasise text with <strong>strong</strong> and <em>emphasised</em> importance, respectively.</p>

// Combinations


// <input>: Creates input fields for forms.
// <form>: Wraps form elements for user input.
// <table>, <tr>, <td>, <th>: Constructs tables, rows, and cells for tabular data.
// <iframe>: Embeds external content, like a webpage or video, within the current document.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);