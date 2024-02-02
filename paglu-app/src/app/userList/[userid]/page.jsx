
import React from 'react'

function page({params}) {
  console.log(params);

  return (
    <div>
        <h2>User information: {params?.userid}</h2>
    </div>
  )
}

export default page