import { MaterialReactTable } from 'material-react-table'
import React from 'react'

export const TablaRegistros = ({ colummnas, data }) => {

    return (
        <MaterialReactTable
            columns={colummnas}
            data={data}
            muiTableBodyProps={{sx:{borderRadius: "50px"}}}
        />
    )
}
