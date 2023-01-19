import React from 'react'
import { Levels } from '../../models/levels.enum';
import {Task } from "../../models/task.class.js"
import TaskComponent from '../pure/task';

const TaskListComponent = () =>{
    const defaultTask = new Task("exmaple","default description",false,Levels.NORMAL);

    return(
        <div>
            <div>
                <h1>
                    YOUR TASK
                </h1>
            </div>
            {/*TODO: Aplicar un for x ahi*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
