import "./ContactItem.css";

export default function ContactItem({ icon, url, text }) {
  return (
    <span className="text-white ms-3">
      <i class={icon}></i>{" "}
      <a href={url} className="ms-1">
        {text}
      </a>
    </span>
  );
}
