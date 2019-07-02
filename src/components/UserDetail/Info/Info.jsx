import React, { Fragment } from 'react'

const Info = ({ email, company, website, location, login }) => {
  return (
    <Fragment>
      <div className="my-4 py-3">
        {login && <p className="">{`Username: ${login}`}</p>}
        {email && <p className="">{`Email: ${email}`}</p>}
        {website && <p className="">{`Website: ${website}`}</p>}
        {company && <p className="">{`Company: ${company}`}</p>}
        {location && <p className="">{`Location: ${location}`}</p>}
      </div>
    </Fragment>
  )
}

export default Info
