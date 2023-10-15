import { FC, SyntheticEvent, memo } from 'react';
import {
	Button,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import { Filter } from '../molecules/Filter';
import { useMutation, useQuery } from '@apollo/client';
import { GET_TRAIL_LIST, SET_LIFT_STATUS } from '../../graphql/index';
import { LoadingButton } from '@mui/lab';
import { client } from '../../graphql/client';
import { TrailList } from '../molecules/TrailList';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BootstrapDialog } from './styles';
import { Inputs, ModalProps, TrailListRes } from './types';

export const BasicModal: FC<ModalProps> = memo(
	({ open, setOpen, selectedLift }) => {
		const { register, handleSubmit, watch } = useForm<Inputs>();

		const status = watch('status');

		const getTrailListRes = useQuery<TrailListRes>(GET_TRAIL_LIST);
		const [mutateFunction, res] = useMutation(SET_LIFT_STATUS);

		const onSubmit: SubmitHandler<Inputs> = async (data) => {
			await mutateFunction({
				variables: { id: selectedLift?.id, status: data.status },
			});
			setOpen(false);
			await client.refetchQueries({
				include: ['GetAllLifts'],
			});
		};

		const handleClose = (_event: SyntheticEvent, reason: string) => {
			if (reason == 'backdropClick') {
				return;
			}
			setOpen(false);
			return status;
		};

		return (
			<BootstrapDialog open={open} onClose={handleClose} disableEscapeKeyDown>
				<form onSubmit={handleSubmit(onSubmit)}>
					<DialogTitle variant="h5">{selectedLift?.name}</DialogTitle>
					<DialogTitle>{selectedLift?.elevationGain}</DialogTitle>
					<DialogContent style={{ overflow: 'hidden' }}>
						<DialogContentText>Update Status</DialogContentText>
						<Filter register={register} />
						<DialogContentText>Trail Access List</DialogContentText>
						<TrailList
							getTrailListRes={getTrailListRes}
							id={selectedLift?.id}
						/>
					</DialogContent>
					<DialogActions>
						<Button
							variant="contained"
							onClick={() => setOpen(false)}
							disabled={res.loading}
							color="error"
						>
							Cancel
						</Button>
						<LoadingButton
							variant="contained"
							type="submit"
							autoFocus
							loading={res.loading}
						>
							Save
						</LoadingButton>
					</DialogActions>
				</form>
			</BootstrapDialog>
		);
	}
);
