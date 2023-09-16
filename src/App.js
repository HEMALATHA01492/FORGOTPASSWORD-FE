import { BrowserRouter, Route, Routes} from "react-router-dom";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

import ForgotPassword from "./components/ForgotPassword";
import CheckEmail from "./components/CheckEmail";

import PasswordReset from "./components/PasswordReset";
import Password from "./components/Password";

function App() {

  return (
      <BrowserRouter>
          <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/home"   element={<Home />} />

                <Route path="/forgot" element={<ForgotPassword /> }/>
                <Route path="/mail" element={<CheckEmail />} />

                <Route path="/users/reset/:id" element={<PasswordReset />}/>
                <Route path="/password" element={<Password />} />
          </Routes>
      </BrowserRouter>
      
  );
}

export default App;
