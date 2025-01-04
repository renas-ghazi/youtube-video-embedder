class YouTubeEmbedder {
  constructor(containerId, options = {}) {
    this.containerId = containerId;
    this.width = options.width || "560";
    this.height = options.height || "315";
    this.styles = options.styles || {};
  }

  getYouTubeVideoId(url) {
    if (!url) return null;
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  }

  embedUrl(url) {
    const videoId = this.getYouTubeVideoId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  }

  createVideoElement(embedLink) {
    const videoContainer = document.createElement("div");
    videoContainer.className = "video-container";
    const iframe = document.createElement("iframe");
    iframe.src = embedLink;
    iframe.width = this.width;
    iframe.height = this.height;
    videoContainer.appendChild(iframe);
    document.getElementById(this.containerId).appendChild(videoContainer);
  }
}