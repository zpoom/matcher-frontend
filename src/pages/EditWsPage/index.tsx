import React, { Fragment, useState, useEffect } from 'react'
import { CreateWsForm, NavBarWithLogo, Footer } from '../../components'
import { upsertWorkshop } from '../../api/workshop'
import { withRouter, Redirect } from "react-router-dom";
import { getWorkshopById } from '../../api/workshop'

interface CreateWsProp {
  match?: any
}

export default withRouter(({ match }: CreateWsProp) => {
  const [workshop, setWorkshop] = useState<any>({})
  const [finished, setFinished] = useState(false)
  const wsId = match.params.id

  useEffect(() => {
    getWorkshopById(wsId).then(wsDetail => {
      setWorkshop(wsDetail)
    })
  }, [wsId])

  return !finished ? <Fragment>
    <NavBarWithLogo />
    <CreateWsForm isEdit init={workshop} onSubmit={(value: any) => {
      upsertWorkshop(value, wsId).then(() => setFinished(true))
    }} />
    <Footer />
  </Fragment> : <Redirect to={{ pathname: '/manage', state: { msg: 'Updated Workshop' } }} />
})