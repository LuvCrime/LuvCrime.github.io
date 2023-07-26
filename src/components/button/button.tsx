import { Button as MUIButton } from '@mui/material';

export const Button = ({ children }) => {
    return (
        <MUIButton variant="contained">{children}</MUIButton>
    )
}