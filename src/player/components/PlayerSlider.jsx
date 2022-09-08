import Slider from 'react-rangeslider'
import './css/PlayerSlider.css'

export const PlayerSlider = ({duration, actualTrackTime, handleChangeTrackTime}) => {
    return (
        <div className='w-full flex flex-col gap-y-5'>
            <Slider
                class='w-full'
                max={duration}
                value={actualTrackTime}
                orientation="horizontal"
                tooltip={false}
                onChange={handleChangeTrackTime}
            />
            <div className="w-full flex justify-between text-white text-opacity-60">
                <span>0:00</span>
                <span className='flex items-center px-2 gap-1 rounded-full border-1 border-white border-opacity-60 text-xs'>
                                <i className="fa-solid fa-compact-disc"></i>
                                Lossless
                            </span>
                <span>2:10</span>
            </div>
        </div>
    )
}
