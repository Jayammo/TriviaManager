import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [value, setValue] = useState({});
	return (
		<AppContext.Provider value={{ value, setValue }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
