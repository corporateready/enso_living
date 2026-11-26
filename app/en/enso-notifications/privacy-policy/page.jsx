import EnsoNotificationsPage from "../../../components/enso-notifications";
import {
  ensoNotifications,
  ensoNotificationsMetadata,
} from "../../../../lib/enso-notifications";

/* ENSO Notifications' privacy policy, which its Marketplace listing and
   Google's consent screen link to. */
const doc = ensoNotifications.privacy;

export const metadata = ensoNotificationsMetadata(doc);

export default function EnsoNotificationsPrivacy() {
  return <EnsoNotificationsPage doc={doc} />;
}
