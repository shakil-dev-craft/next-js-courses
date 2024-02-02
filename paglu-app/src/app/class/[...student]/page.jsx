import React from 'react'

function page({params}) {
    console.log(params);

  return (
    <div>
        <h2>This is Catch All Segments Page</h2>
        <p>This student information catch all segments: {params?.student}</p>
    </div>
  )
}

export default page