import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import { Form } from './Forrm';
import { useState } from 'react';
import { currencies } from './currencies';
import {Clock} from './Clock';

function App() {

  const [result, setResult]= useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({short}) => short ===currency).rate;

    setResult({
     baseAmount: +amount,
     targetAmount: amount / rate,
     currency,
    });
  }
  return (
       <Container>
        <Clock />
         <Header />
          <Form 
           result={result}
           calculateResult={calculateResult} />
          <Footer />
       </Container>
  );
};
  
export default App;
