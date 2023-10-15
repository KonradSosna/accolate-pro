import { useForm } from 'react-hook-form';
import { BasicModal } from '../../components/organisms/Modal';
import { Lift, LiftStatus } from '../../__generated__/graphql';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { Header } from '../../components/organisms/Header';
import { LiftList } from '../../components/organisms/LiftList';
import { Inputs } from '../../components/organisms/types';

export const Dashboard: React.FC = () => {
	const { register, watch } = useForm<Inputs>();

	const status = watch('status') as LiftStatus;
	const [open, setOpen] = useState(false);
	const [selectedLift, setSelectedLift] = useState<Lift>();

	return (
		<Grid sx={{ width: 800 }}>
			<Header register={register} />
			<LiftList
				status={status}
				setOpen={setOpen}
				setSelectedLift={setSelectedLift}
			/>
			{open && (
				<BasicModal
					open={open}
					setOpen={setOpen}
					selectedLift={selectedLift!}
				/>
			)}
		</Grid>
	);
};
