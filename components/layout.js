import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <div>
        <h1>GhostPay</h1>
        <nav className="header-nav">
          <ul>
            <li>
              <Link className={router.pathname == "/" ? "active" : ""} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={router.pathname == "/signup" ? "active" : ""}
                href="/signup"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                className={router.pathname == "/signin" ? "active" : ""}
                href="/signin"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {children}
      <div className="site-footer">
        <p>Footer text, all rights reserved &copy;</p>
      </div>
    </>
  );
}
