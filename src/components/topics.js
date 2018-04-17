import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';

const Topic = ({
  match: {
    params: { topicId },
  },
}) => {
  return <div>{topicId}</div>;
};

const Topics = ({ match: { url } }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/props-v-state`}>props-v-state</Link>
        </li>
        <li>
          <Link to={`${url}/rendering`}>rendering</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>components</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${url}/:topicId`} component={Topic} />
        <Route
          exact
          path={url}
          render={() => <div>Please at least select a topic</div>}
        />
      </Switch>
    </div>
  );
};

export default Topics;
