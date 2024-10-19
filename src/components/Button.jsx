import React from 'react';
import { Heading } from './Text';

import {
	colors,
	padding,
	fontSizes,
	borderRadius,
	borderWidths,
	fontWeights
} from '../utils/globals';
import paddingCreator from '../utils/paddingCreator';

/**
 * @type {React.FC<{
 * 		label: String,
 * 		type: 'primary' | 'secondary',
 * 		width: 'fill' | 'hug',
 * 		onPress: Promise<Void>
 * }>}
 */
const Button = (props) => {
	return (
		<Heading
			level={5}

			style={{
				...paddingCreator(
					padding.small,
					padding.medium
				),

				textAlign: 'center',
				textAlignVertical: 'center',

				cursor: 'pointer',

				borderRadius: borderRadius.small,

				width: props.width === 'fill' ? '100%' : 'auto',
				backgroundColor: props.type === 'secondary' ? null : colors.primary,
				borderColor: props.type === 'secondary' ? colors.text : null,
				borderWidth: props.type === 'secondary' ? borderWidths.thin : null
			}}

			onPress={props.onPress}
		>
			{props.label || props.children}
		</Heading>
	);
};

export default Button;