import { useState } from "react";
import type { UserDataRes } from "../interface";


function useLocalStorage(key: string, initialValue: UserDataRes | null) {
	const [storedValue, setStoredValue] = useState<UserDataRes | null>(() => {
		if (typeof window === "undefined") return initialValue;
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error("Failed to load from localStorage", error);
			return initialValue;
		}
	});

	const setValue = (value: UserDataRes | null) => {
		try {
			if (value === null) {
				window.localStorage.removeItem(key);
				setStoredValue(null);
			} else {
				window.localStorage.setItem(key, JSON.stringify(value));
				setStoredValue(value);
			}
		} catch (error) {
			console.error("Failed to save to localStorage", error);
		}
	};

	return [storedValue, setValue] as const;
}

export {
    useLocalStorage
}