import { FormEvent, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (): ReactElement => {
  const ERRORS = {
    RESPONSE_FAILED: "Błąd logowania – pod żądanym adresem IP nie znajduje się centrala.",
    FETCH_FAILED: "Nie można wysłać formularza. Spróbuj ponownie później.",
    TOO_LONG_WAITING: "Logowanie trwa zbyt długo. Upewnij się, że adres IP jest poprawny.",
  };
  const [error, setError] = useState<null | string>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoader(true);
    const formInput = e.currentTarget.elements[0] as HTMLInputElement;
    setTimeout(() => setError(ERRORS.TOO_LONG_WAITING), 5000);
    fetch(`//${formInput.value}/api/settings/network`)
      .then((r) => {
        if (r.ok) {
          localStorage.setItem("clientIP", formInput.value as string);
          console.log("logged");
          navigate("/home");
        } else {
          setError(ERRORS.RESPONSE_FAILED);
        }
        setLoader(false);
      })
      .catch(() => {
        setError(ERRORS.RESPONSE_FAILED);
        setLoader(false);
      });
  };

  return (
    <div className="authorization">
      <form onSubmit={handleLogin} className="authorization__form">
        <input className="authorization__input" placeholder="Podaj adres IP centrali Fibaro" required />
        <button className="authorization__button">{loader ? "Czekaj" : "Zaloguj"}</button>
        {error ? <p className="authorization__error">{error}</p> : null}
      </form>
    </div>
  );
};

export default Login;
