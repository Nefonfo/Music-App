import {HeaderTitle} from './HeaderTitle'

export const Header = ({title}) => {
    return (
        <>
            <div className="w-full flex flex-wrap py-3 mx-3">
                <div className="w-full flex justify-end gap-7 px-2 text-cupertino-pink-400">
                    <h1 className='grow text-cupertino-label' style={{opacity: 0}}>Listen</h1>
                    <div><i className="fa-brands fa-chromecast fa-xl"></i></div>
                    <div><i className="fa-solid fa-ellipsis-vertical fa-xl"></i></div>
                </div>
            </div>
            <HeaderTitle title={title} />
        </>
    )
}
