import { Textfield } from "components/Textfield"
import { Form } from "components/Form"
import { Button } from "components/Button"
import { numberRequired, stringRequired } from "validators"
import { FC } from "react"
import { Field } from "components/Field"
import { ingredientRequest } from "data/ingredient/api"
import { SideEffect } from "common/types"
import * as R from "ramda"
import { IngredientResponse } from "data/_generated"

type Props = {
  close: SideEffect
  refetch: SideEffect
  ingredient?: IngredientResponse
}

const schema = {
  name: stringRequired,
  protein: numberRequired,
  carbohydrates: numberRequired,
  fats: numberRequired,
  salt: numberRequired,
  fiber: numberRequired,
}

export const CreateIngredientModal: FC<Props> = ({
  ingredient,
  close,
  refetch,
}) => (
  <Form
    schema={schema}
    onSubmit={v =>
      ingredient
        ? ingredientRequest.edit(ingredient.id, v)
        : ingredientRequest.create(v)
    }
    onSuccess={() => {
      close()
      refetch()
    }}
    initialValues={
      ingredient ?? {
        name: "",
        protein: 0,
        carbohydrates: 0,
        fats: 0,
        salt: 0,
        fiber: 0,
      }
    }
  >
    {({ form, onChange, hasErrors }) => (
      <>
        {R.keys(schema).map(k => (
          <Field name={k} form={form} label={k}>
            <Textfield
              type={k === "name" ? "text" : "number"}
              value={`${form.values[k]}`}
              onChange={(v: string) => onChange(k)(k === "name" ? v : +v)}
            />
          </Field>
        ))}

        <Button type="submit" disabled={hasErrors} text="create" />
      </>
    )}
  </Form>
)
