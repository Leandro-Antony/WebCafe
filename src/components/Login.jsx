import styles from "./Form.module.css";

import { useState } from "react";
import { useForm } from "react-hook-form";

export function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [pass, setPass] = useState("password");

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <section className={styles.field}>
                <label>Email: </label>
                <input type="email" {...register("email", {required: "Campo obrigatório!" })} placeholder="maylove@gmail.com" />
                {errors.email && <p>{errors.email.message}</p>}
            </section>
            <section className={styles.field}>
                <label>Senha:</label>
                <input type={pass} {...register("password", {required: "Campo obrigatório!", minLength: {value: 6, message: "Mínimo de 6 caracteres."}})} placeholder="EuAmoCafé123" />
                {errors.password && <p>{errors.password.message}</p>}
            </section>


            <button type="submit" className={styles.submitBtn}>Enviar</button>
        </form>
    )
}