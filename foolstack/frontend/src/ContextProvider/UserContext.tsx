import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

// type
import type { UserDataRes } from "../interface";

interface UserContextType {
	user: UserDataRes | null;
	setUser: (user: UserDataRes | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [user, setUser] = useLocalStorage("user", null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = (): UserContextType => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};
