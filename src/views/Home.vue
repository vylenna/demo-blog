<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto" v-if="hasPosts">
        <div class="post-preview" v-for="(post, index) of posts" :key="index">
          <a href="post.html">
            <h2 class="post-title">
              {{ post.title }}
            </h2>
            <h3 class="post-subtitle">
              {{ post.intro }}
            </h3>
          </a>
          <p class="post-meta">Posted by
            <a href="#">
              {{ authors[post.authorId].name }}
            </a>
            on {{ post.createdAt | moment("MMMM D, YYYY") }}</p>
        </div>
        <hr>
        <Pagination/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Home',
  components: { Pagination },
  data() {
    return {
      posts: [],
      authors: {},
    };
  },
  async beforeMount() {
    try {
      const postsResponse = await axios.get('https://my-json-server.typicode.com/moldstud/fake-api/posts?_page=1&_limit=3&_sort=createdAt&_order=desc');
      const posts = postsResponse.data;
      const userIds = posts.map((value) => {
        return value.authorId;
      });
      const usersResponse = await axios.get('https://my-json-server.typicode.com/moldstud/fake-api/users', { params: { id: userIds } });

      usersResponse.data.forEach((user) => {
        this.authors[user.id] = user;
      });

      this.posts = posts;
    } catch (error) {
      // TODO: Handle errors.
      console.log(error);
    }
  },
  computed: {
    hasPosts() {
      return this.posts.length > 0;
    },
  },
};
</script>

<style scoped lang="scss">
  .post-preview {
    text-align: left;
    > a {
      color: #5060dd;
      &:focus,
      &:hover {
        text-decoration: none;
        color: #555;
      }
      > .post-title {
        font-size: 30px;
        margin-top: 30px;
        margin-bottom: 10px;
      }
      > .post-subtitle {
        font-weight: 400;
        margin: 0 0 10px;
      }
    }
    > .post-meta {
      font-size: 18px;
      font-style: italic;
      margin-top: 0;
      color: #666;
      > a {
        text-decoration: none;
        color: #888;
        &:focus,
        &:hover {
          text-decoration: underline;
          color: #666;
        }
      }
    }
    @media only screen and (min-width: 768px) {
      > a {
        > .post-title {
          font-size: 36px;
        }
      }
    }
  }

  .btn {
    font-size: 14px;
    font-weight: 800;
    padding: 15px 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 0;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #0085a1;
    border-color: #0085a1;
  }
</style>
