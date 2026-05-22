interface InputTextAreaProps {
    label : string ;
    name: string;
    register: any;
    errors?:string
}

export const InputTextArea : React.FC<InputTextAreaProps> = ({
    label,
    name,
    register,
    errors
}) => {
    return (
         <div className="flex flex-col gap-1 mb-4 flex-wrap">
                        <label className="pr-10 text-sm font-semibold " htmlFor={label}>{label}</label>
                        <textarea className="border text-sm rounded-xl w-full h-40 p-2"
                        type="text"
                        {...register(name)}
                        placeholder="Biodata Singkat"/>
                        {errors && <p className="text-red-600">{errors}</p>}
        </div>   
    )

}