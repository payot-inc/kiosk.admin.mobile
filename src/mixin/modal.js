export default {
  data() {
    return {
      visible: false,
    };
  },
  watch: {
    visible(newValue) {
      const eventName = newValue ? 'onOpen' : 'onDismiss';
      this.$emit(eventName);
    }
  },
  methods: {
    open(value) {
      this.visible = value;
    },
  },
}