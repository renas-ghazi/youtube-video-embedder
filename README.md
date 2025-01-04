# Installation Instructions
To install the YouTube Embedder package, use npm:

```
npm install youtube-embedder-package
```

# Usage
To use the YouTube Embedder in your project, follow these steps:

1. Import the YouTubeEmbedder class:

```javascript
import YouTubeEmbedder from 'youtube-embedder-package/src/youtubeEmbedder';
```

2. Create an instance of the YouTubeEmbedder class:

```javascript
const embedder = new YouTubeEmbedder('video-container', {
  width: '800',
  height: '450',
  styles: {
    border: 'none'
  }
});
```

3. Use the `embedUrl` method to get the embed link from a YouTube URL:

```javascript
const url = 'https://www.youtube.com/watch?v=VIDEO_ID';
const embedLink = embedder.embedUrl(url);
```

4. Create the video element and append it to your container:

```javascript
const videoElement = embedder.createVideoElement(embedLink);
document.getElementById('video-container').appendChild(videoElement);
```

# Example
Here is a complete example of how to use the YouTube Embedder:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouTube Embedder Example</title>
</head>
<body>
    <div id="video-container"></div>
    <script type="module">
        import YouTubeEmbedder from 'youtube-embedder-package/src/youtubeEmbedder';

        const embedder = new YouTubeEmbedder('video-container');
        const url = 'https://www.youtube.com/watch?v=VIDEO_ID';
        const embedLink = embedder.embedUrl(url);
        const videoElement = embedder.createVideoElement(embedLink);
        document.getElementById('video-container').appendChild(videoElement);
    </script>
</body>
</html>
```

# License
This project is licensed under the MIT License. See the LICENSE file for details.