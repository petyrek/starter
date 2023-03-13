import { Link } from "components/Link"
import { Page } from "components/Page"
import { urls } from "pages/urls"
import { FC } from "react"

type Props = {}

export const Home: FC<Props> = () => {
  return (
    <Page>
      <h1>home</h1>
      visit playground to see example components{" "}
      <Link to={urls.playground.url}>playground</Link>
    </Page>
  )
}
