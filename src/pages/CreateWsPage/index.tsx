import React, { Fragment, useState } from 'react'
import { CreateWsForm, NavBarWithLogo, Footer } from '../../components'
import { upsertWorkshop } from '../../api/workshop'
import { Redirect } from "react-router-dom";

export default () => {
  const [finished, setFinished] = useState(false)

  return !finished ? <Fragment>
    <NavBarWithLogo />
    <CreateWsForm onSubmit={(value: any) => {
      upsertWorkshop(value).then(() => setFinished(true))
    }} />
    <Footer />
  </Fragment> : <Redirect to={{ pathname: '/manage', state: { msg: 'Created Workshop' } }} />
}