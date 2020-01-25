import React from 'react';

import FormInput from '../form-input/form-input.component.jsx'
import { signInWithGoogle } from '../../firebase/firebase.utils.js'
import CustomButton from '../custom-button/custom-button.component.jsx'

import './sign-in.styles.scss'

class SigIn extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        email: '',
        password: ''
    }
    }


    handleSubmit = event => {
        event.preventDefault();
        this.state({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.state({[name]: value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sig in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email'  handleChange={this.handleChange} value={this.state.email} label="email" required />
                    <FormInput name='password' type='password' label='password' handleChange={this.handleChange} value={this.state.email} required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {' '}
                        Sign In sith Google {' '}
                        </CustomButton>
                    </div>

                </form>

            </div>
        );
    }
}

export default SigIn;