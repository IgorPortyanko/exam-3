import { useForm } from "react-hook-form";
import InputName from "../form/InputName";
import InputTel from "../form/InputTel";
import InputEmail from "../form/InputEmail";
import SubmitButton from "../form/SubmitButton";


const AuthPage = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        console.log("📨 Надсилаємо дані:", data);
        localStorage.setItem("userData", JSON.stringify(data));
        reset();
    };

    return (
        <div className="pt-5 md:pt-10">
            <h2 className="text-2xl font-semibold text-center mb-4 md:text-3xl">
                Реєстрація
            </h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4"
            >
                <InputName register={register} errors={errors} />
                <InputEmail register={register} errors={errors} />
                <InputTel register={register} errors={errors} />
                <SubmitButton 
                    isValid={isValid} 
                    isSubmitting={isSubmitting}
                    title='Зареєструватися'
                />
            </form>
        </div>

    )
}

export default AuthPage