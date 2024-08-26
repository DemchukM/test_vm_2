export default async function test() {
  const data = await fetch('https://api.github.com/repos/DemchukM/invika/contents/my_checkbox?ref=main');
  log(data.text());
}