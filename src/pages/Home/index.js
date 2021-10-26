import React from "react"
import { eventsRequest } from "data/events/api"
import { Data } from "components/Data"
import { forkJoin, mergeMap } from "rxjs"
import { Page } from "components/Page"

// an example of more complex data, first fetches list of events and then detail of each event
const joinedComplexStream$ = eventsRequest
  .list()
  .pipe(mergeMap(x => forkJoin(x.map(event => eventsRequest.detail(event.id)))))

export const Home = () => (
  <Page>
    <ul>
      <Data stream$={joinedComplexStream$}>
        {data => data.map(x => <li key={x.id}>{x.title}</li>)}
      </Data>
    </ul>
  </Page>
)
