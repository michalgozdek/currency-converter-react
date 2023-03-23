import { useState } from "react"
import { currencies } from "../currencies"
import "./style.css"
import {Result} from "../Result";

export const Form = ({ calculateResult, result }) =>{
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency , amount);
    }
   return(
    <form className="form" onSubmit={onFormSubmit}>
    <fieldset>
        <legend className="form__header">Kalkulator</legend>
        <p>
            <label><span className="form__label"> Podaj kwotę w PLN </span>
            <input
             type="number" 
             name="PLN"
             min= "1"
             placeholder="Wpisz kwotę w zł"
             value={ amount }
             onChange = {({target}) => setAmount(target.value)}
             required 
             /></label>
        </p>
        <p>
            <label>
                <span className="form__label">Wybierz walutę</span>
                <select 
                className="form__field"
                 name="Curency"
                 value={currency}
                 onChange = {({ target }) => setCurrency (target.value)}>
                    {currencies.map((currency) => (
                        <option
                        key={currency.short}
                        value={currency.short}>
                            {currency.name}
                        </option>
                    ))}
                </select>

            </label>
        </p>
    </fieldset>
    <p className="buttons">
       <button className="buttons__calculateInside">Oblicz</button>   
    </p>
    <p className="form__result">Kwota po Przeliczeniu :
     <Result result={result} /> </p>
</form>
   );

};

export default Form;