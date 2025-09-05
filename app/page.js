async function Page({params}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id})`,
    {cache: 'no-store'});
};
  const post = await res.json();
