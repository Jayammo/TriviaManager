import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { FetchAllTrivia } from '../../../DataStore/StoreFunctions/TriviaStore';
import TriviaCard from '../Trivia/TriviaCard';

const HomeScreen = ({ navigation }) => {
	const [trivias, setTrivias] = useState([]);

	useEffect(() => {
		const fetch = async () => {
			const storedTrivias = await FetchAllTrivia();
			console.log('Store => ', storedTrivias);
			setTrivias(storedTrivias);
		};
		fetch();
	}, []);

	return (
		<>
			{trivias.map((trivia) => (
				<TriviaCard />
			))}
			<FAB
				style={styles.fab}
				small
				icon='plus'
				onPress={() => navigation.navigate('Root', { screen: 'CreateTrivia' })}
			/>
		</>
	);
};
const styles = StyleSheet.create({
	fab: {
		position: 'absolute',
		margin: 16,
		right: 0,
		bottom: 0,
	},
});

export default HomeScreen;
