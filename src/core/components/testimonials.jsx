
const TestimonialCard = (props)=>{
    const feedback=props.feedback;
    const author = props.author;
    return (
        <div className=" bg-gray-200 rounded-md max-h-[350px] m-10 p-10 shadow-md" >
            <h1 className="py-4 min-h-[250px] font-thin">{feedback}</h1>
            <h6 className="text-sm">{author}</h6>
        </div>
    );
}

function Testimonials (){
    return (
        <div className="min-h-[600px] px-20 md:px-40 py-10">
            <h1 className="text-2xl my-4 font-bold">Testimonials</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard author="TechMax Solutions" feedback="Ozswell Industries consistently delivers the most innovative electronics we’ve ever encountered. They’re an absolute must for any tech-savvy shopper!"/>
            <TestimonialCard author="Varsity Inc" feedback="Their equipment have taken our company to new heights. We can’t imagine our lives before Ozswell Industries!"/>
            <TestimonialCard author="BorderSight Pvt ltd" feedback="Ozswell Industries stands out as a true leader in providing top-notch equipment solutions for a variety of industries. Their commitment to quality, innovation, and customer satisfaction is truly commendable. "/>
       
            </div>
        </div>
    );
}

export default Testimonials;