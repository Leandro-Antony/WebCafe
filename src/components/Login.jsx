import styles from "./Form.module.css";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeClosed } from "lucide-react";

export function Login({ onSwitchMode }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [pass, setPass] = useState("password");

    function togglePassword() {
        if (pass === "password") setPass("text");
        if (pass === "text") setPass("password");
    }

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
                <div className={styles.password}>
                    <input type={pass} {...register("password", {required: "Campo obrigatório!", minLength: {value: 6, message: "Mínimo de 6 caracteres."}})} placeholder="EuAmoCafé123" />
                    <button type="button" className={styles.toggleBtn} onClick={() => togglePassword()}>{pass === "password" ? <Eye /> : <EyeClosed />}</button>
                </div>
                {errors.password && <p>{errors.password.message}</p>}
            </section>


            <button type="submit" className={styles.submitBtn}>Enviar</button>
            
            <p>Não tem conta?<button type="button" className={styles.switch} onClick={onSwitchMode}>Crie a sua</button></p>
        </form>
    )
}