import * as React from "react";

function StickyNote(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="currentColor" width={24} height={24} {...props}><path d="M43.5 55h-27A11.5 11.5 0 015 43.5v-27A11.5 11.5 0 0116.5 5h27A11.5 11.5 0 0155 16.5v27A11.501 11.501 0 0143.5 55zm-27-45a6.525 6.525 0 00-6.5 6.5v27a6.525 6.525 0 006.5 6.5h27a6.525 6.525 0 006.5-6.5v-27a6.525 6.525 0 00-6.5-6.5h-27z" /><path d="M36.175 55a2.5 2.5 0 01-2.5-2.5v-8.3a7.498 7.498 0 012.2-5.45 7.498 7.498 0 015.4-2.275H52.5a2.5 2.5 0 010 5H41.175a2.499 2.499 0 00-1.85.775 2.498 2.498 0 00-.75 1.875v8.325a2.5 2.5 0 01-2.5 2.5l.1.05z" /></svg>;
}

export default StickyNote;