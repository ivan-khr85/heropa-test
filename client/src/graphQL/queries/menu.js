import gql from 'graphql-tag';

export default gql`
  query {
    menuItems {
      label
      iconKey
      href
      subItems {
        label
        href
      }
    }
  }
`;
