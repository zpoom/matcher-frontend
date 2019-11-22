import React, { Fragment } from 'react'
import { CreateWsForm, NavBarWithLogo, Footer } from '../../components'
import { upsertWorkshop } from '../../api/workshop'
import { withRouter } from "react-router-dom";

interface CreateWsProp {
  history: any
}

export default withRouter(({ history }: CreateWsProp) => {
  return <Fragment>
    <NavBarWithLogo />
    <CreateWsForm onSubmit={(value: any) => {
      upsertWorkshop(value).then(history.push('/manage'))
    }} />
    <Footer />
  </Fragment>
})