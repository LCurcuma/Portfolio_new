"use client";
import { useState, useEffect } from "react";

export default function ContactsSection({ translation, links }) {
      const [clickedMore, setClickedMore] = useState(false);

      useEffect(() => {
        const elements = document.querySelectorAll(`.scroll_show_animate`);

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("show");
              } else {
                entry.target.classList.remove("show");
              }
            });
          },
          {
            threshold: 0.1,
          },
        );

        elements.forEach((el) => {
          observer.observe(el);

          if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add("show");
          }
        });

        return () => observer.disconnect();
      }, [clickedMore]);

    return (
      <div>
        <div>
          <h2>Contacts</h2>
          <p>
            Feel free to get in touch if you'd like to discuss a project,
            collaboration, or have any questions about my work. I'm most active
            on:
          </p>
          <ul>
            <a href="">
              <li>
                <img src="" />
                <p>zhihnadya2002@gmail.com</p>
              </li>
            </a>
            <a href="">
              <li>
                <img src="" />
                <p>zhihnadya2002@gmail.com</p>
              </li>
            </a>
          </ul>
        </div>
        <div>
          <h2>Social media</h2>
          <p>Here you can see more my works, sketches, animations etc.</p>
          <ul>
            <a href="">
              <li>
                <img src="" />
                <p>zhihnadya2002@gmail.com</p>
              </li>
            </a>
            <a href="">
              <li>
                <img src="" />
                <p>zhihnadya2002@gmail.com</p>
              </li>
            </a>
          </ul>
        </div>
      </div>
    );
}