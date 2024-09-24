"use client"

import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import player from "./player.module.css"

export const Player = () => {

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Try to autoplay when the page loads
        if (audioRef.current) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch((error) => {
                console.log('Autoplay blocked. User interaction required:', error);
            });
        }
    }, []);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            });
        }
    };

    const handleStop = () => {
        if (audioRef.current) {
            audioRef.current.pause(); // Stop the playback
            audioRef.current.currentTime = 0; // Reset to the beginning
            setIsPlaying(false);
        }
    };

    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause(); // Pause the playback
            setIsPlaying(false);
        }
    };

    return (
        <div className={player.container}>
            <audio ref={audioRef} src="/audio/circle-of-life.mp3" />
            <div className={player.controlls}>
                {!isPlaying ? (
                    <Button content="icon" size="S" onClick={handlePlay}><FontAwesomeIcon icon={faPlay} /></Button>
                ) : (
                    <>
                        <Button content="icon" size="S" onClick={handlePause}><FontAwesomeIcon icon={faPause} /></Button>
                        <Button content="icon" size="S" onClick={handleStop}><FontAwesomeIcon icon={faStop} /></Button>
                    </>
                )}
            </div>
        </div>
    )
}