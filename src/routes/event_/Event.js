import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactPaginate from 'react-paginate';
//data
import allBlogPosts from '../../data/allBlogPosts'
//components
import ScrollBtn from "../../helpers/ScrollBtn";
import ResetLocation from "../../helpers/ResetLocation";
import EventPosts from "./EventPosts";

const Event = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + 5);
  const [currentBlogPosts, setcurrentBlogPosts] = useState([...allBlogPosts].reverse().slice(itemOffset, endOffset));
  const [pageCountPosts, setpageCountPosts] = useState(Math.ceil(allBlogPosts.length / 5));

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % allBlogPosts.length;
    setItemOffset(newOffset);
    ResetLocation();
  };

  useEffect(() => {
    document.title = "Events | Hash Grill";
    setEndOffset(itemOffset + 5);
    setcurrentBlogPosts([...allBlogPosts].reverse().slice(itemOffset, endOffset));
    setpageCountPosts(Math.ceil(allBlogPosts.length / 5));

  }, [setEndOffset, endOffset, itemOffset]);
  return (
    <motion.main
      className="event"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}
    >
      <h2>Events</h2>
      <p className="event-intro">
        Pizza makes everything better. These are some of our favorite pizza
        events that are loaded with recipes and pizza-making tips.
      </p>
      <section className="event-grid">
        {currentBlogPosts.map((blogPost, index) => {
          return <EventPosts key={index} blogPost={blogPost} />;
        })}
      </section>
      <ReactPaginate
        className="pagination event-pagination"
        breakLabel="..."
        nextLabel=" &#62;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCountPosts}
        previousLabel="&#60;"
        renderOnZeroPageCount={null}
      />
      <ScrollBtn />
    </motion.main>
  );
}
export default Event;