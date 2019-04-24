import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div class="video-background">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)

export default Video
