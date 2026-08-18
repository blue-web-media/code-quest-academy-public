"use client";
import React from "react";
const features=["Project-gated lessons","Blank coding playgrounds","Python and web foundations","Automatic practice tests","Quizzes and progress badges","Completion certificates"];
export default function PublicShowcase(){return <main><h1>Code Quest Academy</h1><p>Learn Python and web development by completing practical projects.</p><ul>{features.map(feature=><li key={feature}>{feature}</li>)}</ul><a href="https://python-quest-learning-lab.iamelishakay.chatgpt.site">Open the live platform</a></main>}
