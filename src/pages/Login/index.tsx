import { authRequest, LoginData } from "data/auth/api"
import { login } from "data/auth/rx"
import { Textfield } from "inputs/Textfield"
import { Form } from "components/Form"
import { Button } from "components/Button"
import { emailRequired, stringRequired } from "validators"
import { FC } from "react"
import { Tokens } from "data/auth/types"
import { Field } from "components/Field"

type Props = {}

export const Login: FC<Props> = () => (
  <Form
    schema={{
      email: emailRequired,
      password: stringRequired,
    }}
    onSubmit={v => authRequest.login(v as LoginData)}
    onSuccess={v => login(v as Tokens)}
    initialValues={{
      email: "john@doe.com",
      password: "hunter2",
    }}
  >
    {({ form, onChange, hasErrors }) => (
      <>
        <Field name="email" form={form} label="Email">
          <Textfield
            value={form.values["email"]}
            onChange={onChange("email")}
          />
        </Field>
        <Field name="password" form={form} label="Password">
          <Textfield
            value={form.values["password"]}
            onChange={onChange("password")}
          />
        </Field>
        <Button type="submit" disabled={hasErrors} text="sign in" />
      </>
    )}
  </Form>
)
