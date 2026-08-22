import '../../style.css'

export default function Navbar() {
    return (
        <nav className='fixed top-0 left-0 w-full border-b border-[#1c1b1b]'>
            <div className="flex justify-between items-center px-[4rem] h-[5rem] bg-[#05050566] text-[#FFFFFF] backdrop-blur-xl">
                <div className="home-nav-container">
                    <h1 className="text-2xl primary-font font-extrabold tracking-tighter">Face Time</h1>
                </div>
                <div className="home-van-container font-medium">
                    <button className='p-2 mx-2'>Login</button>
                    <button className='py-[12px] px-[24px] text-white text-base semibold font-semibold mx-2 bg-[#3739B8] rounded-full '>Sign Up</button>
                </div>
            </div>
        </nav>
    )
}