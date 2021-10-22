import { Loader } from "components/Loader"
import { Error } from "components/Error"
import { useData } from "hooks/useData"

export const Data = ({
  stream$,
  children,
  loadingRenderer = () => <Loader />,
  errorRenderer = error => <Error error={error} />,
}) => {
  const data = useData(stream$)

  if (data.error) {
    return errorRenderer(data.error)
  }

  if (!data.data) {
    return loadingRenderer()
  }

  return children(data.data)
}
