import { useState } from "react";
import { useMutation } from '@apollo/client';
import { CREATE_USER } from "../utils/mutations";
import Auth from '../utils/auth';


function SignUp() {

    const [formState, setFormState] = useState({
        name: '',
        username: '',
        password: ''
    });

    const [createUser] = useMutation(CREATE_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { data } = await createUser({
            variables: {
                ...formState
            }
        });

        // save token to localStorage


        Auth.login(data.createUser.token)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name: <br />
                        <input type="text" name="name" value={formState.name} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Username: <br />
                        <input type="text" name="username" value={formState.username} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        password: <br />
                        <input type="text" name="password" value={formState.password} onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <button type="submit">Sign up</button>
                </div>
            </form>
        </>
    )
}

export default SignUp;