import { FormInput } from "./styles";


interface InputProps {
    name: string;
    placeholder: string;
    type: string;
    error?: string;
}

export const InputForm = ({ name, placeholder, type, error }: InputProps) => {

    return (
        <div>
            <FormInput
                type={type}
                placeholder={placeholder}
                id={name}
            />
        </div>
    )
}
