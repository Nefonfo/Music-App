import {usePlayerStore} from '../../hooks/store/usePlayerStore'

export const PlayerHeading = () => {

    const { playing } = usePlayerStore()
    const { song} = playing
    const {name, author, explicit} = song

    return (
        <div className="w-full flex gap-x-5">
            <div className='grow flex flex-col overflow-hidden whitespace-nowrap'>
                <h1 className='flex items-center gap-3 text-xl font-medium text-white'>
                    {name}
                    {explicit && <i className="fa-solid fa-exclamation-circle fa-lg"></i>}
                </h1>

                <span className='text-white text-opacity-60 text-xl'>{author}</span>
            </div>
            <div className='shrink-0 h-7 w-7 flex flex-wrap items-center justify-center bg-white bg-opacity-30 text-white rounded-full'>
                <i className='fill-current fa-solid fa-ellipsis-vertical fa-md'></i>
            </div>
        </div>
    )
}
