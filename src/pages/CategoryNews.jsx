import React, { useEffect, useState } from 'react';
import NewsCard from '../Components/NewsCard';
import { useLoaderData, useParams } from 'react-router';


    const CategoryNews = () => {
        const { id } = useParams(); //string
        const data = useLoaderData();
      
        const [categoryNews, setCategoryNews] = useState([]);
      
        useEffect(() => {
          if (id == "0") {
            setCategoryNews(data);
          } else if (id == "1") {
            const filteredNews = data.filter(
              (news) => news.others.is_today_pick == true
            );
      
            setCategoryNews(filteredNews);
          } else {
            const filteredNews = data.filter((news) => news.category_id == id);
            setCategoryNews(filteredNews);
          }
        }, [id, data]);

    return (
        <div>
      <h2 className="font-bold mb-5">
        Total <span className="text-secondary">{categoryNews.length}</span> news
        Found
      </h2>

      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
    );
};

export default CategoryNews;