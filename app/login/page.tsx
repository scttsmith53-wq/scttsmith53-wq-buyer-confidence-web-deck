export default function LoginPage({
  searchParams
}: {
  searchParams?: { error?: string };
}) {
  const hasError = searchParams?.error === "1";

  return (
    <main className="loginPage">
      <section className="loginCard">
        <p className="eyebrow">Private Presenter Deck</p>
        <h1>Buyer Confidence Webinar</h1>
        <p className="muted">Log in to open the slide-by-slide web presentation.</p>

        <form action="/api/login" method="POST" className="loginForm">
          <label>
            Username
            <input name="username" autoComplete="username" required />
          </label>

          <label>
            Password
            <input name="password" type="password" autoComplete="current-password" required />
          </label>

          <button type="submit">Open Deck</button>

          {hasError && <p className="errorText">Invalid username or password.</p>}
        </form>
      </section>
    </main>
  );
}
