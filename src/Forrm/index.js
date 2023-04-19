import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "../Result";
import {
  Field,
  Legend,
  Label,
  Options,
  Button,
  Paragraph,
  Effect,
} from "./styled";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };
  return (
    <Field onSubmit={onFormSubmit}>
      <fieldset>
        <Legend className="form__header">Kalkulator</Legend>
        <p>
          <label>
            <Label> Podaj kwotę w PLN </Label>
            <input
              type="number"
              name="PLN"
              min="1"
              placeholder="Wpisz kwotę w zł"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              required
            />
          </label>
        </p>
        <p>
          <label>
            <Label>Wybierz walutę</Label>
            <Options
              name="Curency"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))}
            </Options>
          </label>
        </p>
      </fieldset>
      <Paragraph>
        <Button>Oblicz</Button>
      </Paragraph>
      <Effect className="form__result">
        Kwota po Przeliczeniu :
        <Result result={result} />{" "}
      </Effect>
    </Field>
  );
};

export default Form;
