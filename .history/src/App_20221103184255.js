import "./App.scss";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Nav />
                <Switch>
                    <Route path="/news">aboute</Route>
                    <Route path="/about">users</Route>
                    <Route path="/contact">contact</Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
