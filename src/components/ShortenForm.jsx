import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { useClipboard } from "use-clipboard-copy";

import styles from "../styles/pages/home.module.scss";

const ShortenForm = () => {
  const [links, setLinks] = useState(() => {
    const localData =
      typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("links"));

    return localData ? localData : [];
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const clipboard = useClipboard();

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ link }) => {
    try {
      setLoading(true);

      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);

      const data = await res.json();

      if (data.ok) {
        setLinks((oldArray) => [
          ...oldArray,
          {
            original_link: data.result.original_link,
            full_short_link: data.result.full_short_link,
          },
        ]);

        setError(null);
      } else {
        setError(data);
      }

      setLoading(false);
    } catch {
      null;
    }
  };

  return (
    <>
      <section className={styles.form}>
        <div className={styles.form__container}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                id="link"
                type="text"
                placeholder="Shorten a link here..."
                className={errors.link || error ? styles.input_error : null}
                {...register("link", { required: "Please add a link" })}
              />

              {errors.link ? (
                <p className={styles.error_text}>{errors.link.message}</p>
              ) : (
                error && <p className={styles.error_text}>{error.error}</p>
              )}
            </div>

            <button className="primary_btn" type="submit" disabled={loading}>
              {loading ? "loading..." : "Shorten It!"}
            </button>
          </form>
        </div>
      </section>

      <div className={styles.shorten__container}>
        {links.length
          ? links.map(({ original_link, full_short_link }, index) => (
              <div className={styles.shorten} key={index}>
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
                    className="primary_btn"
                  >
                    Copy
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default ShortenForm;
