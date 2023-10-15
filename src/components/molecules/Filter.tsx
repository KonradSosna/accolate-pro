import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { FC, memo } from 'react';
import { StatusList } from '../atoms/StatusList';
import { FilterProps } from './types';

export const Filter: FC<FilterProps> = memo(
	({ register, allStatus, label }) => {
		return (
			<FormControl>
				<InputLabel id="status-select-label">
					{label ? 'Status' : null}
				</InputLabel>
				<Select
					labelId="status-select-label"
					id="status-select"
					{...register('status')}
					label={label ? 'Status' : null}
					defaultValue={''}
					sx={{
						width: '200px',
					}}
				>
					{allStatus && (
						<MenuItem value={''}>
							<em>ALL</em>
						</MenuItem>
					)}
					{StatusList}
				</Select>
			</FormControl>
		);
	}
);
