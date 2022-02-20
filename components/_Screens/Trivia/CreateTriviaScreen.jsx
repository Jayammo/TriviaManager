import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { Button, TextInput } from 'react-native-paper';

const CreateTriviaScreen = () => {
	return (
		<Formik
			initialValues={{ email: '' }}
			onSubmit={(values) => console.log(values)}
		>
			{({ handleChange, handleBlur, handleSubmit, values }) => (
				<View>
					<TextInput
						label='Event Title'
						mode='outlined'
						onChangeText={handleChange('email')}
						onBlur={handleBlur('email')}
						value={values.email}
					/>
					<Button icon='send-outline' mode='contained' onPress={handleSubmit}>
						Create
					</Button>
				</View>
			)}
		</Formik>
	);
};

export default CreateTriviaScreen;
