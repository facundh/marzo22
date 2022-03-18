import React from "react";

const AltaPersonal = () => {
  return (
    <form className="w-50 mx-auto ">
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">First Name</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="textHelp"/>
      
    </div>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Last Name</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="textHelp"/>
      
    </div>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3">
      <label for="disabledSelect" class="form-label">Disabled select menu</label>
      <select id="disabledSelect" class="form-select">
        <option>Disabled select</option>
      </select>
    </div>
    <button type="submit" className="btn btn-primary my-3 w-100">Submit</button>
  </form>
  );
};

export default AltaPersonal;
