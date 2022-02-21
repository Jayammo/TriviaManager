import { useCallback, useContext } from 'react';
import { SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import { AppContext } from '../AppProvider';

const Loader = ({ children }) => {
	const { refreshing, setRefreshing } = useContext(AppContext);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		wait(2000).then(() => setRefreshing(false));
	}, []);

	return (
		<SafeAreaView>
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				{children}
			</ScrollView>
		</SafeAreaView>
	);
};

export default Loader;
