import { useForm } from "react-hook-form";
import InputName from "../form/InputName";
import InputTel from "../form/InputTel";
import InputEmail from "../form/InputEmail";


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
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4"
        >
            <h2 className="text-2xl font-semibold text-center mb-4">
                Реєстрація
            </h2>

            <InputName register={register} errors={errors}/>
            <InputEmail register={register} errors={errors}/>
            <InputTel register={register} errors={errors}/>
            
            <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className={`w-full py-2 rounded-lg text-white text-lg cursor-pointer transition 
                    ${isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
            >
                {isSubmitting ? "Реєструємо..." : "Зареєструватися"}
            </button>
        </form>
    )
}

export default AuthPage