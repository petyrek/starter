import { mealRequest } from "data/meal/api"
import { Data } from "components/Data"
import { Page } from "components/Page"
import { ButtonModal } from "components/ButtonModal"
import { FC, useState } from "react"
import { CreateMealModal } from "./CreateMealModal"
import { Modal } from "components/Modal"
import { Empty } from "components/Empty"
import { Submit } from "components/Submit"
import { PageProps } from "pages/urls"

export const Meals: FC<PageProps> = () => {
  const [openId, setOpenId] = useState<number | null>()

  return (
    <Page>
      <Data getStream={() => mealRequest.list()}>
        {({ data, refetch }) => (
          <>
            <h1>meals</h1>
            {data.length > 0 ? (
              <ul>
                {data.map(x => (
                  <li key={x.id}>
                    <strong>{x.name}</strong>
                    <em>{JSON.stringify(x)}</em>
                    <button onClick={() => setOpenId(x.id)}>detail</button>
                    <Submit getStream={() => mealRequest.del(x.id)}>
                      {({ submit, isSubmitting }) => (
                        <button
                          onClick={() => submit(refetch)}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "..." : "delete"}
                        </button>
                      )}
                    </Submit>
                  </li>
                ))}
              </ul>
            ) : (
              <Empty text="no meals available" />
            )}

            {openId && (
              <Modal title="edit meal" close={() => setOpenId(null)}>
                <CreateMealModal
                  close={() => setOpenId(null)}
                  meal={data.find(x => x.id === openId)}
                  refetch={refetch}
                />
              </Modal>
            )}

            <ButtonModal
              text="create"
              title="create meal"
              renderModal={({ close }) => (
                <CreateMealModal close={close} refetch={refetch} />
              )}
            />
          </>
        )}
      </Data>
    </Page>
  )
}
