import { useForm } from "react-hook-form";
import { useEffect } from "react";
import InputEmail from "../form/InputEmail";
import InputMessage from "../form/InputMessage";
import InputName from "../form/InputName";
import InputTel from "../form/InputTel";
import SubmitButton from "../form/SubmitButton";


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
            <SubmitButton 
                    isValid={isValid} 
                    isSubmitting={isSubmitting}
                    title='Надіслати'
                />
        </form>
    )
}

export default ContactForm