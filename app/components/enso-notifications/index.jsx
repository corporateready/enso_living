import Header from "../terms-privacy-header";
import { ensoNotificationsPages } from "../../../lib/enso-notifications";
import styles from "./styles.module.css";

/*
 * A page of ENSO Notifications, ENSO's app for Google Chat
 * (app/en/enso-notifications): what it is, its privacy policy, its terms.
 * Set like this site's privacy policy and terms, under their header; over
 * the title, the three pages' own menu. The words are in
 * lib/enso-notifications.js.
 */

function Inlines({ parts }) {
  return parts.map((part, index) => {
    if (typeof part === "string") return part;
    const external = /^https?:/.test(part.href);
    return (
      <a
        href={part.href}
        key={index}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {part.text}
      </a>
    );
  });
}

function BlockView({ block }) {
  switch (block.kind) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "list":
      return (
        <ul>
          {block.items.map((item, index) => (
            <li key={index}>
              <Inlines parts={item} />
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p>
          <Inlines parts={block.text} />
        </p>
      );
  }
}

export default function EnsoNotificationsPage({ doc }) {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.container}>
        <article className={styles.article} aria-labelledby="enso-notifications-title">
          <nav className={styles.menu} aria-label="ENSO Notifications">
            {ensoNotificationsPages.map((page) =>
              page.path === doc.path ? (
                <span key={page.path} aria-current="page">
                  {page.label}
                </span>
              ) : (
                <a key={page.path} href={page.path}>
                  {page.label}
                </a>
              ),
            )}
          </nav>
          <h1 id="enso-notifications-title" className={styles.title}>
            {doc.title}
          </h1>
          <p className={styles.lead}>
            <Inlines parts={doc.lead} />
          </p>
          {doc.updated && (
            <p className={styles.updated}>
              Last updated <time dateTime={doc.updated.dateTime}>{doc.updated.date}</time>
            </p>
          )}
          <div className={styles.body}>
            {doc.blocks.map((block, index) => (
              <BlockView block={block} key={index} />
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
