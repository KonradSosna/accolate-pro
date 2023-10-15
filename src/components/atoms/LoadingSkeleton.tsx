import { List, Skeleton } from '@mui/material';
import { memo } from 'react';
import { BootstrapDialog } from './styles';

export const LoadingSkeleton = memo(() => {
	return (
		<BootstrapDialog>
			<List>
				{Array(6)
					.fill(true)
					.map((_item, index) => (
						<Skeleton
							key={index}
							style={{ marginBottom: '20px' }}
							animation="wave"
							variant="rectangular"
							height={100}
						/>
					))}
			</List>
		</BootstrapDialog>
	);
});
