// src/components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { useUser } from "../ContextProvider/UserContext";

interface ProtectedRouteProps {
	children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const {user} = useUser();

	if (!user) {
		return <Navigate to="/login" replace />;
	}

	return <>{children}</>;
};

export default ProtectedRoute;
