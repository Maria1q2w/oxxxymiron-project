import React, { useState } from 'react';
import { useTrackItems } from '../hooks/useTrackItems';
import Icon from '../Icon/Icon';
import Loader from '../Loader/Loader';
import s from '../styles/index.module.scss';
import PageTitle from '../Title/PageTitle';
import { getLocalDateString } from '../utils/common';

const TracksPage = ({text}) => {
    const { items = [], isLoading } = useTrackItems();

    const [ audio ] = useState(new Audio());
    const [playing, setPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);

    const handleTrackClick = (track) => {
        setPlaying((prev) => {
            const isPlaying = track.sys.id === currentTrack?.sys?.id ? !prev : true;
            audio.src = track.link.url;
            !isPlaying  ? audio.pause() : audio.play();
            return isPlaying;
        })
        setCurrentTrack(track)
    }
    return (
            <section className={`${s.tracksPage} ${s.page}`} > 
                <div className={s.container}>
                    <PageTitle text="Все  релизы" />
                    { isLoading ? ( <Loader /> ) : (
                        <ul className={s.tracksList}>
                            {items.map((track) => { const { sys: { id }, title, cover, date, description } = track;
                            const iconName = playing && id === currentTrack?.sys?.id ? "pause" : "play" ;
                                return (
                                    <li key={id} className={s.tracksListItem}>
                                        <div className={s.tracksListItemImage}>
                                            <img src={cover.url} alt={title} />
                                        </div>
                                        <div className={s.tracksListItemInfo}>
                                            <p className={s.tracksListItemDate} >
                                                {getLocalDateString(date, { month: "short" })}
                                            </p>
                                            <h2 className={s.tracksListItemTitle} >
                                                {title}
                                            </h2>
                                            <p className={s.tracksListItemDescription}>
                                                {description}
                                            </p>
                                        </div>
                                        <button className={s.tracksListItemButton} onClick={() => handleTrackClick(track) } >
                                            <span>слушать</span>
                                            <Icon name={iconName} />
                                        </button>
                                    </li>
                                )
                            } )}
                        </ul>
                    )} 
                </div>
            </section>
    )
}

export default TracksPage;