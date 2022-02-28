import React from "react";
import ReactDOM from "react-dom";
import { choice, remove } from "./helpers";
import foods from "./foods";

let randomFruit = choice( foods );
let fruitsLeft = remove( foods, randomFruit );

ReactDOM.render( <React.StrictMode>
  <div>
    <p>I'd like one {randomFruit}, please.</p>
    <p>Here you go: {randomFruit}</p>
    <p>Delicious! May I have another?</p>
    <p>I'm sorry, we're all out. We have {fruitsLeft.length}
      left.</p>
  </div>
</React.StrictMode>, document.getElementById( "root" ) );
