import { UserFragment } from "@/graphql/generated/fragments/user.fragment";

const ENABLED_PROVIDERS: CalendarProvider[] = ["google"];

export const isValidProvider = (provider: string) => {
  return ENABLED_PROVIDERS.includes(provider as CalendarProvider);
};

export const getCalendarScope = (provider: CalendarProvider): string => {
  switch (provider) {
    case "google":
      return "https://www.googleapis.com/auth/calendar";
    default:
      throw new Error("Provider not supported");
  }
};

export const providerIsEnabledForUser = (provider: CalendarProvider, user: UserFragment) => {
  return Boolean(
    user?.accounts?.find(
      (account) =>
        account.provider === provider && account.scopes.includes(getCalendarScope(provider))
    )
  );
};
