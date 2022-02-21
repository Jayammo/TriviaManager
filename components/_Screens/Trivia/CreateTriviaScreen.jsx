import { Formik } from 'formik';
import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { CreateTrivia } from '../../../DataStore/StoreFunctions/TriviaStore';
import { AppContext } from '../../_Shared/AppProvider';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateTriviaScreen = ({ navigation }) => {
	const { setRefreshing } = useContext(AppContext);

	const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode('date');
	};

	const showTimepicker = () => {
		showMode('time');
	};

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setDate(currentDate);
	};
	return (
		<Formik
			initialValues={{ EventTitle: '', Description: '' }}
			onSubmit={async (values) => {
				await CreateTrivia(values);
				setRefreshing(true);
				navigation.goBack();
			}}
		>
			{({ handleChange, handleBlur, handleSubmit, values }) => (
				<View>
					{/* <TextInput
						label='Event Title'
						mode='outlined'
						onChangeText={handleChange('EventTitle')}
						onBlur={handleBlur('EventTitle')}
						value={values.EventTitle}
					/>
					<TextInput
						label='Description'
						mode='outlined'
						onChangeText={handleChange('Description')}
						onBlur={handleBlur('Description')}
						value={values.Description}
					/> */}
					<Button onPress={showDatepicker} title='Show date picker!' />
					<Button onPress={showTimepicker} title='Show time picker!' />
					{show && (
						<DateTimePicker
							testID='dateTimePicker'
							value={date}
							mode={mode}
							is24Hour={true}
							display='default'
							onChange={onChange}
						/>
					)}
					<Button icon='send-outline' mode='contained' onPress={handleSubmit}>
						Create
					</Button>
				</View>
			)}
		</Formik>
	);
};

export default CreateTriviaScreen;
