import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch} from 'react-redux';
import selectedCoursesSlice from '../../store/slices/selectedCoursesSlice';

export default function ClassCard({course}) {
    const dispatch = useDispatch();

  return (
    <Box sx={{ width: '100%', padding: '0', height: '100%', boxSizing: 'border-box', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
        <Card sx={{height: '100%' , display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} variant="outlined">
            <CardContent sx={{padding : '8px'}}>
                <Typography sx={{ fontSize: 18, fontWeight: '700', color: '#4a332d' }} gutterBottom>
                    {`${course.name} - ${course.id}`}
                </Typography>
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <Typography sx={{ fontSize: 16, fontWeight: '700', color: '#F0c648' }} variant='p' component="p">
                        {`Phòng: `}
                    </Typography>
                    <Typography sx={{ fontSize: 16, marginLeft: '2px'}} variant='p' component="p">
                        {course.room}
                    </Typography>
                </div>
            </CardContent>
        <CardActions sx={{justifyContent: 'flex-end'}}>
        <Button onClick={() => {dispatch(selectedCoursesSlice.actions.deleteCourse(course.key))}} sx={{width: '100%', backgroundColor: '#4a332d', color: 'white', transition: '0.1s transform linear', ':hover': {
            backgroundColor: '#4a332d !important', transform: 'scale(1.1)'
        }}} size="small">Xóa</Button>
        </CardActions>
            
        </Card>
    </Box>
  );
}
