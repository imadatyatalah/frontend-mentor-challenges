import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import Link from "./Link";

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

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
        reset();
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
          ? links.map((link, index) => <Link link={link} key={index} />)
          : null}
      </div>
    </>
  );
};

export default ShortenForm;
