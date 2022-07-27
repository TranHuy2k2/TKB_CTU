import {useEffect, useState}from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DataTableRow from './TableRow';
import { useSelector } from 'react-redux';
import { selectedCoursesSelector,  } from '../../store/selector';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    textAlign: 'center',
    width: 'calc(90% / 6)'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: 'center'
  },
}));


export default function TimeTable() {
  const selectedCourses = useSelector(selectedCoursesSelector);
  const [matrix, setMatrix] = useState(undefined);
  let Matrix = new Array(10);

  for (let i = 0; i < Matrix.length; i++) {
    Matrix[i] = new Array(8);
  }

    useEffect(()=>{
      
      if (selectedCourses.length > 0){
        selectedCourses.forEach((course) => {
          course.time.forEach((courseTime) => {
            const day = courseTime.day;
            const startPeriod = courseTime.start;
            Matrix[startPeriod][day] = {
              name: course.name,
              key: course.key,
              id: course.id,
              room: courseTime.room,
              duration: courseTime.count
            };
          })
        })
      }
      setMatrix(Matrix);
    }, [selectedCourses])
  return (
    <TableContainer component={Paper}>
      <Table sx={{textAlign:'center', minWidth: 700, borderCollapse: 'collapse', height: '100%', color: '#896b60'}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{width: '10% !important', border: '1px solid #896b60'}}>Tiết / Thứ</StyledTableCell>
            <StyledTableCell sx={{border: '1px solid #896b60'}} align="right">Thứ 2</StyledTableCell>
            <StyledTableCell sx={{border: '1px solid #896b60'}} align="right">Thứ 3</StyledTableCell>
            <StyledTableCell sx={{border: '1px solid #896b60'}} align="right">Thứ 4</StyledTableCell>
            <StyledTableCell sx={{border: '1px solid #896b60'}} align="right">Thứ 5</StyledTableCell>
            <StyledTableCell sx={{border: '1px solid #896b60'}} align="right">Thứ 6</StyledTableCell>
            <StyledTableCell sx={{border: '1px solid #896b60'}} align="right">Thứ 7</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{height: '100%'}}>
          {matrix && matrix.map((periodArr, period) => {
            return(
              <DataTableRow key={period} index={period} courses={periodArr} />
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
