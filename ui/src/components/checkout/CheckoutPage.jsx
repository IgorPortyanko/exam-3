import { useForm, Controller  } from "react-hook-form";
import { useEffect } from "react";
import InputName from "../form/InputName";
import InputTel from "../form/InputTel";
import InputEmail from "../form/InputEmail";
import SubmitButton from "../form/SubmitButton";
import StreetAutocomplete from "../form/StreetAutocomlete";
import InputNumber from "../form/InputNumber";
import PaymentMethod from "../form/PaymentMethod";
import InputComment from "../form/InputComment";

const CheckoutPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        control,
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

    const onSubmit = (data) => {
        console.log("Надсилаємо дані:", data);
        localStorage.setItem("userData", JSON.stringify(data));
        reset();
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center mb-4 md:text-3xl">Оформлення замовлення</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4"
            >
                <InputName register={register} errors={errors} />
                <InputEmail register={register} errors={errors} />
                <InputTel register={register} errors={errors} />
                <Controller
                    name="street"
                    control={control}
                    rules={{
                        required: "Введіть вулицю",
                    }}
                    render={({ field, fieldState }) => (
                        <div>
                            <StreetAutocomplete
                                value={field.value || ""}
                                onChange={(val) => field.onChange(val)}
                            />
                            {fieldState.error && (
                                <p className="text-red-500 text-sm mt-1">
                                    {fieldState.error.message}
                                </p>
                            )}
                        </div>
                    )}
                />
                <InputNumber 
                    register={register} 
                    errors={errors} 
                    label='Номер будинку' 
                    nameField='building'
                />
                <InputNumber 
                    register={register} 
                    errors={errors} 
                    label='Номер квартири' 
                    nameField='apartment'
                />
                <PaymentMethod 
                    register={register} 
                    errors={errors}
                />
                <InputComment 
                    register={register} 
                    errors={errors}
                />
                <SubmitButton 
                    isValid={isValid} 
                    isSubmitting={isSubmitting}
                    title='Підтвердити замовлення'
                />
            </form>
        </div>
    )
}

export default CheckoutPage