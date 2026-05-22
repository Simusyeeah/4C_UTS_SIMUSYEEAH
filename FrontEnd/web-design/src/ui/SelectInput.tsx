interface SelectInputProps {
    label : string;
    name : string;
    register: any;
    options : {label : string; value: string}[];
    errors? : string;
}

export const SelectInput : React.FC<SelectInputProps> = ({
    label,
    name,
    register,
    errors,
    options
}) => {
    return (
        <div className="flex flex-col gap-1">
         <label>{label}</label>

         <select {...register(name)} className="border px-3 py-2 rounded">
         <option value="">Pilih...</option>
         {options.map((opt)=> (
            <option key = {opt.value} value = {opt.value}>
                {opt.label}
            </option>
         ))}
         </select>
         {errors && (<p className="text-red-600">{errors}</p>)}
        </div>
    );
};
