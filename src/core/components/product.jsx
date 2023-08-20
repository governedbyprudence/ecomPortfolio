export default function Product(props) {
    const product = props.product
    return (
        <div className="flex flex-col h-[400px] lg-h[500px] justify-center items-center m-10">
            <div className="h-full bg-black m-5 w-[70%]">Image</div>
            <h2 className="text-xl font-bold mt-2">{product.name}</h2>
            <h4 className="mt-2">{product.description}</h4>
            <h1 className="my-2 text-xl font-bold">₹ {product.price}</h1>
        </div>
    );
}