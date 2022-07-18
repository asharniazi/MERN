import React from "react";

export default function Card(props) {
  return (
    <div class="card">
      <img
        src="https://lh3.googleusercontent.com/_uAYGGiz109G4ILj-JnROaigV6cv3dXKX0-uMbgqcHq1BCZp5WR-E1kKAlrt5yrwHMH8Vki4b9_1HwoAGXCPGkKd4wXRMcO3_rU5lQ=w320"
        class="card-img-top"
        alt="..."
      />
      <img
        src={props.url}
        class="card-img-top"
        alt={props.alt}
      />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">
          {props.description}
        </p>

        <p class="card-text"><a href="#" class="btn btn-primary">Button</a></p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  );
}
