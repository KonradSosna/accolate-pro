import { Dialog, Grid, styled } from '@mui/material';
import { Paper } from '@mui/material';

export const StyledGrid = styled(Grid)`
	position: relative;
	left: 50%;
	transform: translate(-50%);
`;

export const StyledPaper = styled(Paper)(() => ({
	maxHeight: 700,
	overflow: 'auto',
	padding: '20px',
	border: '1px solid #000000',
}));

export const BootstrapDialog = styled(Dialog)(() => ({
	'& .MuiDialog-paper': {
		width: '700px',
		alignItems: 'center',
	},

	'& .MuiDialogContent-root': {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},

	'& .MuiDialogTitle-root': {
		textAlign: 'center',
		padding: '10px',
		fontWeight: '600',
	},

	'& .MuiDialogContentText-root': {
		marginTop: '20px',
		fontWeight: '600',
	},

	'& .MuiDialogActions-root': {
		width: '100%',
		padding: '10px 0',
		justifyContent: 'space-around',
	},
}));
