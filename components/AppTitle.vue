<script>
import { h } from 'vue';

export default {
  props: {
    level: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      require: true
    }
  },
  setup (props, { slots }) {
    const heading = 'h' + props.level;
    const textChild = [h(heading, { class: 'text' }, props.title), h('div', { class: 'underline' })];

    if (slots.default) {
      const child = [h('div', { class: 'title' }, textChild), h('p', { class: 'desc' }, slots.default())];
      return () => h('div', { class: 'app-title' }, child);
    }

    return () => h('div', { class: 'title' }, textChild);
  }
};
</script>

<style lang="scss">
.title {
  display: flex;
  align-items: center;

  h1 {
    font-size: 3.5rem;

    &+.underline {
      max-width: 5rem;
    }
  }

  h2 {
    font-size: 2rem;

    &+.underline {
      max-width: 4rem;
    }
  }

  h3,
  h4,
  h5,
  h6 {
    font-size: 1.5rem;

    &+.underline {
      max-width: 3rem;
    }
  }

  .underline {
    flex: 1;
    margin-left: 0.3em;
    height: 1px;
    background-color: #fff;
  }
}
</style>
