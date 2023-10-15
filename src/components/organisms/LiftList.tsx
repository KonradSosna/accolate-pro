import {
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Tooltip,
} from '@mui/material';
import { FC } from 'react';
import { Lift } from '../../__generated__/graphql';
import { LoadingSkeleton } from '../atoms/LoadingSkeleton';
import { useQuery } from '@apollo/client';
import { GET_LIFT_LIST } from '../../graphql';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { LiftListProps, LiftListRes } from './types';
import { StyledPaper } from './styles';

export const LiftList: FC<LiftListProps> = ({
	status,
	setOpen,
	setSelectedLift,
}) => {
	const {
		loading,
		error,
		data: lifts,
	} = useQuery<LiftListRes>(GET_LIFT_LIST, {
		variables: { status: status?.length === 0 ? undefined : status },
	});

	const handleClick = (lift: Lift) => {
		setOpen(true);
		setSelectedLift(lift);
	};

	if (loading) return <LoadingSkeleton />;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<Grid item>
			<StyledPaper>
				<List>
					{lifts?.allLifts.map((lift) => (
						<Grid
							container
							key={lift.id}
							style={{ marginBottom: '20px', border: '1px solid #000000' }}
						>
							<Grid item xs={4}>
								<ListItem style={{ textAlign: 'center' }}>
									<ListItemText>{lift.name}</ListItemText>
								</ListItem>
								<ListItem style={{ textAlign: 'center' }}>
									<ListItemText>{lift.elevationGain}</ListItemText>
								</ListItem>
							</Grid>

							<Grid item xs={4}>
								<ListItem style={{ textAlign: 'center', height: '100%' }}>
									<ListItemText>{lift.status}</ListItemText>
								</ListItem>
							</Grid>

							<Grid item xs={4}>
								<ListItem style={{ justifyContent: 'center', height: '100%' }}>
									<Tooltip title="Open Form">
										<IconButton
											onClick={() => handleClick(lift)}
											disabled={!lift}
										>
											<EditCalendarIcon />
										</IconButton>
									</Tooltip>
								</ListItem>
							</Grid>
						</Grid>
					))}
				</List>
			</StyledPaper>
		</Grid>
	);
};
