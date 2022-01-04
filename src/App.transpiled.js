"use strict";

// const App = () => {
//     return (
//         <Router>
//         </Router>
//     )
// }
// const root = document.getElementById('root');
// ReactDOM.hydrate(<App />, root)
var HelloWorld = function HelloWorld() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello Nice World!");
};

var root = document.getElementById('root');
ReactDOM.render( /*#__PURE__*/React.createElement(HelloWorld, null), root);
