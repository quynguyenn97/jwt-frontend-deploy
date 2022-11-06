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
        <BrowserRouter>
            <div className="app-container">
                {/* <Nav /> */}
                <Routes>
                    <Route path="/">home</Route>

                    <Route path="/news">news</Route>
                    <Route path="/about">about</Route>
                    <Route path="/contact">contact</Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
