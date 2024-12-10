import { UserIcon, LogoutIcon } from "@components/icons";

export const AuthIcon = ({ user }) => {
  const Icon = user ? LogoutIcon : UserIcon;
  return <Icon />;
};
