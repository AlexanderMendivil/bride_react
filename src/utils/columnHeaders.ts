import { GridColDef } from '@mui/x-data-grid';
export const columns: GridColDef[] = [
    {
      field: 'nombre',
      headerName: 'Nombre',
      width: 150,
    },
    {
      field: 'num_invitados',
      headerName: 'Numero de invitados',
      width: 150,
    },
    {
      field: 'status',
      headerName: 'status',
      type: 'number',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'email',
      sortable: false,
      width: 200,
    },
    {
      field: 'phone_number',
      headerName: 'Numero de telefono',
      sortable: false,
      width: 160,
    },
  ];
  