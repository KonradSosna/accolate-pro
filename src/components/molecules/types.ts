import { OperationVariables, QueryResult } from '@apollo/client';
import { UseFormRegister } from 'react-hook-form';
import { Inputs, TrailListRes } from '../organisms/types';

export interface FilterProps {
	register: UseFormRegister<Inputs>;
	allStatus?: boolean;
	label?: boolean;
}
export interface TrailListProps {
	getTrailListRes: QueryResult<TrailListRes, OperationVariables>;
	id?: string;
}
