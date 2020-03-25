import React from 'react';
import { useTheme } from "../../components/Core";

export const AgGridStyles = () => {
    const theme = useTheme();
    return {
        "ag-header-container": {
            color: theme.palette.primary.main
        },
    }
}


