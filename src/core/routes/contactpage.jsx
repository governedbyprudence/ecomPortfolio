import { CustomNavbar } from "../components/navbar";

const ContactPage = () => {
    return(
        <div>
            <CustomNavbar/>
            <div className="h-screen w-full flex flex-col lg:flex-row justify-center items-center mt-[200px] lg:mt-[-50px]">
                <div className="w-full p-4 m-10">
                    <h1 className=" text-3xl md:text-4xl lg:text-6xl px-5 font-bold lg:font-normal">Contact Us</h1>
                    <p className="p-5">We're here to help and answer any questions you might have.<br/> Please feel free to reach out to us</p>
                    <p className="p-5">If you require assistance with an order, have questions about our products or services, or need help troubleshooting an issue, our dedicated customer support team is ready to assist you.</p>
                    <p className="p-5">Email: <span className="font-bold">support@yourwebsite.com</span></p>
                    <p className="p-5">Phone: <span className="font-bold">(123) 456-7890</span></p>
                </div>
                <div className=" w-full px-5 md:px-15 lg:px-20">
                    <div className=" rounded-xl lg:mr-100 mt-[10px] pl-[10px] pr-[30px] py-2 bg-gray-100 h-[480px] md:h-[600px] shadow-2xl">
                    <h1 className=" text-xl font-bold px-5 pt-5" >Send us your query !</h1>
                        <form className="flex flex-col">
                            <input type="text" placeholder="Full Name" className=" bg-blue-grey-100 mx-4 my-3 p-2 rounded-2xl" id="name"></input>
                            <input type="text" placeholder="Email" className=" bg-blue-grey-100 mx-4 my-3 p-2 rounded-2xl" id="email"></input>
                            <input type="email" placeholder="Company Name" className=" bg-blue-grey-100 mx-4 my-3 p-2 rounded-2xl" id="company"></input>
                            <input type="tel"placeholder="Phone Number" className=" bg-blue-grey-100 mx-4 my-3 p-2 rounded-2xl" id="phone"></input>
                            <input type="text" placeholder="How can we help you ?" className=" text-top bg-blue-grey-100 mx-4 my-3 p-2 h-[50px] md:h-[150px] rounded-2xl" id="query"></input>
                            <input type="submit" className="bg-black rounded-xl p-2 mx-[100px] my-5 text-white" placeholder="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;