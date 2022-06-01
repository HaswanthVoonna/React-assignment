import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OnBoarding from './OnBoarding';
import ProfileEdit from './ProfileEdit';

function App() {
  return (
    <Router>
      <div className = "App">
          <div className = "content">
            <Switch>
              <Route exact path = "/">
                <OnBoarding />
              </Route>
              <Route path = "/edit">
                <ProfileEdit />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;