import React from 'react'
import Sidebar from '../../component/Sidebar/Sidebar';
import Navbar from '../../component/Navbar/Navbar';
import "./list.scss"
import Datatable from '../../component/datatable/Datatable';

const List = ({addnew}) => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
        <Datatable addnew={addnew}/>
      </div>
    </div>
  )
}

export default List