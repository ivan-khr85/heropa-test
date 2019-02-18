import queryString from 'querystring';

import normalizeSearch from './normalizeSearch';

export default (history, key) => {
  const { search } = history.location;
  const parsed = queryString.parse(normalizeSearch(search));

  return parsed[key];
};
