export default function FeaturesGrid() {
    return (
        <div className="grid text-white mt-[2rem] grid-cols-3 gap-4 px-[3rem] pb-[4rem]">
            <div className="border-2 border-solid border-[#242323] hover:border-[#6366f1]/30 transitions-colors duration-400 hover:shadow-[0_0_10px_#6366f1]/50 col-span-2 p-[40px] bg-[#0A0A0A] rounded-2xl group">
                <div className="text-right mb-[4rem] ">
                    <span className="material-symbols-outlined rounded-full border border-white/10 bg-white/5 p-3 text-xl group-hover:text-[#6366f1] transitions-colors duration-400">
                        lock
                    </span>
                </div>

                <h2 className="text-[1.5rem] tex-bold primary-font text-[2rem] font-bold leading-tight text-white tracking-normal">End-to-End Privacy</h2>

                <p className="mt-[1rem] text-[1.2rem] font-normal leading-[1.6] text-zinc-400 w-[65%]">Military-grade encryption ensures your intimate conversations and critical business meetings remain strictly confidential.</p>
            </div>
            <div className="border-2 border-solid border-[#242323] hover:border-[#6366f1]/30 transitions-colors duration-400 hover:shadow-[0_0_10px_#6366f1]/50 p-[40px] bg-[#0A0A0A] rounded-2xl group">
                <div className="text-right mb-[4rem] ">
                    <span className="material-symbols-outlined rounded-full border border-white/10 bg-white/5 p-3 text-xl group-hover:text-[#6366f1] transitions-colors duration-400">
                        hd
                    </span>
                </div>

                <h2 className="text-[1.5rem] tex-bold primary-font text-[2rem] font-bold leading-tight text-white tracking-normal">Cinematic HD</h2>

                <p className="mt-[1rem] text-[1.2rem] font-normal leading-[1.6] text-zinc-400 w-[65%]">Uncompressed 4K video streams utilizing adaptive bitrate technology for flawless clarity.</p>
            </div>
            <div className="col-span-3 border-2 border-solid border-[#242323] hover:border-[#6366f1]/30 transitions-colors duration-400 hover:shadow-[0_0_10px_#6366f1]/50 p-[40px] bg-[#0A0A0A] rounded-2xl group">
                <div className="text-right mb-[4rem] ">
                    <span className="material-symbols-outlined rounded-full border border-white/10 bg-white/5 p-3 text-xl group-hover:text-[#6366f1] transitions-colors duration-400">
                        globe
                    </span>
                </div>

                <h2 className="text-[1.5rem] tex-bold primary-font text-[2rem] font-bold leading-tight text-white tracking-normal">Global Low Latency</h2>

                <p className="mt-[1rem] text-[1.2rem] font-normal leading-[1.6] text-zinc-400 w-[65%]">Our proprietary edge network routing guarantees sub-50ms latency across continents, making remote conversations feel like you're in the same room.</p>
            </div>
        </div>
    )
}