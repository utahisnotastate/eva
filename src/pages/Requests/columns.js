import React, { useEffect, useState } from 'react'
import {
	Slide,
	Dialog,
	DialogTitle,
	DialogContent,
	Typography,
	Divider,
} from '@mui/material'
import { CardTravel, CloseIcon } from '@mui/icons-material'
4
function NameColumn(tableMeta) {
	return (
		<Typography>
			{tableMeta.rowData[2].first_name} {tableMeta.rowData[2].last_name}
		</Typography>
	)
}
