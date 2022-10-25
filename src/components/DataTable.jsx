import React from 'react';
import DataTable from 'react-data-table-component';

export default function Datatable({ columnsDataTable, gameData, optionsPagination }) {
	return (
		<>
			<div className="mt-5 bg-success">
				<DataTable
					className="bg-danger"
					title="Datos de la partida"
					columns={columnsDataTable}
					data={gameData}
					pagination
					paginationComponentOptions={optionsPagination}
					fixedHeader
					fixedHeaderScrollHeight="600px"
				/>
			</div>
		</>
	);
}
