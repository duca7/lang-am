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
    const textChild = [
      h(heading, { class: 'text' }, props.title),
      h('img', { class: 'underline', src: '/images/nhanh-sen.png' })
    ];

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
      transform: scale(1.5);
    }
  }

  h2 {
    font-size: 2rem;
  }

  h3,
  h4,
  h5,
  h6 {
    font-size: 1.5rem;
  }

  .underline {
    margin-left: .7em;
    width: 70px;
    height: auto;
  }
}
</style>
