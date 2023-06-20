import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort === 'name') {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }

    if (sort === 'created') {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }

    if (sort === 'price') {
      let sortedPosts = [...posts].sort((prev, next) => {
        if ( prev.price > next.price ) return -1;
        if ( prev.price > next.price ) return 1;
      })

      return sortedPosts;
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.name.toLowerCase().includes(query.toLowerCase()));
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
