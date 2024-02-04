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

  return (
    <div className="d-flex flex-column flex-md-row">
      <div
        className="col-12 col-sm-6 projectImage"
        // style={{
        //   backgroundImage: imgURL,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <img
          src={image}
          alt="sdads"
          style={{
            height: "auto",
            width: "100%",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className="col ps-3 ">
        <p>
          <strong>{name}</strong>
        </p>
        <p>{technologies.toString().slice(0, 20).toString()}...</p>
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
