import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from 'environments/environment';
import { HttpHeaders } from '@angular/common/http';

const uri = environment.curl; // <-- add the URL of the GraphQL server here
const token = environment.token; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {

  return {
    link: httpLink.create({
      uri: uri,
      headers: new HttpHeaders({
        "x-access-token": token
      })
    }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
