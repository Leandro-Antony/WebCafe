import styles from "./SignUp.module.css";

import { useForm } from "react-hook-form";

export function SignUp() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("firstName", {required: "Campo obrigatório!" })} placeholder="May" />
            {errors.firstName && <p>{errors.firstName.message}</p>}
            
            <input type="text" {...register("lastName", {required: "Campo obrigatório!" })} placeholder="Souza" />
            {errors.lastName && <p>{errors.lastName.message}</p>}
            
            <input type="email" {...register("email", {required: "Campo obrigatório!" })} placeholder="maylove@gmail.com" />
            {errors.email && <p>{errors.email.message}</p>}
            
            <input type="password" {...register("password", {required: "Campo obrigatório!", minLength: {value: 6, message: "Mínimo de 6 caracteres."}})} placeholder="EuAmoCafé123" />
            {errors.password && <p>{errors.password.message}</p>}

            <input type="password" {...register("confirmPassword", {required: "Campo obrigatório!", minLength: {value: 6, message: "Mínimo de 6 caracteres."}, validate: (value) => value === watch("password") || "As senhas não coincidem" })} placeholder="EuAmoCafé123" />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            
            <input type="tel" {...register("phone", {required: "Campo obrigatório!" })} placeholder="(xx)xxxxx-xxxx" />
            {errors.phone && <p>{errors.phone.message}</p>}


            <button type="submit">Enviar</button>
        </form>
    )
}