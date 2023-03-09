import { eventsRequest } from "data/events/api"
import { Data } from "components/Data"
import { forkJoin, mergeMap, Observable } from "rxjs"
import { Page } from "components/Page"
import { Button } from "components/Button"
import { toastError, toastWarning, toastSuccess } from "data/toasts/rx"
import { DatePicker } from "inputs/DatePicker"
import { Tooltip } from "components/Tooltip"
import { ButtonModal } from "components/ButtonModal"
import { FC, useState } from "react"
import { Event } from "data/events/types"

// an example of more complex data, first fetches list of events and then detail of each event
const getStream = (): Observable<Event[]> =>
  eventsRequest
    .list()
    .pipe(
      mergeMap(x => forkJoin(x.map(event => eventsRequest.detail(event.id)))),
    )

export const Home: FC = () => {
  const [v, setV] = useState<string>()

  return (
    <Page>
      <ul>
        <Data stream$={getStream()}>
          {data => data.map(x => <li key={x.id}>{x.title}</li>)}
        </Data>
      </ul>

      <div>
        <ButtonModal text="Open modal" title="title" modalContent={"content"} />
        <Button text="success" onClick={() => toastSuccess("ololol")} />
        <Button
          secondary
          text="warning"
          onClick={() => toastWarning("ololol")}
        />
        <Button error text="error" onClick={() => toastError("ololol")} />
      </div>
      <DatePicker value={v} onChange={setV} />
      <Tooltip content={<span>custom tooltip ex</span>}>
        <div>tooltip example</div>
      </Tooltip>
    </Page>
  )
}
