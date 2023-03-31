import React from "react";
import './NoteCard.css'


const NoteCard = ({note, index}) => {
  
return (
<div id="main_readmore_body" key={index}>
    <div id="readmore_body" class="big_card noteCard my-5 card">
        <div class="card-body">
            <div class="is_flex_title">
                <h5>Title: </h5>
                <p class="card-title zoomed_title">{note.title}</p>
            </div>
            <br/>
            <div class="content_joiner">
                <div class="is_flex_new">
                    <h6>Added Date: </h6>
                    <p class="card-title zoomed_title">{note.createdAt}</p>
                </div>
            </div>
        </div>
        <hr class="mx-3"/>
         <p class="card-text mx-3 zoomed_text">{note.description}</p>
        <hr class="mx-3"/>
    </div>
</div>
  );
};

export default NoteCard;
