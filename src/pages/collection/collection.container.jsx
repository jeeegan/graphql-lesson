import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionPage from './collection.component.jsx';
import Spinner from '../../components/spinner/spinner.component';

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionContainer = ({match}) => (
  <Query query={GET_COLLECTION_BY_TITLE} variables={{title: match.params.collectionId}}>
    {
      ({loading, data}) => {
        return loading ? <Spinner/> : <CollectionPage collection={data.getCollectionsByTitle}/>
      }
    }
  </Query>
);

export default CollectionContainer;