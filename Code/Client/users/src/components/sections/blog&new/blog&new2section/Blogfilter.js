import React from 'react';
import style from './blogfilter.module.css';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons

export default function Blogsection2molecule() {
    return (
        <div className={style.blog_section}>
            <div className={style.search_container}>
                <input type="text" placeholder="Search..." className={style.search_input} />
                <button className={style.search_button}>
                    <FaSearch />
                </button>
            </div>

            <div className={style.blog_subscribe}>
                <h2>Join our newsletter</h2>
                <p>Get regular access to our best deals and tips in your inbox.</p>
                <div className={style.subscribe_input}>
                    <input type="text" placeholder="Search..." />
                    <button>Subscribe</button>
                </div>
                <p>Rome2Rio will use the information you provide on this form to provide product 
                    updates and marketing offers. You can change your mind at any time by clicking 
                    the unsubscribe link in the footer of any email you receive from us.</p>
            </div>
            <div className={style.blog_category}>
                <h2>Categories</h2>
                <p>People & Culture</p>
                <p>Career</p>
                <p>Travel Technology</p>
                <p>Other</p>
            </div>
            <div className={style.latest_tweet}>
                <h2>Latest Tweet</h2>
            </div>
        </div>
    );
}

