import { UserFragment } from "@/graphql/generated/fragments/user.fragment";
import { GET_USER } from "@/graphql/generated/queries/user.queries";
import { ApolloError, useQuery } from "@apollo/client";
import { Session } from "next-auth";
import { createContext, FC, ReactNode, useContext } from "react";

interface UserContextData {
  user: UserFragment | undefined;
  loading: boolean;
  error?: ApolloError | undefined;
}

const UserContext = createContext<UserContextData>({
  user: undefined,
  loading: true,
});

export default UserContext;

interface UserContextProviderProps {
  session?: Session;
  children: ReactNode;
}

export const UserContextProvider: FC<UserContextProviderProps> = ({ session, children }) => {
  const email = session?.user?.email;
  const { data, loading, error } = useQuery<{ user: UserFragment }>(GET_USER, {
    variables: { where: { email } },
    skip: !email,
  });
  const contextData = { user: data?.user, loading, error };
  return <UserContext.Provider value={contextData}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextData => {
  return useContext(UserContext);
};
