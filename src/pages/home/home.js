import Navbar from '../../component/Navbar/Navbar'
import Sidebar from '../../component/Sidebar/Sidebar'
import Chart from '../../component/chart/Chart'
import Featured from '../../component/featured/Featured'
import Table from '../../component/table/Table'
import Widget from '../../component/widgets/Widget'
import './home.scss'

const home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='homeContainer'>
        <Navbar/>
        <div className='widgets'>
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className='charts'>
          <Featured/>
          <Chart aspect={2/1} title="Last 6 Month Revenue"/>
        </div>
        <div className='listContainer'>
          <div className='listTitle'>Latest Transaction</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default home