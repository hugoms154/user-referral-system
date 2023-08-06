import { AuthProvider } from "./auth";
import { ChildrenData } from "./auth/types";

export const AppProvider = ({ children }: ChildrenData) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
} 