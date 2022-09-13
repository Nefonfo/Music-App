import {useNavigate} from 'react-router-dom'
import {usePlayerStore} from '../../hooks'
import {FullToggleImage, LyricRow, PlayerHeading} from '../components'
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'

export const LyricsPage = () => {

    const navigate = useNavigate()
    const {play, playingNow} = usePlayerStore()
    const { name , author, explicit, album } = playingNow
    const { image } = album

    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        draggable: true,
        className: 'cursor-pointer',
        slidesToScroll: 1,
        slidesToShow: 3,
        vertical: true,
        verticalSwiping: true,
    }

    return (
        <>
            <div className='w-full flex flex-row gap-y-5 gap-x-2'>
                <FullToggleImage
                    small={true}
                    play={play}
                    image={image}
                    handleOnSmall={() => navigate('/player')}
                />
                <PlayerHeading
                    small={true}
                    author={author}
                    name={name}
                    explicit={explicit}
                />
            </div>

                <Slider
                    {...settings}
                >
                    <LyricRow text="Now the tears dry and the pain takes over" active />
                    <LyricRow text="Let's talk this payola (payola)" />
                    <LyricRow text="You killed God's baby when it wasn't his will" />
                    <LyricRow text="And blood spill, we can't talk this shit over (this shit over)" />
                    <LyricRow text="The Lord is my shepherd, I am not sheep" />
                </Slider>

        </>
    )
}
