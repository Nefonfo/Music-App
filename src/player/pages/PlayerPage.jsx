import {AnimatePresence, motion} from 'framer-motion'
import {BackgroundPage} from '../components'

export const PlayerPage = () => {

    return (
            <BackgroundPage
                initial={{ y: 1000, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ y: -1000, opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.60 }}
                backgroundImage={`${process.env.PUBLIC_URL}/images/albums_images/ye.jpg`}
                className='h-screen w-full flex flex-wrap flex-row justify-center items-stretch'
            >
                <div className="w-10/12 flex flex-wrap items-center justify-center">
                    <AnimatePresence>
                        <motion.img
                            key='playingImage'
                            className='w-full max-w-xl rounded-md'
                            src={`${process.env.PUBLIC_URL}/images/albums_images/ye.jpg`}
                            alt="Ye"/>
                    </AnimatePresence>
                </div>
                <div className='w-10/12 flex justify-center'>
                    <div className='grow md:max-w-xl flex flex-wrap flex-col'>
                        <div className='flex items-center gap-2 text-white text-lg'>
                            <h2>I Thought About Killing You</h2>
                            <svg className='w-5 h-5 text-white text-opacity-60' viewBox="0 0 18 18">
                                <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Rounded" transform="translate(-919.000000, -909.000000)">
                                        <g id="AV" transform="translate(100.000000, 852.000000)">
                                            <g id="-Round-/-AV-/-explicit" transform="translate(816.000000, 54.000000)">
                                                <g>
                                                    <rect id="Rectangle-Copy-22" x="0" y="0" width="24" height="24"></rect>
                                                    <path d="M19,3 L5,3 C3.9,3 3,3.9 3,5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 Z M14,9 L11,9 L11,11 L14,11 C14.55,11 15,11.45 15,12 C15,12.55 14.55,13 14,13 L11,13 L11,15 L14,15 C14.55,15 15,15.45 15,16 C15,16.55 14.55,17 14,17 L10,17 C9.45,17 9,16.55 9,16 L9,8 C9,7.45 9.45,7 10,7 L14,7 C14.55,7 15,7.45 15,8 C15,8.55 14.55,9 14,9 Z" id="Icon-Color" fill="currentColor"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <span className='text-white text-opacity-50 text-lg'>Kanye West</span>
                    </div>
                    <div className='h-7 w-7 flex flex-wrap items-center justify-center bg-white bg-opacity-30 text-white rounded-full'>
                        <i className='fill-current fa-solid fa-ellipsis-vertical fa-md'></i>
                    </div>
                </div>
            </BackgroundPage>


    )
}
