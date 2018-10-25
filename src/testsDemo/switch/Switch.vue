<template>
  <div style="margin: 50px">
    <py-switch
      v-model="value"
      >
    </py-switch>
  </div>
</template>

<script>
import PYSwitch from '../../components/switch/';

export default {
  name: "switch-demo",
  components: {
    'py-switch': PYSwitch,
  },
  data() {
    return {
      value: true,
    };
  },
};
</script>
