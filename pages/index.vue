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
      <template #header-desc></template>
      <b-row>
        <b-col lg="4">
          <img :src="require('@/assets/img/profile-img.png')" alt="" />
        </b-col>
        <b-col tag="article" lg="8">
          <h3>Developer</h3>
          <p class="fst-italic"></p>
          <b-row>
            <b-col lg="6">
              <ul>
                <li>
                  <b-icon icon="chevron-right" />
                  <strong>생일:</strong> <span>{{ birthday }}</span>
                </li>
                <li>
                  <b-icon icon="chevron-right" />
                  <strong>지역:</strong> <span>대한민국 서울특별시 강동구</span>
                </li>
                <li>
                  <b-icon icon="chevron-right" />
                  <strong>이메일:</strong>
                  <a href="mailto:kunie.dev@gmail.com">kunie.dev@gmail.com</a>
                </li>
                <li>
                  <b-icon icon="chevron-right" />
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
                  <b-icon icon="chevron-right" />
                  <strong>나이:</strong> <span>{{ age }}</span>
                </li>
                <li>
                  <b-icon icon="chevron-right" />
                  <strong>학력:</strong> <span>대졸 - 컴퓨터공학과 (4년)</span>
                </li>
                <li>
                  <b-icon icon="chevron-right" />
                  <strong>연락처:</strong>
                  <a href="tel:+821040795849">010-4079-5849</a>
                </li>
                <li>
                  <b-icon icon="chevron-right" />
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
      <b-row tag="article">
        <b-col sm="12" md="4" lg="4" xl="4">
          <h3>Language</h3>
        </b-col>
        <b-col>
          <b-list-group>
            <b-list-group-item>Java</b-list-group-item>
            <b-list-group-item>Node.js (JavaScript)</b-list-group-item>
            <b-list-group-item>TypeScript</b-list-group-item>
            <b-list-group-item>PHP</b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
      <b-row tag="article">
        <b-col sm="12" md="4" lg="4" xl="4">
          <h3>Back-end</h3>
        </b-col>
        <b-col>
          <b-list-group>
            <b-list-group-item v-b-toggle.collapse-spring-framework>
              Spring Framework
              <b-badge pill class="float-right">3</b-badge>
              <b-collapse id="collapse-spring-framework" class="mt-2">
                <b-list-group>
                  <b-list-group-item>Spring Boot</b-list-group-item>
                  <b-list-group-item>Spring WebMVC</b-list-group-item>
                  <b-list-group-item>Spring Data</b-list-group-item>
                </b-list-group>
              </b-collapse>
            </b-list-group-item>
            <b-list-group-item>MyBatis</b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
      <b-row tag="article">
        <b-col sm="12" md="4" lg="4" xl="4">
          <h3>Front-end</h3>
        </b-col>
        <b-col>
          <b-list-group>
            <b-list-group-item>HTML / CSS / JavaScript</b-list-group-item>
            <b-list-group-item>React</b-list-group-item>
            <b-list-group-item>Vue.js</b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
      <b-row tag="article">
        <b-col sm="12" md="4" lg="4" xl="4">
          <h3>DevOps</h3>
        </b-col>
        <b-col>
          <b-list-group>
            <b-list-group-item v-b-toggle.collapse-aws>
              AWS
              <b-badge pill class="float-right">21</b-badge>
              <b-collapse id="collapse-aws" class="mt-2">
                <b-list-group>
                  <b-list-group-item>VPC</b-list-group-item>
                  <b-list-group-item>EC2</b-list-group-item>
                  <b-list-group-item>RDS</b-list-group-item>
                  <b-list-group-item>ElastiCache</b-list-group-item>
                  <b-list-group-item>DynamoDB</b-list-group-item>
                  <b-list-group-item>S3</b-list-group-item>
                  <b-list-group-item>CloudFront</b-list-group-item>
                  <b-list-group-item>Route 53</b-list-group-item>
                  <b-list-group-item>Lambda</b-list-group-item>
                  <b-list-group-item>EventBridge</b-list-group-item>
                  <b-list-group-item>Simple Email Service</b-list-group-item>
                  <b-list-group-item>Simple Notification Service</b-list-group-item>
                  <b-list-group-item>API Gateway</b-list-group-item>
                  <b-list-group-item>API AppSync</b-list-group-item>
                  <b-list-group-item>Certificate Manager</b-list-group-item>
                  <b-list-group-item>CloudWatch</b-list-group-item>
                  <b-list-group-item>ElasticBeanstalk</b-list-group-item>
                  <b-list-group-item>Amplify</b-list-group-item>
                  <b-list-group-item>IAM</b-list-group-item>
                  <b-list-group-item>Cognito</b-list-group-item>
                  <b-list-group-item>WAF</b-list-group-item>
                  <b-list-group-item>CloudFormation</b-list-group-item>
                </b-list-group>
              </b-collapse>
            </b-list-group-item>
            <b-list-group-item v-b-toggle.collapse-database>
              Database
              <b-badge pill class="float-right">3</b-badge>
              <b-collapse id="collapse-database" class="mt-2">
                <b-list-group>
                  <b-list-group-item>MariaDB (MySQL)</b-list-group-item>
                  <b-list-group-item>MSSQL</b-list-group-item>
                  <b-list-group-item>Oracle</b-list-group-item>
                </b-list-group>
              </b-collapse>
            </b-list-group-item>
            <b-list-group-item>Jenkins</b-list-group-item>
            <b-list-group-item>Docker</b-list-group-item>
            <b-list-group-item>Nexus Repository</b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
      <b-row tag="article">
        <b-col sm="12" md="4" lg="4" xl="4">
          <h3>Tools</h3>
        </b-col>
        <b-col>
          <b-list-group>
            <b-list-group-item v-b-toggle.collapse-jetbrains>
              JetBrains
              <b-badge pill class="float-right">3</b-badge>
              <b-collapse id="collapse-jetbrains" class="mt-2">
                <b-list-group>
                  <b-list-group-item>IntelliJ IDEA</b-list-group-item>
                  <b-list-group-item>WebStorm</b-list-group-item>
                  <b-list-group-item>DataGrip</b-list-group-item>
                </b-list-group>
              </b-collapse>
            </b-list-group-item>
            <b-list-group-item v-b-toggle.collapse-git>
              Git
              <b-badge pill class="float-right">3</b-badge>
              <b-collapse id="collapse-git" class="mt-2">
                <b-list-group>
                  <b-list-group-item>GitHub</b-list-group-item>
                  <b-list-group-item>GitLab</b-list-group-item>
                  <b-list-group-item>Bitbucket</b-list-group-item>
                </b-list-group>
              </b-collapse>
            </b-list-group-item>
            <b-list-group-item>Slack</b-list-group-item>
            <b-list-group-item>Jira</b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </MainSection>
    <MainSection id="experience">
      <template #header-text>Experience</template>
    </MainSection>
    <MainSection id="certification">
      <template #header-text>Certification</template>
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
            {{ post.content.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 100) }}
          </b-card-text>

          <b-link :href="post.url" target="_blank" class="card-link"
            >Read more...</b-link
          >
        </b-card>
      </b-card-group>
    </MainSection>
    <MainSection id="contact">
      <template #header-text>Contact</template>
      <b-row>
        <b-col lg="4">
          <address class="info">
            <div class="location d-flex align-items-center">
              <b-icon
                icon="geo-alt"
                class="rounded-circle bg-info p-2 float-left"
                variant="light"
                font-scale="3"
              />
              <div class="d-flex flex-column ml-3">
                <span class="h5">지역</span>
                <span>대한민국 서울특별시 강동구</span>
              </div>
            </div>
            <div class="email d-flex align-items-center">
              <b-icon
                icon="envelope"
                class="rounded-circle bg-info p-2 float-left"
                variant="light"
                font-scale="3"
              />
              <div class="d-flex flex-column ml-3">
                <span class="h5">이메일</span>
                <a href="mailto:kunie.dev@gmail.com">kunie.dev@gmail.com</a>
              </div>
            </div>
            <div class="phone d-flex align-items-center">
              <b-icon
                icon="phone"
                class="rounded-circle bg-info p-2 float-left"
                variant="light"
                font-scale="3"
              />
              <div class="d-flex flex-column ml-3">
                <span class="h5">휴대폰</span>
                <a href="tel:+821040795849">010-4079-5849</a>
              </div>
            </div>
          </address>
        </b-col>
        <b-col lg="8">
          <b-form @submit="onSubmit" class="position-relative pb4">
            <b-form-group :label-sr-only="true">
              <b-form-input
                type="text"
                v-model="name"
                placeholder="성함"
                required
                size="lg"
              />
            </b-form-group>
            <b-form-group :label-sr-only="true">
              <b-form-input
                type="email"
                v-model="email"
                placeholder="이메일"
                required
                size="lg"
              />
            </b-form-group>
            <b-form-group :label-sr-only="true">
              <b-form-input
                type="text"
                v-model="title"
                placeholder="제목"
                required
                size="lg"
              />
            </b-form-group>
            <b-form-group :label-sr-only="true">
              <b-form-textarea
                v-model="content"
                placeholder="내용"
                required
                rows="5"
                size="lg"
              />
            </b-form-group>
            <b-button
              type="submit"
              pill
              size="lg"
              variant="info"
              class="w-25 m-auto d-block"
              >발송</b-button
            >
            <b-overlay :show="showContactOverlay" no-wrap rounded />
          </b-form>
        </b-col>
      </b-row>
    </MainSection>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'
import Typed from '~/components/Typed.vue'
import MainSection from '~/components/main/MainSection.vue'
import {Post, PostsResponse} from "~/types/Blogger";

const myBirthday = dayjs('19900726', 'YYYYMMDD');
const myBirthdayFirstDate = dayjs('19900101', 'YYYYMMDD');

export default Vue.extend({
  name: 'IndexPage',
  components: {
    MainSection,
    Typed,
  },
  async mounted() {
    const {
      data: { items },
    } = await this.$axios.get<PostsResponse>(
      `${process.env.bloggerApiPostsBaseUrl}?key=${process.env.googleApiKey}`
    )

    this.posts = items.slice(0, 6)
  },
  data() {
    return {
      posts: [] as Post[],
      showContactOverlay: false,
      name: '',
      email: '',
      title: '',
      content: '',
    }
  },
  computed: {
    homeBannerImgSrc() {
      return `${process.env.cdn}/images/inner_room_00.jpg`
    },
    birthday() {
      return myBirthday.format("YYYY. MM. DD.")
    },
    age() {
      return dayjs().diff(myBirthdayFirstDate, 'years') + 1
    },
  },
  methods: {
    async onSubmit(event: SubmitEvent) {
      event.preventDefault()

      setTimeout(() => {
        this.showContactOverlay = true
        try {
          // await this.$axios.post(`${process.env.apiBaseUrl}/contact`, {
          //   name: this.name,
          //   email: this.email,
          //   title: this.title,
          //   content: this.content,
          // })

          alert('발송되었습니다.')
          this.name = ''
          this.email = ''
          this.title = ''
          this.content = ''
        } catch (e) {
          console.error(e)
          alert('Error')
        } finally {
          this.showContactOverlay = false
        }
      }, 1000)
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

#skills article {
  margin: 30px 0;
}

#contact {
  .location,
  .email,
  .phone {
    font-size: 14px;
    color: #728394;
    margin-bottom: 40px;

    .h5 {
      font-weight: 600;
    }
  }
}
</style>
