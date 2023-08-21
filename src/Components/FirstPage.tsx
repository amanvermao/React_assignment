import { FormEvent, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './first.css'

const FirstPAge = () => {
  const [data, setData] = useState<{ name: string, phone: string, email: string }[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');



  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (name === '' || email === '' || phone === '') {
      alert('Please fill in all fields.');
    } else {
      window.location.href = 'https://secondpageforreactaast.netlify.app/';
      

    }
    let deta = {
      name,
      phone,
      email
    };

    setData([...data, deta]);
    setName('');
    setPhone('');
    setEmail('');


  };
  useEffect(() => {
    localStorage.setItem('Data', JSON.stringify(data))
  }, [data])




  return (
    <div className="form">
     
      <div className="form-contaner">
      <h1>Form</h1>
        <form className="f-list" onSubmit={handleSubmit}>
            <TextField
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Name"
          />

          <br/>
          
           <TextField
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Phone No:"
          />
          <br />
          
          
            <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Email"
          />

          <br />
         <Button  type="submit" variant="contained" color="success">
        Submit
      </Button>
        </form>
      </div>
    </div>
  );
};

export default FirstPAge;



