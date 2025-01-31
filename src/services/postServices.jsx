import http from "./httpServices";

export async function getAllPostsApi(queries, options = {}) {
  // Artificially delay a response for demo purposes.
  // Don't do this in production :)

  // console.log('Fetching revenue data...');
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return http
    .get(`/post/list?${queries}`, options)
    .then(({ data }) => data.data);
}
// export async function getPostBySlug(slug) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
//   );
//   const { data } = await res.json();
//   const { posts } = data || {};
//   return posts;
// }

export async function getPosts(queries, options) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`,
    options
  );
  const { data } = await res.json();
  const { posts ,totalPages} = data || [];

  return {posts,totalPages};
}

export async function likePostApi(postId) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}

export async function bookmarkPostApi(postId) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}

export async function createPostApi(data) {
  return http.post(`/post/create`,data).then(({ data }) => data.data);
}

export async function getPostBySlugApi(slug) {
  return http.get(`/post/slug/freelancering`).then(({ data }) => data.data);
}

