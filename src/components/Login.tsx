import { FormEvent, ReactElement, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Login = (): ReactElement => {
  const ERRORS = {
    RESPONSE_FAILED: "Błąd logowania – pod żądanym adresem IP nie znajduje się centrala.",
    FETCH_FAILED: "Nie można wysłać formularza. Spróbuj ponownie później.",
    TOO_LONG_WAITING: "Jeśli logowanie trwa zbyt długo, sprawdź czy adres IP jest poprawny.",
  };
  const [error, setError] = useState<null | string>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoader(true);
    const formInput = e.currentTarget.elements[0] as HTMLInputElement;
    const tooLong = setTimeout(() => setError(ERRORS.TOO_LONG_WAITING), 5000);

    //initial query to fibaro homecenter device
    fetch(`//${formInput.value}/api/settings/network`)
      .then((r) => {
        if (r.ok) {
          localStorage.setItem("clientIP", formInput.value as string);
          navigate("/home");
        } else {
          setError(ERRORS.RESPONSE_FAILED);
        }
      })
      .catch(() => {
        setError(ERRORS.RESPONSE_FAILED);
      })
      .finally(() => {
        setLoader(false);
        clearTimeout(tooLong);
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
