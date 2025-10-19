

const SubmitButton = ({isValid, isSubmitting, title}) => {

    return (
        <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`w-full py-2 rounded-lg text-white text-lg cursor-pointer transition 
                    ${isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
        >
            {title}
        </button>
    )
}

export default SubmitButton