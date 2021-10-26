import React from "react"
import { authRequest } from "data/auth/api"
import { login } from "data/auth/rx"
import { Textfield } from "inputs/Textfield"
import { Form } from "components/Form"
import { emailRequired, stringRequired } from "validators"
import { Label } from "components/Label"
import * as R from "ramda"

export const Login = () => (
  <Form
    onSubmit={authRequest.login}
    onSuccess={v => login(v)}
    initialValues={{
      email: "john@doe.com",
      password: "hunter2",
    }}
    schema={R.always({
      email: emailRequired,
      password: stringRequired,
    })}
  >
    {({ form, onChange }) => (
      <>
        <Label label="Email" name="email">
          <Textfield value={form.values.email} onChange={onChange("email")} />
        </Label>
        <Label label="Password" name="password">
          <Textfield
            value={form.values.password}
            onChange={onChange("password")}
          />
        </Label>
        <button type="submit">sign in</button>
      </>
    )}
  </Form>
)
