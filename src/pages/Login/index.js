import React from "react"
import { authRequest } from "data/auth/api"
import { login } from "data/auth/rx"
import { Textfield } from "inputs/Textfield"
import { Form } from "components/Form"
import { combineValidators, emailRequired, stringRequired } from "validators"

export const Login = () => (
  <Form
    onSubmit={authRequest.login}
    onSuccess={v => login(v)}
    initialValues={{
      email: "john@doe.com",
      password: "hunter2",
    }}
    schema={values => ({
      email: emailRequired,
      password: combineValidators(stringRequired),
      repeatPassword: combineValidators(
        stringRequired,
        v => values.password !== v && "Password is not same",
      ),
    })}
  >
    {({ hasErrors }) => (
      <>
        <Textfield label="Email" name="email" />
        <Textfield label="Password" name="password" />
        <button type="submit" disabled={hasErrors}>
          sign in
        </button>
      </>
    )}
  </Form>
)
