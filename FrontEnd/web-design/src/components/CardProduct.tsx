// import { Children } from "react";

interface cardproductProps {
    title :string ;
    description : string;
    children?: React.ReactNode
}

const CardProduct : React.FC <cardproductProps> = ({title, description, children}) => {
    return (
       <div className="bg-gray-100 p-6 w-70  mb-20 rounded-xl shadow-sm relative  mx-auto border-r-8 border-[#7A2E3A] max-w-sm">
      
        <h3 className="text-xl font-bold text-[#7A2E3A] mb-3">
            {title}
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-6">
            {description}
        </p>
        {children}
            </div>
    );
};

export default CardProduct;