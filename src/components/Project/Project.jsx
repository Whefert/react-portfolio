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
  return (
    <div className="d-flex flex-column flex-md-row">
      <div className="col-12 col-sm-6">
        <img
          src={image}
          alt={name}
          style={{
            height: "auto",
            width: "100%",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className="col ps-3 pt-3 pt-md-0">
        <p>
          <strong>{name}</strong>
        </p>
        <p>{technologies.toString().slice(0, 20).toString()}...</p>
        <p>
          Description:
          {description.slice(0, 100).toString()}
          ...
        </p>
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
