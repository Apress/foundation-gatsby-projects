import React, { useState } from "react"
import styles from "./login.module.css"
import axios from "axios"

const LoginForm = ({ storeToken, storeName }) => {
    const [name, setName] = useState("")

    const handleSubmit = async event => {
        event.preventDefault()
        const result = await axios({
            method: "POST",
            url: "https://tan-cat-7689.twil.io/create-token",
            data: {
                identity: name,
            },
        })
        console.log(result);
        const jwt = result.data;
        storeToken(jwt);
        storeName(name);
    }

    return (
        <section className={styles.contact}>
            <h3>Login</h3>
            <div className={styles.center}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Display Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        className={styles.formControl}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <button type="submit" className={styles.submit}>Join Video Chat</button>
            </form>
            </div>
        </section>
    )
}

export default LoginForm