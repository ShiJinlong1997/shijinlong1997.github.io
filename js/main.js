const Href = repoName => new URL(repoName, $config.origin).href;

const LIElemHTML = item => (
  `<li>
    <a href="${ Href(item.name) }" target="_blank">${ item.title }</a>
  </li>`
);

function main() {
  const ulElem = document.querySelector('body > ul');
  ulElem.innerHTML = R.compose( R.join(''), R.map(LIElemHTML) )($config.repoList);
}

main();
