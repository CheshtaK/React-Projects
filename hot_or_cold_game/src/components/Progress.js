import React from 'react';
import { Typography } from '@material-ui/core';

import './Progress.css';

const Progress = ({ attempt, guessList }) => {

    return(
        <div>
            <Typography style={{marginTop: '50px'}} variant="h4">Guess #{attempt}</Typography>
            <ul className="progressBar_history">
                {guessList}
            </ul>
        </div>
    )
}

export default Progress;