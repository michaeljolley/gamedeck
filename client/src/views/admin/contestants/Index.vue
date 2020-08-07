<template>
  <div class="users" :class="{'open': activeContestant}">
    <div class="listing">
      <h1>Contestants</h1>
      <div class="userList" v-if="contestants">
        <a
          href="#"
          @click.prevent="selectContestant(contestant)"
          class="contestant"
          v-for="contestant in contestants"
          :key="contestant._id"
        >
          <img :src="contestant.picture" />
          {{contestant.handle}}
        </a>
      </div>
    </div>
    <div class="detail">
      <ContestantEditor :contestant="activeContestant" />
    </div>
  </div>
</template>
<script>
import { adminStore } from "@/store/modules";
import ContestantEditor from "@/components/ContestantEditor";

export default {
  components: { ContestantEditor },
  data() {
    return {
      activeContestant: null,
    };
  },
  computed: {
    contestants() {
      return this.$store.state.admin.contestants;
    },
  },
  methods: {
    selectContestant(contestant) {
      this.activeContestant = contestant;
    },
  },
  created() {
    this.$store.dispatch(adminStore.actionTypes.CONTESTANTS_GET_ALL);
  },
};
</script>

<style lang="scss" scoped>
.users {
  display: flex;
  height: 100%;

  &.open {
    flex: 0 0 100%;

    .listing {
      flex: 0 0 50%;
    }
    .detail {
      flex: 0 0 50%;
    }
  }

  .listing {
    flex: 0 0 100%;
    height: 100%;
    padding: 20px;

    .userList {
      display: flex;

      .contestant {
        width: 200px;
        background-color: $gray2;
        border: solid 1px $gray3;
        padding: 15px;
        color: $black;
        margin-right: 5px;

        &:hover {
          background-color: $gray1;
          border-color: $purple;
          color: $purple;
        }

        img {
          width: 40px;
          border-radius: 20px;
          margin-right: 10px;
        }
      }
    }
  }
  .detail {
    flex: 0 0 0%;
    height: 100%;
    padding: 20px;
    background-color: $gray1;

    transition: margin 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
  }
}
</style>