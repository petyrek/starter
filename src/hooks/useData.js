import React from "react"

export const useData = (stream$, refetchParams = []) => {
  const [data, setData] = React.useState()
  const [error, setError] = React.useState()

  const refetch = () => {
    stream$.subscribe({
      next: setData,
      error: setError,
    })
  }

  React.useEffect(() => {
    refetch()
  }, refetchParams) // eslint-disable-line

  return { data, error, setData, refetch }
}
