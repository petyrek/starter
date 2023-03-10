import { Textfield } from "inputs/Textfield"
import { Form } from "components/Form"
import { Button } from "components/Button"
import { stringRequired } from "validators"
import { FC } from "react"
import { Field } from "components/Field"
import { mealRequest } from "data/meal/api"
import { SideEffect } from "common/types"
import { MealResponse } from "data/_generated"
import { Data } from "components/Data"

type Props = {
  close: SideEffect
  refetch: SideEffect
  meal?: MealResponse
}

export const CreateMealModal: FC<Props> = ({ meal, close, refetch }) => (
  <Data stream$={mealRequest.list()}>
    {({ data }) => (
      <Form
        schema={{
          name: stringRequired,
          process: stringRequired,
        }}
        onSubmit={v =>
          meal
            ? mealRequest.edit(meal.id, v)
            : // @ts-expect-error
              mealRequest.create({ ...v, ingredientIds: [data[0].id] })
        }
        // TODO - this Tokens type should be infered
        onSuccess={() => {
          close()
          refetch()
        }}
        initialValues={
          meal ?? {
            name: "",
            process: "",
          }
        }
      >
        {({ form, onChange, hasErrors }) => (
          <>
            <Field name="name" form={form} label="Name">
              <Textfield value={form.values.name} onChange={onChange("name")} />
            </Field>
            <Field name="process" form={form} label="Process">
              <Textfield
                value={form.values.process}
                onChange={onChange("process")}
              />
            </Field>
            <Button type="submit" disabled={hasErrors} text="sign in" />
          </>
        )}
      </Form>
    )}
  </Data>
)
