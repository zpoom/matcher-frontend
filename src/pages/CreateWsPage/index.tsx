import React, { Fragment } from 'react'
import { CreateWsForm, NavBarWithLogo, Footer } from '../../components'

export default () => {
  return <Fragment>
    <NavBarWithLogo />
    <CreateWsForm />
    <Footer />
  </Fragment>
}