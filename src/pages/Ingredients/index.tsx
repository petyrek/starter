import { ingredientRequest } from "data/ingredient/api"
import { Data } from "components/Data"
import { Page } from "components/Page"
import { ButtonModal } from "components/ButtonModal"
import { FC, useState } from "react"
import { CreateIngredientModal } from "./CreateIngredientModal"
import { Modal } from "components/Modal"
import { Submit } from "components/Submit"
import { Empty } from "components/Empty"

export const Ingredients: FC = () => {
  const [openId, setOpenId] = useState<number | null>()

  return (
    <Page>
      <Data stream$={ingredientRequest.list()}>
        {({ data, refetch }) => (
          <>
            <h1>ingredients</h1>
            {data.length > 0 ? (
              <ul>
                {data.map(x => (
                  <li key={x.id}>
                    <strong>{x.name}</strong>
                    <button onClick={() => setOpenId(x.id)}>detail</button>
                    <Submit stream$={ingredientRequest.del(x.id)}>
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
              <Empty text="no ingredients available" />
            )}

            {openId && (
              <Modal title="edit meal" close={() => setOpenId(null)}>
                <CreateIngredientModal
                  close={() => setOpenId(null)}
                  ingredient={data.find(x => x.id === openId)}
                  refetch={refetch}
                />
              </Modal>
            )}

            <ButtonModal
              text="create"
              title="create ingredient"
              renderModal={({ close }) => (
                <CreateIngredientModal close={close} refetch={refetch} />
              )}
            />
          </>
        )}
      </Data>
    </Page>
  )
}
