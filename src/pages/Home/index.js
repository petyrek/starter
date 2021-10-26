import React from "react"
import { eventsRequest } from "data/events/api"
import { Data } from "components/Data"
import { forkJoin, mergeMap } from "rxjs"
import { Page } from "components/Page"
import { useOpen } from "hooks/useOpen"
import { Button } from "components/Button"
import { Modal } from "components/Modal"

// an example of more complex data, first fetches list of events and then detail of each event
const getStream = () =>
  eventsRequest
    .list()
    .pipe(
      mergeMap(x => forkJoin(x.map(event => eventsRequest.detail(event.id)))),
    )

export const Home = () => {
  const { isOpen, open, close } = useOpen()

  return (
    <Page>
      <ul>
        <Data stream$={getStream()}>
          {data => data.map(x => <li key={x.id}>{x.title}</li>)}
        </Data>
      </ul>
      <Button text="Open modal" onClick={open} />
      {isOpen && (
        <Modal title="title of modal" close={close}>
          content of modal
        </Modal>
      )}
    </Page>
  )
}
