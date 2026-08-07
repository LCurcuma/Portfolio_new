"use client";

export default function ContactsSection({ translation, links }) {
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