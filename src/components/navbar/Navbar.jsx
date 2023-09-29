import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLink from "../authLinks/AuthLink";
import ThemeToggle from "../themeToggle/ThemeToggle";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.jpg" alt="Facebook" width={24} height={24} />
        <Image src="/instagram.jpg" alt="Instagram" width={24} height={24} />
        <Image src="/google.jpg" alt="Google" width={24} height={24} />
      </div>
      <div className={styles.logo}>Blogs</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/" className={styles.link}>
          Blog
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <Link href="/" className={styles.link}>
          Contact-us
        </Link>
        <AuthLink />
      </div>
    </div>
  );
}

export default Navbar;
