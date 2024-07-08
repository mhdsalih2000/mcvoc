import React from 'react'
import Navbar from '../components/Navbar'
import Table from '../components/Table'
import Dropdown from '../components/Form'


function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Dropdown/>
        <Table></Table>
    </div>
  )
}

export default Home
