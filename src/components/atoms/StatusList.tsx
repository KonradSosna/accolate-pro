import { MenuItem } from '@mui/material';
import { LiftStatus } from '../../__generated__/graphql';

export const StatusList = Object.values(LiftStatus).map((status) => {
	return (
		<MenuItem key={status} value={status}>
			{status}
		</MenuItem>
	);
});
