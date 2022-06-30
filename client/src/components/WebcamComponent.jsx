import React from 'react'
import Webcam from 'react-webcam'

const videoConstraints = {
  width: '100%',
  height: '100%',
  facingMode: "user"
};

const WebcamComponent = ({onVote = false}) => {
    return (
        <Webcam
            audio={false}
            height={"95%"}
            screenshotFormat="image/jpeg"
            width={"95%"}
            videoConstraints={videoConstraints}
        >
            {
                onVote ? ({ getScreenshot }) => {
                    const image = getScreenshot();
                    console.log('voted' ,image)
                } : alert('Please allow access to front camera')
            }
        </Webcam>
    )
}

export default WebcamComponent