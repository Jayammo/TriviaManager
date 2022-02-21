import { useEffect, useState, useContext, useCallback } from 'react';
import {
	RefreshControl,
	SafeAreaView,
	ScrollView,
	StyleSheet,
} from 'react-native';
import { FAB } from 'react-native-paper';
import { FetchAllTrivia } from '../../../DataStore/StoreFunctions/TriviaStore';
import { AppContext } from '../../_Shared/AppProvider';
import Loader from '../../_Shared/Loader/Loader';
import TriviaCard from '../Trivia/TriviaCard';

const HomeScreen = ({ navigation }) => {
	const [trivias, setTrivias] = useState([{}]);
	const { refreshing } = useContext(AppContext);

	useEffect(() => {
		const fetch = async () => {
			const storedTrivias = await FetchAllTrivia();
			setTrivias(storedTrivias);
		};
		fetch();
	}, [refreshing]);

	return (
		<>
			<Loader>
				{trivias.map((trivia, id) => (
					<TriviaCard key={id} trivia={trivia} />
				))}
			</Loader>
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
