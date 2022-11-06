import "./App.scss";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Nav />
                <Routes>
                    <Route path="/news">aboute</Route>
                    <Route path="/about">users</Route>
                    <Route path="/contact">contact</Route>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
