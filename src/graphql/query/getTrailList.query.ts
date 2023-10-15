import { gql } from '@apollo/client';

export const GET_TRAIL_LIST = gql`
	query GetTrailList {
		allTrails {
			id
			name
			status
			accessedByLifts {
				id
			}
		}
	}
`;
