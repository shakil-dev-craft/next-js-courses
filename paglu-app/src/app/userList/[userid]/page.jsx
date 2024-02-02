
import React from 'react'

function page({params}) {
  console.log(params);

  return (
    <div>
        <h2>User information: {params?.userid}</h2>
    </div>
  )
}

export default page;

export function generateMetadata(){
  return {
    title: 'Welcome to paglu programmer website',
    description: 'This is paglu programmer website',
  }
}