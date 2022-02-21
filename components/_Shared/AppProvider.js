import React, { useState } from 'react';

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [refreshing, setRefreshing] = useState(false);
	return (
		<AppContext.Provider
			value={{ loading, setLoading, refreshing, setRefreshing }}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
