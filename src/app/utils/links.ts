enum routeNames {
  dashboard = 'dashboard',
  login = 'login',
  fareStructure = 'fare_structure',
  report = 'report',
}
export enum routeLinks {
  dashboard = '/' + routeNames.dashboard,
  login = '/' + routeNames.login,
  fareStructure = '/' + routeNames.dashboard + '/' + routeNames.fareStructure,
  report = '/' + routeNames.dashboard + '/' + routeNames.report,
}

export const Links = {
  dashboard: { name: routeNames.dashboard, route: routeLinks.dashboard },
  login: {
    name: routeNames.login,
    route: routeLinks.login,
  },
  fareStructure: {
    name: routeNames.fareStructure,
    route: routeLinks.fareStructure,
  },
  report: {
    name: routeNames.report,
    route: routeLinks.report,
  },
};
