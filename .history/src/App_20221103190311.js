import "./App.scss";
import Nav from "./components/Nav/Nav";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter,
} from "react-router-dom";

const App = () => {
    return (
        <div className="app-container">
            {/* <Nav /> */}
            <Routes>
                <Route path="/" exact={true}>
                    home
                </Route>

                <Route path="/news">news</Route>
                <Route path="/about">about</Route>
                <Route path="/contact">contact</Route>
                <Route path="*">contact</Route>
            </Routes>
        </div>
    );
};

export default App;
