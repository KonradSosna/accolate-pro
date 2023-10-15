import {
	CircularProgress,
	Grid,
	List,
	ListItem,
	ListItemText,
	Paper,
} from '@mui/material';
import { FC } from 'react';
import { TrailListProps } from './types';

export const TrailList: FC<TrailListProps> = ({ getTrailListRes, id }) => {
	const { data: trails, loading, error } = getTrailListRes;

	const trailsFilttered = trails?.allTrails?.filter((trail) =>
		trail.accessedByLifts.map((lift) => lift.id).includes(id!)
	);

	if (loading) return <CircularProgress />;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<Grid item>
			<Paper
				style={{
					maxHeight: 400,
					width: 500,
					overflow: 'auto',
					padding: '20px',
					border: '1px solid #000000',
				}}
			>
				<List>
					{trailsFilttered?.map((trail) => (
						<Grid
							container
							key={trail.id}
							style={{ marginBottom: '20px', border: '1px solid #000000' }}
						>
							<Grid item xs={6}>
								<ListItem style={{ textAlign: 'center' }}>
									<ListItemText>{trail.name}</ListItemText>
								</ListItem>
							</Grid>

							<Grid item xs={6}>
								<ListItem style={{ textAlign: 'center', height: '100%' }}>
									<ListItemText>{trail.status}</ListItemText>
								</ListItem>
							</Grid>
						</Grid>
					))}
				</List>
			</Paper>
		</Grid>
	);
};
