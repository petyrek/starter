import { Loader } from "components/Loader"
import { ErrorDetail } from "components/ErrorBoundary/ErrorDetail"
import { useData } from "hooks/useData"
import { Observable } from "rxjs"
import { FC, ReactNode } from "react"

type Props<T> = {
  stream$: Observable<T>
  children: (data: T) => ReactNode
  loadingRenderer?: () => ReactNode
  errorRenderer?: (error: Error) => ReactNode
}

export const Data = <T,>({
  stream$,
  children,
  loadingRenderer = () => <Loader />,
  errorRenderer = (error: Error) => <ErrorDetail error={error} />,
}: Props<T>) => {
  const data = useData(stream$)

  if (data.error) {
    return <>{errorRenderer(data.error)}</>
  }

  if (!data.data) {
    return <>{loadingRenderer()}</>
  }

  return <>{children(data.data)}</>
}
