import React from 'react';
import Homepage from './Homepage';
import Overview from './Overview/Overview';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import QuestionsAnswers from './QA/QuestionsAnswers';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/:id'>
            <Overview />
            <QuestionsAnswers />
            <RatingsReviews />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
