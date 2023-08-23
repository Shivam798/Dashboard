import React from 'react'
import './datatable.scss'

import { DataGrid} from '@mui/x-data-grid';
import { userColumns ,userRows} from '../../datatablesource';
import { Link } from 'react-router-dom';


const Datatable = ({addnew}) => {
    const actionColumn =[
        {field:'action',headerName:"Action",width:200,renderCell:()=>{
            return (
                <div className='cellAction'>
                    <Link to="/users/test" style={{textDecoration:"none"}}>
                        <div className='viewButton'>View</div>
                    </Link>
                    <div className='deleteButton'>Delete</div>
                </div>
            )
        }}
    ]
    return (
        <div className='database'>
            <div className='datatableTitle'>
                {addnew}
            <Link to="/users/new" style={{textDecoration:"none"}} className='link'>
                Add NEW
            </Link>
            </div>
            <DataGrid
            className='datagrid'
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 9 },
                    },
                }}
                
                checkboxSelection
            />
        </div>
    )
}

export default Datatable