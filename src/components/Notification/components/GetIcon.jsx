import { CheckCircle, XCircle, AlertCircle, InfoIcon } from "../../icons";

export const getIcon = (type) => {
  switch (type) {
    case "success":
      return <CheckCircle />;
    case "error":
      return <XCircle />;
    case "warning":
      return <AlertCircle />;
    default:
      return <InfoIcon />;
  }
};
