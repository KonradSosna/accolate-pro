import { gql } from '@apollo/client';

export const GET_LIFT_LIST = gql`
	query GetAllLifts($status: LiftStatus) {
		allLifts(status: $status) {
			id
			name
			elevationGain
			status
		}
	}
`;
