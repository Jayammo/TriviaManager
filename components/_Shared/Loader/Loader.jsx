import { Colors, ProgressBar } from 'react-native-paper';

const Loader = ({ loading, children }) => {
	if (loading) {
		return <ProgressBar indeterminate={true} color={Colors.red800} />;
	}
	return children;
};

export default Loader;
