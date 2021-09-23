import React from "react";

import { useClipboard } from "use-clipboard-copy";

import styles from "../styles/pages/home.module.scss";

const Link = ({ link }) => {
  const clipboard = useClipboard({ copiedTimeout: 2000 });

  const { original_link, full_short_link } = link;

  return (
    <div className={styles.shorten}>
      <a
        href={original_link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shorten__original_link}
      >
        {original_link}
      </a>

      <hr />

      <div>
        <a
          href={full_short_link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shorten__full_short_link}
        >
          {full_short_link}
        </a>

        <button
          onClick={() => clipboard.copy(full_short_link)}
          className={`primary_btn ${
            clipboard.copied ? styles.shorten__primary_btn_copied : null
          }`}
        >
          {clipboard.copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default Link;
