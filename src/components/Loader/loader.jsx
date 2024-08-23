import {DNA} from "react-loader-spinner"


const CustomDNALoader=({height,width,visible})=>{
    return(
            <DNA
            visible={visible}
            height={height}
            width={width}
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            />
    )
}
export default CustomDNALoader;