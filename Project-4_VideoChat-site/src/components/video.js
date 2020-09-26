import React, { useEffect, useRef } from 'react'
import TwilioVideo from "twilio-video"
import './video.css'

const Video = ({ token, name }) => {
    const localVidRef = useRef()
    const remoteVidRef = useRef()

    useEffect(() => {
        TwilioVideo.connect(token, { video: true, audio: true, name: "SVA" }).then(
            result => {
                // Attach the local video
                TwilioVideo.createLocalVideoTrack().then(track => {
                    localVidRef.current.appendChild(track.attach())
                })
                //Attach video for all remote participants
                const addParticipant = participant => {
                    participant.tracks.forEach(publication => {
                        if (publication.isSubscribed) {
                            const track = publication.track
                            remoteVidRef.current.appendChild(track.attach())
                        }
                    })

                    participant.on("trackSubscribed", track => {
                        remoteVidRef.current.appendChild(track.attach())
                    })
                }

                result.participants.forEach(addParticipant)
                result.on("participantConnected", addParticipant)

            })
    }, [token])

    return (
        <>
            <h2>{name}</h2>
            <div ref={localVidRef} />
            <h2>Remote Participants</h2>
            <div className="remoteVideo" ref={remoteVidRef} />
        </>
    )
}

export default Video;
