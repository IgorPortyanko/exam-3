import { useForm } from "react-hook-form";
import { useEffect } from "react";
import InputEmail from "../form/InputEmail";
import InputMessage from "../form/InputMessage";
import InputName from "../form/InputName";
import InputTel from "../form/InputTel";


const ContactForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        mode: "onChange",
    });

    useEffect(() => {
        const saved = localStorage.getItem("userData");
        if (saved) {
            reset(JSON.parse(saved));
        }
    }, [reset]);

    const onSubmit = async (data) => {
        console.log("📨 Надсилаємо дані:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md lg:w-md mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4"
        >
            <h2 className="text-2xl font-semibold text-center mb-4">
                Зв'язатися з нами
            </h2>

            <InputName register={register} errors={errors} />
            <InputEmail register={register} errors={errors} />
            <InputTel register={register} errors={errors} />
            <InputMessage register={register} errors={errors} />

            <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className={`w-full py-2 rounded-lg text-white text-lg transition
                    ${isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
            >
                {isSubmitting ? "Надсилаємо..." : "Надіслати"}
            </button>
        </form>
    )
}

export default ContactForm