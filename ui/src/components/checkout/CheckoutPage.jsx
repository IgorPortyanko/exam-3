import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cartSlice";
import InputName from "../form/InputName";
import InputTel from "../form/InputTel";
import InputEmail from "../form/InputEmail";
import SubmitButton from "../form/SubmitButton";
import StreetAutocomplete from "../form/StreetAutocomlete";
import InputNumber from "../form/InputNumber";
import PaymentMethod from "../form/PaymentMethod";
import InputComment from "../form/InputComment";
import SelectDeliveryMethod from "../form/SelectDeliveryMethod";
import CartSummary from "./CartSummary";

const CheckoutPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    } = useForm({
        mode: "onChange",
    });

    const [isDelivery, setIsDelivery] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const saved = localStorage.getItem("userData");
        if (saved) {
            reset(JSON.parse(saved));
        }
    }, [reset]);

    useEffect(() => {
        if (isSubmitSuccessful) {
            dispatch(clearCart());
        }
    }, [isSubmitSuccessful, dispatch]);

    const onSubmit = (data) => {
        console.log("Надсилаємо дані:", data);
        reset();
    };

    return (
        <div className="p-4 max-w-[1200px] mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-4 md:text-3xl md:mb-9">Оформлення замовлення</h2>
            <div className="md:flex ">
                {!isSubmitSuccessful
                   ? <CartSummary />
                   : <p className="text-center my-5 text-2xl text-green-700 px-4">Ваш заказ прийнято, дякуємо, що обираєте нас</p>
                }
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="min-w-xs  max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4"
                >
                    <InputName register={register} errors={errors} />
                    <InputEmail register={register} errors={errors} />
                    <InputTel register={register} errors={errors} />
                    <SelectDeliveryMethod register={register} errors={errors} setMethod={setIsDelivery} />

                    {isDelivery &&
                        <div>
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
                        </div>
                    }
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

            
        </div>
    )
}

export default CheckoutPage