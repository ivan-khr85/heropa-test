import queryString from 'querystring';

import normalizeSearch from './normalizeSearch';

export default (history, key, value, push = false) => {
  const { search, pathname } = history.location;
  const parsed = queryString.parse(normalizeSearch(search));

  parsed[key] = value;
  const updatedUrl = `${pathname}?${queryString.stringify(parsed)}`;

  if (push) {
    history.push(updatedUrl);
  } else {
    history.replace(updatedUrl);
  }
};
