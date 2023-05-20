import React, {useEffect} from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Search, SearchIconWrapper, StyledInputBase} from "../../styeldComponent/SearchField.js";
import SearchIcon from "@mui/icons-material/Search";
import {taskListByStatus} from "../../APIRequest/APIRequest.ts";
import {useSelector} from "react-redux";
import {DeleteToDO} from "../../helper/DeleteAlert.js";
import {UpdateTask} from "../../helper/UpdateAlert.js";
import TaskCard from "../TaskCard/TaskCard.jsx";

const Completed = () => {
    const taskCompleted = useSelector((state) => state.task.Completed);
     useEffect(() => {
         taskListByStatus('Completed');
     }, [])
    const handelDeleteItem = (id) => {
        DeleteToDO(id).then((result) => {
            if(result === true){
                taskListByStatus('Completed');
            }
        });
    }
    const handelUpdateItem = (id, status) => {
        UpdateTask(id, status).then((result) => {
            if(result === true) {
                taskListByStatus('Completed');
            }
        })
    }
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
            >
                <Grid item md={6}>
                    <Typography variant="h5" sx={{
                        fontWeight: '700 !important'
                    }}>
                        Completed Task
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Grid>
            </Grid>
            <Grid  container
                   direction="row"
                   spacing={3}
                   sx={{
                       marginTop : '30px'
                   }}
            >
                {
                    taskCompleted.map((task, i) => (
                        <Grid item md={4}  key={i} >
                            <TaskCard UpdateItem={handelUpdateItem} DeleteItem={handelDeleteItem} task={task}/>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    );
};

export default Completed;