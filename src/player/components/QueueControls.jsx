import {useState} from 'react'

export const QueueControls = () => {

    const [random, setRandom] = useState(true)
    const [repeat, setRepeat] = useState(0)
    const [infinite, setInfinite] = useState(false)

    return (
        <div className="w-full my-2 flex items-center">
            <div className="grow flex flex-col text-white">
                <h3 className="text-base font-bold">Next Songs</h3>
                <h5 className="text-sm opacity-60">Of My Favourites</h5>
            </div>
            <div className="flex flex-row gap-x-2">
                <button
                    className={`${random ? 'bg-white bg-opacity-60' : 'text-white text-opacity-60'} px-1.5 rounded-md transition-all ease-in-out duration-300`}
                    onClick={() => setRandom(!random)}
                >
                    <i className="fa-solid fa-shuffle"></i>
                </button>
                <button
                    className={`${repeat > 0 ? 'bg-white bg-opacity-60' : 'text-white text-opacity-60'} px-1.5 rounded-md transition-all ease-in-out duration-300`}
                    onClick={() => setRepeat((prevState) => prevState < 2 ? prevState + 1 : 0)}
                >
                    <i className={`fa-solid fa-repeat`}></i>
                    {repeat === 2 && <span className="text-xs">1</span>}
                </button>

                <button
                    className={`${infinite ? 'bg-white bg-opacity-60' : 'text-white text-opacity-60'} px-1.5 rounded-md transition-all ease-in-out duration-300`}
                    onClick={() => setInfinite(!infinite)}
                >
                    <i className="fa-solid fa-infinity"></i>
                </button>
            </div>
        </div>
    )
}