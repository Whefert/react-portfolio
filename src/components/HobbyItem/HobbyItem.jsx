export default function HobbyItem({ hobby, gifUrl }) {
  return (
    <div className="col">
      <p>{hobby}</p>
      <iframe
        title="Shaolin Soccer"
        src={gifUrl}
        width="240"
        height="135"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/soccer-kung-fu-stephen-chow-xUNd9ZwF0WIV0n3wJ2"></a>
      </p>
    </div>
  );
}
