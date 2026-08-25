export default function Hero() {
    return (
        <>
            <div className="p-[170px]" >
                <div className="mt-[1rem] text-[#FFFFFF] primary-font text-[4rem] font-extrabold tracking-tighter text-center leading-tight">
                    <h1>Face Time: The</h1>
                    <h1>Art of</h1>
                    <h1>Connection</h1>
                </div>
                <p className="text-[#A1A1AA] mt-[32px] text-center text-[1.5rem]">Experience crystal-clear, secure, and immersive video communication <br /> designed for those who demand technical perfection and elegant simplicity.</p>
                
                <button className='py-[20px] px-[30px] text-white text-base semibold font-semibold mx-2 bg-[#3739B8] rounded-full block mx-auto mt-[4rem] hover:bg-[#BCBFE3] hover:text-[#0e0e0e] transitions-colors duration-300 cursor-pointer'>Get Started</button>
            </div>
        </>
    )
}