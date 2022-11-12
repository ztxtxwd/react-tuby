import * as React from "react";

import { Player } from "../src";

const TestPlayer = () => {
  return (
    <Player
      src={[
        {
          quality: "Full HD",
          url:
            "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-28b21827-dcf2-495f-8477-6d8cd79b4872/e5bdfb5b-edb5-47b8-b88e-e781aa9dc7e7.mp4",
        },
        {
          quality: 720,
          url:
            "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-28b21827-dcf2-495f-8477-6d8cd79b4872/b604ae4d-1915-4036-b7ab-e53344e7ca7a.mp4",
        },
        {
          quality: 480,
          url:
            "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-28b21827-dcf2-495f-8477-6d8cd79b4872/787a7abf-2910-4bb6-be53-4ccd7f2a2959.mp4",
        },
      ]}
      subtitles={[
        {
          lang: "en",
          language: "English",
          url:
            "https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/en.vtt",
        },
        {
          lang: "fr",
          language: "French",
          url:
            "https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/fr.vtt",
        },
      ]}
      poster="https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/poster.png"
      chapters={[{startTime:0,endTime:30,name:'chapter1'},{startTime:30,endTime:183,name:'chapter2'}]}
      thumbnail={{url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-28b21827-dcf2-495f-8477-6d8cd79b4872/2726e15d-0276-4cd8-a82f-4b28586105ca.jpeg",width:80,height:45,frames:185}}
    />
  );
};

export default TestPlayer;
