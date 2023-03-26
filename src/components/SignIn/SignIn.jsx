
import "./signin.scss"
import {useForm} from "react-hook-form"
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../features/auth/authActions";

/**
 * Display the signin form
 * @returns { JSX } react component
 */
const SignIn = () => {
    // state selector
    const {error} = useSelector(
        (state) => state.auth
    )
    const dispatch = useDispatch();
    // useForm 
    const {register, handleSubmit} = useForm();
    
    const submitForm = (data) => {
        // dispatch action to login the user
        dispatch(loginUser(data));
    }
   
    return (
       
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form 
                    onSubmit={handleSubmit(submitForm)}
                >
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email"
                            {...register("email")}
                            required
                            
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            {...register("password")}
                            required
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">
                            Remember me
                        </label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                    {error && (
                        <p className="error">We can't sign in to your account!</p>
                    )}
                </form>
        </section>
    </main>
    )

 
}
 
export default SignIn;
