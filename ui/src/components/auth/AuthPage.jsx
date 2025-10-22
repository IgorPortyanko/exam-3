import { useForm } from "react-hook-form";
import { Link } from 'react-router'
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logout } from "../../store/usersSlise";
import InputTel from "../form/InputTel";
import SubmitButton from "../form/SubmitButton";
import InputPassword from "../form/InputPassword";
import { useState } from "react";

const AuthPage = () => {

    const { isLoading, error, currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch()
    const [customError, setCustomError] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = async (data) => {
        try {
            const user = await dispatch(loginUser(data)).unwrap()
            alert(`Вітаємо, ${user.name}!`);
            reset();
        } catch (error) {
            setCustomError(error || "Невірний телефон або пароль");
        }
    };

    const logaut = () => {
        dispatch(logout())
    }

    return (
        <div className="pt-5 md:pt-10 mb-5">
            <h2 className="text-2xl font-semibold text-center mb-4 md:text-3xl">
                Увійти
            </h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4 mb-5"
            >
                <InputTel register={register} errors={errors} />
                <InputPassword register={register} errors={errors} />
                <SubmitButton
                    isValid={isValid}
                    isSubmitting={isSubmitting}
                    title='Увійти'
                />
            </form>
            <div className="flex justify-center gap-4">
                <Link to='/register'><button className="w-[150px] h-[40px] rounded-2xl border">Зареєструватися</button></Link>
                <button 
                    className="w-[150px] h-[40px] rounded-2xl border"
                    onClick={logaut}
                >
                    Вийти
                </button>
            </div>

        </div>

    )
}

export default AuthPage