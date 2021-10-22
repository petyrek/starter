import React from "react"
import { eventsRequest } from "data/events/api"
import { Data } from "components/Data"
import { forkJoin, mergeMap } from "rxjs"

// an example of more complex data, first fetches list of events and then detail of each event
const joinedComplexStream$ = eventsRequest
  .list()
  .pipe(mergeMap(x => forkJoin(x.map(event => eventsRequest.detail(event.id)))))

export const Content = () => (
  <>
    <ul>
      {/* variant A - doing the nesting logic in rxjs*/}
      <Data stream$={joinedComplexStream$}>
        {data => data.map(x => <li key={x.id}>{x.title}</li>)}
      </Data>

      {/* variant B - nesting data components, making each load individually */}
      <Data stream$={eventsRequest.list()}>
        {data =>
          data.map(x => (
            <Data stream$={eventsRequest.detail(x.id)}>
              {eventData => <li key={eventData.id}>{eventData.title}</li>}
            </Data>
          ))
        }
      </Data>
    </ul>
  </>
)
