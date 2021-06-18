
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue} from "./StateProvider"
import { useEffect } from 'react';
import {loadStripe} from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js"
import Orders from './Orders';
import Footer from './Footer';

const promise = loadStripe("pk_test_51IYvfNSFiKn6agAhozSScyMOxV1pn7aQVQnyqevIOQcJ1Zpu0lUcam4m3TDNFV0OHqdCIVCL4XxvJPkQD0j9ozxw00N2ZPUZnR");
function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app contents loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser){
        //the user just/was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    //BEM
    <Router>
    <div className="App">
    
      <Switch>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
          <Payment />
          </Elements>
        </Route>

        <Route path="/orders">
          <Header />
          <Orders />
        </Route>

        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>

      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
