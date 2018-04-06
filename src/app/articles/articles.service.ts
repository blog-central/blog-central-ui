import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const query = gql`
  query {
    ...foo
  }
`;

@Injectable()
export class ArticlesService {

  constructor(private apollo: Apollo) { }

  getArticles() {
    return this.apollo.query({query});
  }

}
