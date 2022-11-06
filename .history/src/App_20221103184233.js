import "./App.scss";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Nav />
                <Switch>
                    <Route path="/news">
                        <About />
                    </Route>
                    <Route path="/about">
                        <Users />
                    </Route>
                    <Route path="/contact">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
