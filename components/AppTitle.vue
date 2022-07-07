<script>
import { h } from 'vue';
export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  setup (props, { slots }) {
    const heading = 'h' + props.level;
    const child = [
      h(heading, { class: 'text' }, slots.default()),
      h('div', { class: 'underline' })
    ];
    return () => h('div', { class: 'title' }, child);
  }
};
</script>

<style lang="scss">
.title{
    display: flex;
    align-items: center;
    font-size: 3.5rem;

    .underline{
        flex:1;
        max-width: 1.5em;
        margin-left: 0.3em;
        height: 1px;
        background-color: #fff;
    }
}
</style>
