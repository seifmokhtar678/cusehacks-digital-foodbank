import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styling/News.scss";

// problems: Not every article has imgs, authors, & description looks choppy, can I set an amount of articles i want to show UP? how do i put an id to edit img size

const News = () => {
  // created so i can run the if statement below
  const [newsData, setNewsData] = useState("generatedHTML");
  //used useEffect so api calls when page first loads
  useEffect(() => {
    const newsAPICall = async () => {
      const newsResponse = await fetch(
        "https://newsapi.org/v2/everything?q=electricvehicles&apiKey=131adade018f40268123090acbdd829c&language=en"
      );
      // created variable to see apicall data in console
      const newsInfo = await newsResponse.json();
      console.log(newsInfo);
      // console.log(newsInfo.articles[1].title);

      // loopyloop
      let generatedHTML = "";

      for (const article of newsInfo.articles) {
        generatedHTML += `
                <img src="${article.urlToImage}"/>
                <p>Article title: ${article.title}</p>
                <p>Author:${article.author}</p>
                <p>Description:${article.description}</p>
                <a href="${article.url}" target="_blank">Read here</a>`;
      }
      document.getElementById("articleLists").innerHTML = generatedHTML;
    };
    newsAPICall();
  }, []); //call loads first time page loads, runs once

  if (!newsData) {
    return <h5>Loading Your EVNews!</h5>;
  }

  return (
    <div>
      {/* id to plug in so articles can render */}
      <h5 id="articleLists">NEWS</h5>
    </div>
  );
};

export default News;

// style={{maxWidth: 300}}
