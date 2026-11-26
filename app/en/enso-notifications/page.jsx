import EnsoNotificationsPage from "../../components/enso-notifications";
import {
  ensoNotifications,
  ensoNotificationsMetadata,
} from "../../../lib/enso-notifications";

/* What ENSO Notifications is, and where to get help: the support page of
   its Google Workspace Marketplace listing. */
const doc = ensoNotifications.about;

export const metadata = ensoNotificationsMetadata(doc);

export default function EnsoNotifications() {
  return <EnsoNotificationsPage doc={doc} />;
}
