<template>
  <div class="home">
    <div class="branding">
      <img :src="vonageLogo" />
    </div>
    <div class="login">
      <div class="form">
        <div class="tlnblogo">
          <img :src="tlnbLogo" />
        </div>
        <div class="content">
          <p>
            Welcome to The Late Night Build, the late night variety show
            hosted on by the
            <a
              href="https://twitch.tv/VonageDevs"
              target="_blank"
              noreferrer
            >VonageDevs</a>
            Twitch channel. We're excited you're here!
          </p>
          <p>
            Want to complete in our "Deploy on Friday" hack-a-thon? Already
            scheduled to compete and ready to get started? Authenticate with
            Twitter using the button below to proceed.
          </p>
          <button v-on:click="login">
            <font-awesome-icon :icon="['fab', 'twitter']" />&nbsp;Login with Twitter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vonageLogo from "@/assets/vonage-logo.png";
import tlnbLogo from "@/assets/tlnb-logo.png";

export default {
  data() {
    return {
      tlnbLogo,
      vonageLogo,
    };
  },
  methods: {
    login: function () {
      this.$router.push("/games");
    },
  },
  created() {
    if (this.$auth.isAuthenticated) {
      this.$router.push("/games");
    }
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;

  .branding {
    background-color: $black;
    background: url("/dev-bg.jpg") no-repeat;
    background-size: cover;
    background-position: 100%;
    flex: 0 0 70%;

    img {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 250px;
    }
  }

  .login {
    display: flex;
    flex: 0 0 30%;
    height: 100%;
    justify-content: center;

    .form {
      align-self: center;
      max-width: 70%;

      .tlnblogo {
        text-align: center;
        img {
          max-width: 100%;
          margin-bottom: 20px;
        }
      }
      .content {
        padding: 0px 30px;
      }
    }
  }

  @media (max-width: $breakpoint-tablet) {
    .branding {
      flex: 0 0 0%;
      visibility: hidden;
    }
    .login {
      flex: 0 0 100%;

      .form {
        max-width: 90%;
      }
    }
  }
}
</style>
