import sugar from "../images/sugar.png";
import fasting from "../images/fasting.png";
import classes from './Blog.module.css'

const Article = () => {
  const articles = [
    {
      title: "Unlocking the Benefits of Intermittent Fasting",
      img: fasting,
      subtitle:
        "Weight Management and Health Weight Management and Health Weight Management and Health Weight Management and Health Weight   ...",
    },
    {
      title: "The Impact of Sugar Consumption on Your Health",
      img: sugar,
      subtitle:
        "Unveiling the Hidden Dangers Unveiling the Hidden Dangers Unveiling the Hidden Dangers Unveiling the Hidden Dangers Unveiling the Hidden Dangers ....",
    },
  ];
  return articles.map((article) => (
    <div>
      <img src={article.img} alt="" />
      <h3 className={classes.articleTitle}>{article.title}</h3>
      <p className={classes.articleSub}>{article.subtitle}</p>
    </div>
  ));
};

export default Article;
