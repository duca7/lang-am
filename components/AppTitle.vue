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
      h('div', { class: 'underline' })
    ];
    const description = slots.default ? slots.default() : '';
    const descChild = h('p', { class: 'desc' }, description);

    const titleComponent = h('div', { class: 'title' }, textChild);
    return () => h('div', { class: 'app-title' }, [titleComponent, descChild]);
  }
};
</script>

<style lang="scss">
.title{
    display: flex;
    align-items: center;

    h1,
    .underline{
      font-size: 3.5rem;
    }

    h2,
    .underline{
      font-size: 2rem;
    }

    .underline{
        // flex:1;
        width: 1.5em;
        margin-left: 0.3em;
        height: 1px;
        background-color: #fff;
    }
}
</style>
