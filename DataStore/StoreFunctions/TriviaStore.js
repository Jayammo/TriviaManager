import AsyncStorage from '@react-native-async-storage/async-storage';
import { StoreKey } from '../StoreKeys';

export async function CreateTrivia(trivia) {
	try {
		let triviaJSON = JSON.stringify(trivia);
		await AsyncStorage.setItem(StoreKey.Trivia, triviaJSON);
	} catch (error) {
		console.error({ error });
	}
}

export async function FetchAllTrivia() {
	try {
		const trivias = await AsyncStorage.getItem(StoreKey.Trivia);
		if (trivias === 'undefined') {
			return [];
		}
		return JSON.parse(trivias);
	} catch (error) {
		console.error({ error });
	}
}
