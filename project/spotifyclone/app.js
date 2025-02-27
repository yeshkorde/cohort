const main = async () => {
  let songes = [];
  const res = await fetch("http://127.0.0.1:5500/project/spotifyclone/songes/");
  const text = await res.text();
  const div = document.createElement("div");
  div.innerHTML = text;
  const a = div.getElementsByTagName("a");
  Array.from(a).forEach((a) => {
    if (a.href.endsWith("mp3")) {
      songes.push(a.href);
    }
  });

};

main();
