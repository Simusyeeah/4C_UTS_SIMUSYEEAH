interface imageProps {
    imagerUrl : string;
}

const Image : React.FC <imageProps> = ({imagerUrl}) => {
    return <img src = {imagerUrl} />;
};

export default Image;