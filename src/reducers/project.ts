import { createReducer, PayloadAction } from '@reduxjs/toolkit';



const getProjectReducer = createReducer<{project: Array<any>}>({project: []}, {
    'project': (
        state,
        action: PayloadAction<{
            project: any;
        }>
    ) => {
        const {project} = action.payload
        state.project=project;
        return state;
    },

});

export default getProjectReducer;
