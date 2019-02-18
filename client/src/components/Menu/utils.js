export const getReducedUserName = (userName = '') => {
  const splittedNames = userName.split(' ');
  let initials = splittedNames[0].substring(0, 1).toUpperCase();

  if (splittedNames.length > 1) {
    initials += splittedNames[splittedNames.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};
