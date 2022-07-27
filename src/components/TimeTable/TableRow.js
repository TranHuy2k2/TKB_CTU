import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ClassCard from './ClassCard';

function DataTableRow({index, courses}){
    return index > 0? (
        <TableRow sx={{height: '56px'}}>
            <TableCell key={index * 7 + 1} sx={{textAlign: 'center', padding: '0',height: '100%', border: 'none',  border: '1px solid #896b60'}}>{index}</TableCell>
            <TableCell key={index * 7 + 2} sx={{textAlign: 'center', padding: '0', height: '100%', border: 'none',border: '1px solid #896b60'}} rowSpan={courses[2]? courses[2].duration : 1} align="right">{courses[2]? <ClassCard course={courses[2]}/> : ''}</TableCell>
            <TableCell key={index * 7 + 3} sx={{textAlign: 'center', padding: '0', height: '100%', border: 'none',border: '1px solid #896b60'}} rowSpan={courses[3]? courses[3].duration : 1} align="right">{courses[3]? <ClassCard course={courses[3]}/> : ''}</TableCell>
            <TableCell key={index * 7 + 4} sx={{textAlign: 'center', padding: '0', height: '100%', border: 'none',border: '1px solid #896b60'}} rowSpan={courses[4]? courses[4].duration : 1} align="right">{courses[4]? <ClassCard course={courses[4]}/> : ''}</TableCell>
            <TableCell key={index * 7 + 5} sx={{textAlign: 'center', padding: '0', height: '100%', border: 'none',border: '1px solid #896b60'}} rowSpan={courses[5]? courses[5].duration : 1} align="right">{courses[5]? <ClassCard course={courses[5]}/> : ''}</TableCell>
            <TableCell key={index * 7 + 6} sx={{textAlign: 'center', padding: '0', height: '100%', border: 'none',border: '1px solid #896b60'}} rowSpan={courses[6]? courses[6].duration : 1} align="right">{courses[6]? <ClassCard course={courses[6]}/> : ''}</TableCell>
            <TableCell key={index * 7 + 7} sx={{textAlign: 'center', padding: '0', height: '100%', border: 'none',border: '1px solid #896b60'}} rowSpan={courses[7]? courses[7].duration : 1} align="right">{courses[7]? <ClassCard course={courses[7]}/> : ''}</TableCell>
          </TableRow>
    ): (<></>)
}
export default DataTableRow;