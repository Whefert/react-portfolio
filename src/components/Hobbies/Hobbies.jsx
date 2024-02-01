import HobbyItem from "../HobbyItem/HobbyItem";

export default function Hobbies() {
  return (
    <div id="hobbies" className="container">
      <div className="row">
        <HobbyItem
          hobby={"Football"}
          gifUrl={"https://giphy.com/embed/xUNd9ZwF0WIV0n3wJ2"}
        />
        <HobbyItem
          hobby={"Swimming"}
          gifUrl={"https://giphy.com/embed/PV4kSEGJcsV5C"}
        />
         
        <HobbyItem
          hobby={"Reading"}
          gifUrl={"https://giphy.com/embed/3oEduPlMkw4LZE7624"}
        />
      </div>
    </div>
  );
}
