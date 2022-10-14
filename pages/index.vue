<template>
  <main>
    <MainSection
      id="home"
      class="home-banner"
      :style="{ backgroundImage: `url(${homeBannerImgSrc})` }"
    >
      <b-container class="home">
        <b-row align-content="center" class="full-screen">
          <b-col lg="9">
            <div class="ht-box">
              <div class="ht-text">
                <p>Hello, my name is</p>
                <h1>남재근</h1>
                <Typed
                  class="typed"
                  :strings="['FE Developer', 'BE Developer', 'DevOps']"
                />
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </MainSection>
    <MainSection id="about">
      <template #header-text>About</template>
      <template #header-desc>안녕하세요. 풀 스택 개발자 남재근입니다.</template>
      <b-row>
        <b-col lg="4">
          <img :src="require('@/assets/img/profile-img.png')" alt="" />
        </b-col>
        <b-col lg="8">
          <h3 class="text-primary">BE &#43; FE Developer.</h3>
          <p class="fst-italic"></p>
          <b-row>
            <b-col lg="6">
              <ul>
                <li>
                  <b-icon icon="chevron-right" variant="primary" />
                  <strong>생일:</strong> <span>1990. 07. 26.</span>
                </li>
                <li>
                  <b-icon icon="chevron-right" variant="primary" />
                  <strong>지역:</strong> <span>대한민국 서울특별시</span>
                </li>
                <li>
                  <b-icon icon="chevron-right" variant="primary" />
                  <strong>이메일:</strong>
                  <a href="mailto:kunie.dev@gmail.com">kunie.dev@gmail.com</a>
                </li>
                <li>
                  <b-icon icon="chevron-right" variant="primary" />
                  <strong>블로그:</strong>
                  <a href="https://blog.kunie.dev" target="_blank"
                  >https://blog.kunie.dev</a
                  >
                </li>
              </ul>
            </b-col>
            <b-col lg="6">
              <ul>
                <li>
                  <b-icon icon="chevron-right" variant="primary" />
                  <strong>나이:</strong> <span>{{ age }}</span>
                </li>
                <li>
                  <b-icon icon="chevron-right" variant="primary" />
                  <strong>학력:</strong> <span>대졸</span>
                </li>
                <li>
                  <b-icon icon="chevron-right" variant="primary" />
                  <strong>연락처:</strong>
                  <a href="tel:+821040795849">+82 10 4079 5849</a>
                </li>
                <li>
                  <b-icon icon="chevron-right" variant="primary" />
                  <strong>Github:</strong>
                  <a href="https://github.com/Kunie-dev" target="_blank"
                  >https://github.com/Kunie-dev</a
                  >
                </li>
              </ul>
            </b-col>
          </b-row>
          <p></p>
        </b-col>
      </b-row>
    </MainSection>
    <MainSection id="skills">
      <template #header-text>Skills</template>
    </MainSection>
    <MainSection id="resume">
      <template #header-text>Resume</template>
    </MainSection>
    <MainSection id="article">
      <template #header-text>Article</template>
      <b-card-group columns>
        <b-card
          v-for="post in posts"
          :key="`post-${post.id}`"
          :title="post.title"
          sub-title="Kunie.dev Blog"
        >
          <b-card-text>
            {{ post.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 100) }}
          </b-card-text>

          <b-link :href="post.url" target="_blank" class="card-link">Read more...</b-link>
        </b-card>
      </b-card-group>
    </MainSection>
    <MainSection id="contact">
      <template #header-text>Contact</template>
    </MainSection>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'
import Typed from '~/components/Typed.vue'
import MainSection from '~/components/main/MainSection.vue'

interface Post {
  kind: string;
  id: string;
  blog: {
    id: string;
  };
  published: string;
  updated: string;
  url: string;
  selfLink: string;
  title: string;
  content: string; // html string
  author: {
    id: string;
    displayName: string;
    url: string;
    img: {
      url: string;
    };
  };
  replies: {
    totalItems: string,
    selfLink: string
  };
  labels: string[],
  etag: string;
}
interface PostsResponse {
  kind: string;
  etag: string;
  items: Post[];
}

export default Vue.extend({
  name: 'IndexPage',
  components: {
    MainSection,
    Typed,
  },
  async mounted() {
    const { data: { items } } = await this.$axios.get<PostsResponse>(
      `${process.env.bloggerApiPostsBaseUrl}?key=${process.env.googleApiKey}`
    )

    this.posts = items.slice(0,6);
  },
  data() {
    return {
      posts: [] as Post[],
    }
  },
  computed: {
    homeBannerImgSrc() {
      return `${process.env.cdn}/images/inner_room_00.jpg`
    },
    age() {
      return dayjs().diff(dayjs('19900101', 'YYYYMMDD'), 'years') + 1
    },
  },
})
</script>

<style scoped lang="scss">
.home-banner {
  height: 100vh;
  background-position: 80% center;
  background-repeat: no-repeat;
  background-size: cover;

  > :before {
    content: '';
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }

  .ht-box {
    margin-top: 50px;
    padding-left: 35px;
    border-left: 5px solid #ffffff;

    p {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 0.5rem;
      line-height: 1.2;
    }

    h1 {
      font-weight: 600;
      font-size: 70px;
    }

    .typed {
      font-weight: 500;
      font-size: 25px;
    }
  }
}

.full-screen {
  min-height: 100vh;
}

#about {
  img {
    max-width: 100%;
    height: auto;
  }

  h3 {
    font-weight: 700;
    font-size: 26px;
  }

  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      svg {
        margin-right: 5px;
      }
      strong {
        margin-right: 10px;
      }
    }
  }
}
</style>
