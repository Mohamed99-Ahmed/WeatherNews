import articleNew from "../../types/New.type";
// this is props come from the parent component (article >  new object that contain may data)
type props ={
  article: articleNew;
}
export default function NewsBox({ article }:props) {
  return (
    <>
      <div className="card h-100 ">
        <img src={article.image} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{article.headline}</h5>
          <p className="card-text underline-none">{article.underHeadline}</p>
          <div className="d-flex flex-column justify-content-between gap-2">
            <span className="align-self-center ">{article.date}</span>
            <a href={article.url} target="_blank" className="btn btn-primary ">
              Go to New
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
