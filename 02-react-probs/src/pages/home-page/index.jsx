import React from 'react'
import PrimaryBtn from '../../components/button'
import Table from '../../components/table'

function Home({users}) {
  
  return (
    <Table users={users}/>

  )
}

export default Home 