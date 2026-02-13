"use client";
import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary", // primary | secondary | outline | ghost | danger
  size = "md", // sm | md | lg
  full = false,
  glow = false,
  className = "",
  ...props
}) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    full ? styles.full : "",
    glow ? styles.glow : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
