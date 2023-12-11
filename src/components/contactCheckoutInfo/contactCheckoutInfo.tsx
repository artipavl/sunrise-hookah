import React, { FC } from 'react';
import palette from '../../theme.module';

interface FormValues {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	message: string;
}

type ContactCheckoutInfoProps = {
	values: FormValues;
};

const ContactCheckoutInfo: FC<ContactCheckoutInfoProps> = ({ values }) => {
	return (
		<div>
			<p style={{ color: palette.white }}>
				{values.firstName}
				{' ' + values.lastName}
				{values.email && ', ' + values.email}
				{values.phone && ', ' + values.phone}
			</p>
			{values.message && (
				<p style={{ color: palette.white }}>{values.message}</p>
			)}
		</div>
	);
};

export default ContactCheckoutInfo;
