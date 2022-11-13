import React from 'react';
import { Icon } from '@mui/material';
import { mdiAccount } from '@mdi/js';

export default function IconEdit() {
    return (
        <Icon path={mdiAccount}
            title="User Profile"
            size={1}
            horizontal
            vertical
            rotate={90}
            color="red"
            spin/>
    );
} 