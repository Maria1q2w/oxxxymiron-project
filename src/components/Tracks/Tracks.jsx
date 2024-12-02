import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import { useTrackItems } from '../hooks/useTrackItems';
import Icon from '../Icon/Icon';
import Loader from '../Loader/Loader';
import Section from '../Section/Section';
import s from '../styles/index.module.scss';
import SectionTitle from '../Title/SectionTitle';
import { getLocalDateString } from '../utils/common';

const Tracks = () => {
    const { items = [], isLoading } = useTrackItems();

    const [ audio ] = useState(new Audio());
    const [ playing, setPlaying ] = useState(false);
    const [ currentTrack, setCurrentTrack ] = useState(null);

    const handleTrackClick = (track) => {
        setPlaying((prev) => {
            const isPlaying = track.sys.id === currentTrack?.sys?.id ? !prev : true;
            audio.src = track.link.url;
            !isPlaying ? audio.pause() : audio.play();
            console.log(audio.duration);
            return isPlaying;
        })
        setCurrentTrack(track)
    }

    return (
        <Section className={s.tracksSection} >
            <div className={s.container}>
                <SectionTitle text="Релизы" />
                {isLoading ? <Loader /> : (<div className={s.tracks} >
                    {items.filter((_, i) => i < 3).map((track) => {
                        const { cover, title, sys: { id }, date } = track
                        return (
                            <ScrollAnimation key={id} className={s.trackItem} animateIn="fadeInLeft" animateOut="fadeOutRight" >
                            <div className={s.track} onClick={()  => handleTrackClick(track)}>
                                <div className={`${s.trackImage} ${!!playing && currentTrack.sys.id === id ? s.trackImagePaused : ""}`}>
                                    <img src={cover.url} alt={title} />
                                    {!!playing && currentTrack.sys.id === id ? <Icon name="pause" /> : <Icon name="play" /> }
                                </div>
                                <p className={s.trackDate}>{getLocalDateString(date, {month: "short"})}</p>
                                <h3 className={s.trackTitle}>{title}</h3>
                            </div>

                        </ScrollAnimation>
                        )
                        
                    })}
                </div>
                )}
                <Link to="/tracks" className={s.buttonMore}>
                    Все релизы 
                </Link>
            </div>

        </Section>
    )
}

export default Tracks;