import "./styles/App.scss";
import Head from "./components/Head";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Head />
      <Main />
      <Footer />
    </>
  );
}

export default App;

// ./components
//    -index.js
//    -login.js
//    -questions.js

//    import Login from './login'
// import Question from './question'

// export {Login, Question}
// import {Login, Question} from './components' //note with index.js no need to mention //it on import
