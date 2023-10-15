import { Grid, Typography } from '@mui/material';
import { Filter } from '../molecules/Filter';
import { FC } from 'react';
import { StyledGrid } from './styles';
import { HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({ register }) => {
	return (
		<Grid container alignItems="center" marginBottom="20px">
			<StyledGrid item>
				<Typography fontWeight={700} fontSize={26}>
					LIFTS LIST
				</Typography>
			</StyledGrid>
			<Grid
				item
				sx={{
					position: 'relative',
					left: '70%',
					transform: 'translate(-50%)',
				}}
			>
				<Filter register={register} allStatus label />
			</Grid>
		</Grid>
	);
};
