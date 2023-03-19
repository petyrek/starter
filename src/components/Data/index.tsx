import { Loader } from "components/Loader"
import { ErrorDetail } from "components/ErrorBoundary/ErrorDetail"
import { useData } from "hooks/useData"
import { Observable } from "rxjs"
import { ReactNode } from "react"
import { SideEffect } from "common/types"

type ChildrenProps<T> = {
  data: T
  setData: (v: T) => void
  refetch: SideEffect
}

type Props<T> = {
  getStream: () => Observable<T>
  children: (p: ChildrenProps<T>) => ReactNode
  loadingRenderer?: () => ReactNode
  errorRenderer?: (error: Error) => ReactNode
}

export const Data = <T,>({
  getStream,
  children,
  loadingRenderer = () => <Loader />,
  errorRenderer = (error: Error) => <ErrorDetail error={error} />,
}: Props<T>) => {
  const { data, setData, error, refetch } = useData(getStream)

  if (error) {
    return <>{errorRenderer(error)}</>
  }

  if (!data) {
    return <>{loadingRenderer()}</>
  }

  return (
    <>
      {children({
        data,
        setData,
        refetch,
      })}
    </>
  )
}
