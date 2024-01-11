import { Metadata } from "next";

type Props = { params: { productId: string } };

export const getMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await  new Promise(resolve =>{setTimeout(()=>{
        resolve(`iphone ${params.productId}`)
    },100)})
    return {
        title: `Product ${title}`,
    };
};

const ProductDetails = ({ params }: Props) => {
    return (
        <>
            <h2>{`Product details ${params.productId}`}</h2>
        </>
    );
};

export default ProductDetails;
