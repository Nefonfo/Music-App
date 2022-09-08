import {MusicRouter} from './router'
import {Provider} from 'react-redux'
import {store} from './store'

export const AppleMusicClone = () => {
    return (
        <Provider store={store} >
            <MusicRouter />
        </Provider>
    )
}
