import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DenseTable(array) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell align="right">Tag</TableCell>
            <TableCell align="right">Método de pagamento</TableCell>
            <TableCell align="right">Valor</TableCell>
            <TableCell align="right">Moeda</TableCell>
            <TableCell align="right">Câmbio utilizado</TableCell>
            <TableCell align="right">Valor convertido</TableCell>
            <TableCell align="right">Moeda de conversão</TableCell>
            <TableCell align="right">Editar/Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map(({
              value,
              description,
              method,
              tag,
              currency,
              id,
              exchangeRates,
            }) => (
            <TableRow
              key={ id }
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                { description }
              </TableCell>
              <TableCell align="right">{tag}</TableCell>
              <TableCell align="right">{method}</TableCell>
              <TableCell align="right">{Number(value).toFixed(2)}</TableCell>
              <TableCell align="right">{exchangeRates[currency].name}</TableCell>
              <TableCell align="right">{Number(exchangeRates[currency].ask).toFixed(2)}</TableCell>
              <TableCell align="right">{(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}</TableCell>
              <TableCell align="right">Real</TableCell>
              <TableCell align="right">
                <button
                      type="button"
                      onClick={ () => this.handleEditBtn(id) }
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={ () => this.handleDeleteBtn(id) }
                    >
                      Excluir
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
