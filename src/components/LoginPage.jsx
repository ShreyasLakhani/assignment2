import { useState } from "react";
import grp3 from '../assets/Group 3.png'

function LoginPage({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (email === 'admin@gmail.com' && password === 'admin') {
        onLogin();
      } else {
        alert('Invalid credentials');
      }
    };
  
    return (
      <div className="bg-[#000E09] w-full h-screen flex flex-col justify-center items-center">
        <div className="text-[#36A546CC] flex flex-col gap-5">
            <img src={grp3} alt="" />
            <h2>#We are Electric</h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mt-10">
        <input className="outline-none rounded-lg pl-3 py-1" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="outline-none rounded-lg pl-3 py-1" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button className="py-1 rounded-lg bg-gradient-to-b from-[#00FF2580] from-10% via-[#36A54680] via-50% to-[#000000] to-90% w-[20%] text-white font-light mt-10" onClick={handleLogin}>Login</button>
      </div>
    );
  }

  export default LoginPage