import { authRequest } from "data/auth/api"
import { login } from "data/auth/rx"
import { Textfield } from "components/Textfield"
import { Form } from "components/Form"
import { Button } from "components/Button"
import { emailRequired, stringRequired } from "common/validators"
import { FC } from "react"
import { Field } from "components/Field"
import { TokenResponse } from "data/_generated"
import { PageProps } from "pages/urls"

export const Login: FC<PageProps> = () => (
  <Form
    schema={{
      email: emailRequired,
      password: stringRequired,
    }}
    onSubmit={v => authRequest.login(v)}
    // TODO - this Tokens type should be infered
    onSuccess={(v: TokenResponse) => login(v)}
    initialValues={{
      email: "john@doe.com",
      password: "hunter2",
    }}
  >
    {({ form, onChange, hasErrors }) => (
      <>
        <Field name="email" form={form} label="Email">
          <Textfield value={form.values.email} onChange={onChange("email")} />
        </Field>
        <Field name="password" form={form} label="Password">
          <Textfield
            value={form.values.password}
            onChange={onChange("password")}
          />
        </Field>
        <Button type="submit" disabled={hasErrors} text="sign in" />
      </>
    )}
  </Form>
)
