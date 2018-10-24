<template>
  <div>
    <div>radio选中值：{{radio}}</div>
     <radio-group v-model="radio">
      <my-radio name="1">单选框 1</my-radio>
      <my-radio name="2">单选框 2</my-radio>
    </radio-group>
     <div>------------------</div>
     <div>checkbox选中值：{{result }}</div>

    <checkbox-group v-model="result">
      <my-checkbox
        v-for="(item, index) in list"
        :key="item.id"
        :name="item.id"
      >
        自定义图标
        <img
          slot="icon"
          slot-scope="props"
          :src="props.checked ? icon.active : icon.normal"
        >
      </my-checkbox>
    </checkbox-group>
    <button @click="subCheckbox">checkbox提交</button>
  </div>
</template>
<script>
import radioGroup from '@/components/radio-group'
import myRadio from '@/components/radio'
import checkboxGroup from '@/components/checkbox-group'
import myCheckbox from '@/components/checkbox'
import checked from '@/components/icon/images/checked.png'
import unchecked from '@/components/icon/images/uncheck.png'
export default {
  data() {
    return {
      radio: "1",
      list: [{'id': '1','val': '火影忍者'}, {'id': '2','val': '妖精尾巴'}, {'id':'3','val': '网球王子'}],
      result: [],
       icon: {
        normal: unchecked,
        active: checked
      }
    }
  },
  computed: {
      
  },
  mounted() {
      
  },
  methods: {
       subCheckbox() {
            let arr = this.list.filter(item => this.result.includes(item.id))
            console.log(arr)
       }
  },
  components: {
     radioGroup,
     myRadio,
     checkboxGroup,
     myCheckbox
  },
  watch: {
      radio(newVal,oldVal) {
          console.log(newVal)
      }
  }
}
</script>