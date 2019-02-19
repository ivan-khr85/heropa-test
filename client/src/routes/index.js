import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Home,
  ShowCourses,
  CourseDetails,
  NotFound,
} from '../pages';
import { routes } from '../const';

export default () => (
  <Switch>
    <Route exact path={routes.HOME} component={Home} />
    <Route exact path={routes.SHOW_COURSES} component={ShowCourses} />
    <Route path={`${routes.SHOW_COURSES}/:courseId`} component={CourseDetails} />

    <Route component={NotFound} />
  </Switch>
);
