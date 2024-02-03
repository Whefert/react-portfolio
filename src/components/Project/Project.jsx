import "./Project.css";
export default function Project({
  isFeatured,
  image,
  name,
  technologies,
  description,
  deployedURL,
  gitHubURL,
}) {
  const imgURL = `url(${image})`;
  console.log(imgURL);
  return (
    <div className="d-flex">
      <div
        className="col-6 projectImage"
        style={{
          backgroundImage: imgURL,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="col ps-3 ">
        <p>
          <strong>{name}</strong>
        </p>
        <p>{technologies.toString()}</p>
        <p>Description: {description.slice(0, 100).toString()}...</p>
        {deployedURL ? (
          <p>
            <a href={deployedURL}>Link to deployed application</a>
          </p>
        ) : (
          ""
        )}
        <p>
          <a href={gitHubURL}> GitHub url</a>
        </p>
      </div>
    </div>
  );
}
