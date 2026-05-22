import { useState } from "react";

interface InputPasswordProps {
    label : string;
    name : string;
    error?: string;
    register : any ;
}

export const InputPassword : React.FC<InputPasswordProps> = ({
    label,
    name,
    error,
    register,
}) => {
    const [show, setShow] = useState<boolean>(false);
    return (
                    <div className="flex flex-col gap-1 mb-4">
                        <label className="pr-10 text-sm font-semibold " htmlFor={label}>{label}</label>
                        <div className="relative">
                            <input className="border rounded-xl text-sm p-2 w-full"
                            type={show?  "text" : "password"}
                            {...register(name)}
                            placeholder={label}/>

                            <button className="absolute right-2 top-2 text-sm" type="button" onClick={() => setShow (!show)}>
                                {show? "Hide" : "Show"}
                            </button>
                        </div>
                            {error && <p className="text-red-600">{error}</p>}
                        
                    </div>
    )
}