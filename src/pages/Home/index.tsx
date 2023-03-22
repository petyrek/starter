import { Link } from "components/Link"
import { Page } from "components/Page"
import { Text } from "components/Text"
import { authRequest } from "data/auth/api"
import { useData } from "hooks/useData"
import { PageProps, urls } from "pages/urls"
import { FC, useEffect } from "react"

export const Home: FC<PageProps> = () => {
  const { data, refetch } = useData(() => authRequest.user())

  useEffect(() => {
    const interval = setInterval(() => {
      refetch()

      return () => clearInterval(interval)
    }, 2000)

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Page>
      <h1>home</h1>
      visit playground to see example components{" "}
      <Link to={urls.playground.url}>playground</Link>
      <Text>{data?.name}</Text>
    </Page>
  )
}
