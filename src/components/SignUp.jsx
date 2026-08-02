import styles from "./Form.module.css";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeClosed } from "lucide-react";

export function SignUp({ onSwitchMode }) {
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
                <label>Nome:</label>
                <input type="text" {...register("firstName", {required: "Campo obrigatório!" })} placeholder="May" />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </section>
            
            <section className={styles.field}>
                <label>Sobrenome:</label>
                <input type="text" {...register("lastName", {required: "Campo obrigatório!" })} placeholder="Souza" />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </section>
            
            <section className={styles.field}>
                <label>Email:</label>
                <input type="email" {...register("email", {required: "Campo obrigatório!" })} placeholder="maylove@gmail.com" />
                {errors.email && <p>{errors.email.message}</p>}
            </section>
            
            <div className={styles.passwordContainer}>
                <aside>
                    <section className={styles.field}>
                        <label>Senha:</label>
                        <input type={pass} {...register("password", {required: "Campo obrigatório!", minLength: {value: 6, message: "Mínimo de 6 caracteres."}})} placeholder="EuAmoCafé123" />
                        {errors.password && <p>{errors.password.message}</p>}
                    </section>

                    <section className={styles.field}>
                        <label>Confirmar senha:</label>
                        <input type={pass} {...register("confirmPassword", {required: "Campo obrigatório!", minLength: {value: 6, message: "Mínimo de 6 caracteres."}, validate: (value) => value === watch("password") || "As senhas não coincidem" })} placeholder="EuAmoCafé123" />
                        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                    </section>
                </aside>

                <button type="button" onClick={togglePassword} className={styles.toggleBtn}>{pass === "password" ? <Eye /> : <EyeClosed />}</button>
            
            </div>
            
            <section className={styles.field}>
                <label>Celular:</label>
                <input type="tel" {...register("phone", {required: "Campo obrigatório!" })} placeholder="(xx)xxxxx-xxxx" />
                {errors.phone && <p>{errors.phone.message}</p>}
            </section>

            <button type="submit" className={styles.submitBtn}>Enviar</button>

            <p>Já tenho conta! <button className={styles.switch} onClick={onSwitchMode}>Fazer login</button></p>
        </form>
    )
}