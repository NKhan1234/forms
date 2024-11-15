import { Link } from "react-router-dom"

function PassReset(){
    return <div>
         <div className="register">
        <div className="upper">
            <h1>🔤YouForm</h1>
            <div className="new-acount">
                <h3 style={{textAlign:'center'}}>Reset Password</h3>
            </div>
        </div>

        <div className="main">
            <form>
                <input type="email" placeholder="Email Address" />
                <button className="btn7 btn9">Send password reset link</button>           
            </form>
            <Link to='/login' style={{textDecoration:'none', fontSize:'13px'}}><p className="reset-p"><i className="ri-arrow-left-line"></i> back to login</p></Link>
        </div>
       </div>
    </div>
}

export default PassReset