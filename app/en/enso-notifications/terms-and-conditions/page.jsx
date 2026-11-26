import EnsoNotificationsPage from "../../../components/enso-notifications";
import {
  ensoNotifications,
  ensoNotificationsMetadata,
} from "../../../../lib/enso-notifications";

/* ENSO Notifications' terms, which its Marketplace listing and Google's
   consent screen link to. */
const doc = ensoNotifications.terms;

export const metadata = ensoNotificationsMetadata(doc);

export default function EnsoNotificationsTerms() {
  return <EnsoNotificationsPage doc={doc} />;
}
