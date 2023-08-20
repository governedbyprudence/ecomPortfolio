const LoginPage = () => {
    return(
        <div className="h-screen w-screen flex flex-col items-center bg-gray-200">
            <div className="h-[450px] w-[350px] md:h-[500px] md:w-[400px] shadow-xl  bg-white rounded-3xl mt-20 m-5 p-10">
            <h2 className=" text-lg font-bold text-center m-4">Ozswell Industries</h2>
            <h1 className=" text-2xl font-bold text-center">Admin Login</h1>
            <form className="flex flex-col justify-cente p-5">
            <input type="email" placeholder="Enter Email" className="my-5 h-10 p-2 rounded-md bg-gray-100" id="adminemail"/>
            <input type="password" placeholder="Enter Password" className="my-5 h-10 p-2 rounded-md bg-gray-100" id="adminpassword"/>
            <input type="submit" className="bg-black rounded-xl p-2 mx-[50px] my-5 text-white" placeholder="Submit"/>
            </form>
            </div>
        </div>
    )
}

export default LoginPage;