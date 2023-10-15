import { UseFormRegister } from 'react-hook-form';
import { Lift, LiftStatus, Trail } from '../../__generated__/graphql';

export interface HeaderProps {
	register: UseFormRegister<Inputs>;
}

export interface LiftListProps {
	status: LiftStatus | undefined;
	setOpen: (open: boolean) => void;
	setSelectedLift: (lift: Lift) => void;
}

export interface LiftListRes {
	allLifts: Lift[];
}

export interface TrailListRes {
	allTrails: Trail[];
}

export type Inputs = {
	status?: string | null;
};

export interface ModalProps {
	open: boolean;
	setOpen: (open: boolean) => void;
	selectedLift: Lift;
}
