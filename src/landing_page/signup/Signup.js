import React from 'react'

const Signup = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='Col-6'  >
                              <form className='m-5' style={{width:"50%",margin:"auto"}}>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">User Name</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      <div id="emailHelp" class="form-text"> </div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
            </div>
        </div>
    </div>
  )
}

export default Signup