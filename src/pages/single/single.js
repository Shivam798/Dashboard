import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Sidebar from '../../component/Sidebar/Sidebar'
import Chart from "../../component/chart/Chart"
import Table from '../../component/table/Table'
import './single.scss'

const single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h1 className='title'> Information</h1>
            <div className='item'>
              <img 
                src='https://cdn.pixabay.com/photo/2023/05/12/10/47/ai-generated-7988262_640.jpg'
                alt='' 
                className='itemImg'>
                
              </img>
              <div className='details'>
                <h1 className='itemTitle'>Pikachu</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>pikachu@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+91 9818309963</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>Sector -45 ,Noida,201301</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>India</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className='bottom'>
          <h1 className='title'>Last Transactions</h1>

          <Table/>
        </div>

      </div>
    </div>
  )
}

export default single